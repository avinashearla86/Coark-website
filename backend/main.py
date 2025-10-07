from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from pathlib import Path
import base64
import pickle
from email.mime.text import MIMEText
from googleapiclient.discovery import build

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR.parent / "dist"  # React build folder
TOKEN_PATH = BASE_DIR / "token.pickle"

app = FastAPI()

# ===== CORS =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "https://coark-website-latest.onrender.com",
        "https://coarkmedia.in",
        "https://www.coarkmedia.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== Serve static files =====
app.mount("/assets", StaticFiles(directory=FRONTEND_DIR / "assets"), name="assets")

@app.get("/favicon.ico")
async def favicon():
    favicon_path = FRONTEND_DIR / "favicon.ico"
    if favicon_path.exists():
        return FileResponse(favicon_path)
    raise HTTPException(status_code=404, detail="Favicon not found")

# ===== Contact Form =====
class ContactForm(BaseModel):
    first_name: str
    last_name: str
    email: str
    mobile_number: str | None = None
    service: str
    message: str

@app.post("/send-message")
async def send_message(form: ContactForm):
    try:
        if not TOKEN_PATH.exists():
            raise FileNotFoundError("Token file not found")

        with open(TOKEN_PATH, "rb") as token:
            creds = pickle.load(token)

        service = build("gmail", "v1", credentials=creds)

        subject = f"New Contact Form Submission: {form.service}"
        body = f"""
📩 New Contact Form Submission

First Name: {form.first_name}
Last Name: {form.last_name}
Email: {form.email}
Mobile Number: {form.mobile_number or 'Not provided'}
Service: {form.service}
Message:
{form.message}
"""

        message = MIMEText(body)
        message["to"] = "coarkmedia@gmail.com"
        message["from"] = form.email
        message["subject"] = subject

        raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
        create_message = {"raw": raw_message}

        sent = service.users().messages().send(userId="me", body=create_message).execute()
        return {"detail": f"✅ Message sent successfully! ID: {sent['id']}"}

    except Exception as e:
        print("Error sending message:", e)
        raise HTTPException(status_code=500, detail=f"Failed to send message: {e}")

# ===== Serve React Frontend =====
@app.get("/")
async def serve_index():
    index_path = FRONTEND_DIR / "index.html"
    if index_path.exists():
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="index.html not found")

@app.get("/{full_path:path}")
async def serve_react_router(full_path: str):
    file_path = FRONTEND_DIR / full_path
    if file_path.exists():
        return FileResponse(file_path)
    index_path = FRONTEND_DIR / "index.html"
    return FileResponse(index_path)
