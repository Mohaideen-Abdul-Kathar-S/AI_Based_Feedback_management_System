from pydantic import BaseModel

class CoordinatorUpdate(BaseModel):
    email: str | None = None
    role: str | None = None
    dept: str | None = None
    is_verified: bool | None = None
