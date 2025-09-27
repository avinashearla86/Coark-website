# main.py (FastAPI backend)
from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import aiosmtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

load_dotenv()  # Load environment variables from .env

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://coark-website-7.onrender.com"],  # Updated with your Render URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static React build assets from dist folder
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

@app.post("/send-message")
async def send_message(
    first_name: str = Form(...),
    last_name: str = Form(...),
    email: str = Form(...),
    mobile_number: str = Form(None),  # Optional
    service: str = Form(...),
    message: str = Form(...)
):
    try:
        # Email content
        subject = f"New Contact Form Submission: {service}"
        body = f"""
        First Name: {first_name}
        Last Name: {last_name}
        Email: {email}
        Mobile Number: {mobile_number or 'Not provided'}
        Service: {service}
        Message: {message}
        """

        # Set up email message
        email_message = EmailMessage()
        email_message["From"] = os.getenv("SMTP_USERNAME")
        email_message["To"] = "coarkmedia@gmail.com"
        email_message["Subject"] = subject
        email_message.set_content(body)

        # Send email via Gmail SMTP
        await aiosmtplib.send(
            email_message,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=os.getenv("SMTP_USERNAME"),
            password=os.getenv("SMTP_PASSWORD")
        )

        return {"detail": "Message sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

# Catch-all route to serve React's index.html for client-side routing
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    index_path = Path("dist/index.html")
    if index_path.exists():
        return FileResponse(index_path)
    raise HTTPException(status_code=404, detail="Not Found")
