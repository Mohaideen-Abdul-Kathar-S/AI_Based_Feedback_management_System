from fastapi import APIRouter
from app.schemas.company import CompanyCreate, CompanyUpdate
from app.services.company_service import (
    create_company,
    get_all_companies,
    update_company,
    delete_company
)

router = APIRouter()


@router.post("/")
def add_company(company: CompanyCreate):
    return { "message": create_company(company) }


@router.get("/")
def fetch_companies():
    return get_all_companies()


@router.put("/{company_id}")
def edit_company(company_id: str, company: CompanyUpdate):
    return { "message": update_company(company_id, company) }



@router.delete("/{company_id}")
def remove_company(company_id: str):
    return { "message": delete_company(company_id) }
