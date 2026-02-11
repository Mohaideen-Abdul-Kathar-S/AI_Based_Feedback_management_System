from fastapi import APIRouter
from app.services.coordinator_service import (
    get_all_coordinators,
    update_coordinator,
    delete_coordinator
)
from app.schemas.coordinator import CoordinatorUpdate

router = APIRouter()

@router.get("/", tags=["Coordinators"])
def fetch_all_coordinators():
    return get_all_coordinators()


@router.put("/{coordinator_id}", tags=["Coordinators"])
def update_coordinator_route(coordinator_id: int, data: CoordinatorUpdate):
    return {
        "message": update_coordinator(coordinator_id, data)
    }


@router.delete("/{coordinator_id}", tags=["Coordinators"])
def delete_coordinator_route(coordinator_id: int):
    return {
        "message": delete_coordinator(coordinator_id)
    }
