from google_auth_oauthlib.flow import InstalledAppFlow
import pickle
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
TOKEN_PATH = BASE_DIR / "token.pickle"

# Scopes required for sending email
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

flow = InstalledAppFlow.from_client_secrets_file(str(BASE_DIR / "credentials.json"), SCOPES)
creds = flow.run_local_server(port=0)

# Save the credentials for future use
with open(TOKEN_PATH, "wb") as token:
    pickle.dump(creds, token)

print(f"✅ Token generated and saved as {TOKEN_PATH}")
