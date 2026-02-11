from fastapi import APIRouter, UploadFile, File, Form
from app.services.round_result_service import process_excel

router = APIRouter()

@router.post("/upload")
def upload_round_result(
    company_id: str = Form(...),
    round_no: int = Form(...),
    file: UploadFile = File(...)
):
    return {
        "message": process_excel(company_id, round_no, file)
    }
