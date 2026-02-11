# app/schemas/login.py
from pydantic import BaseModel

class LoginSchema(BaseModel):
    userID: str
    password: str
