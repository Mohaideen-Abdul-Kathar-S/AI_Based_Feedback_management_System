from pydantic import BaseModel
from datetime import date

class CompanyCreate(BaseModel):
    id: str
    company_name: str
    type: str
    description: str | None = None
    batch: int
    rounds: int
    next_round: int = 0
    start_date: date
    end_date: date


class CompanyUpdate(BaseModel):
    company_name: str | None = None
    type: str | None = None
    description: str | None = None
    batch: int | None = None
    rounds: int | None = None
    next_round: int | None = None
    start_date: date | None = None
    end_date: date | None = None
