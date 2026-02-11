from fastapi import APIRouter
from app.services.History_service import get_completed_companies, get_round_statistics

router = APIRouter()

@router.get("/completed/{batch}")
def fetch_completed_companies(batch: int):
    return {
        "companies": get_completed_companies(batch)
    }

@router.post("/company-round-stats")
def get_company_round_stats(data: dict):
    return get_round_statistics(data["company_id"], data["dept"])
