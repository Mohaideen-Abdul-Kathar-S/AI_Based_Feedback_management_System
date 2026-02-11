from pydantic import BaseModel


class FeedbackMailRequest(BaseModel):
    student_email: str
    dept: str
    round_no: int
    company_name: str
