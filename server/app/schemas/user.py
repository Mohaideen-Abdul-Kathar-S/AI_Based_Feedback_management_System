from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    email: EmailStr
    roll_no: str = None
    password: str
    role: str = "student"
    dept: str = None

class UserResponse(UserRegister):
    id: int

    class Config:
        from_attributes = True
