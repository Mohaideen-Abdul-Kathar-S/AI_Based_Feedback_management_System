from fastapi import APIRouter, HTTPException
from app.schemas.feedback_request import FeedbackMailRequest
from app.core.email import send_feedback_request_email

router = APIRouter()

@router.post("/send-feedback-mail")
def send_feedback_mail(data: FeedbackMailRequest):
    try:
        send_feedback_request_email(
            student_email=data.student_email,
            dept=data.dept,
            round_no=data.round_no,
            company_name=data.company_name
        )
        return {"message": "Feedback mail sent successfully ✅"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
