import secrets

def generate_verify_token(email: str):
    return secrets.token_urlsafe(32)
