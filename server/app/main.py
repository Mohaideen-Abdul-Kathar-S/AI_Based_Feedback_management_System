from fastapi import FastAPI
from app.routes import user, login
from app.core.init_db import create_tables
from app.routes import company
from app.routes import coordinator
from app.routes import round_result
from app.routes import history
from app.routes import feedback_mail


app = FastAPI()

@app.on_event("startup")
def on_startup():
    create_tables()


app.include_router(user.router, prefix="/users", tags=["Users"])

app.include_router(login.router, prefix="/login", tags=["Authentication"])

app.include_router(
    coordinator.router,
    prefix="/coordinators",
    tags=["Coordinators"]
)

app.include_router(
    company.router,
    prefix="/companies",
    tags=["Companies"]
)

app.include_router(
    history.router,
    prefix="/history",
    tags=["History."]
)

app.include_router(
    round_result.router,
    prefix="/round-result",
    tags=["Round Result"]
)

app.include_router(feedback_mail.router, prefix="/mail", tags=["Mail"])


@app.get("/")
def root():
    return {"message": "Hello World"}