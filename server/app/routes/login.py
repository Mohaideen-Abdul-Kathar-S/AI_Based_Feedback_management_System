from fastapi import APIRouter
from app.schemas.login import LoginSchema
from app.services.login_service import login

router = APIRouter()

@router.post("/login")
def findLogin(loginData: LoginSchema):
    search_by = (
        "email"
        if loginData.userID.endswith("@kongu.edu")
        else "roll_no"
    )

    return {
        "message": login(
            loginData.userID,
            loginData.password,
            search_by
        )
    }
