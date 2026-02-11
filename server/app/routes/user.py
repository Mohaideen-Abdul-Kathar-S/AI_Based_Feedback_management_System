from fastapi import APIRouter
from app.schemas.user import UserRegister
from app.services.user_service import register_student, verify_student, register_coordinator

router = APIRouter()

@router.post("/student/register")
def student_register(student: UserRegister):
    print(student)
    return { "message": register_student(student) }

@router.get("/verify")
def verify(token: str):
    return { "message": verify_student(token) }

@router.post("/coordinator/register")
def coordinator_register(student: UserRegister):
    print(student)
    return { "message": register_coordinator(student) }