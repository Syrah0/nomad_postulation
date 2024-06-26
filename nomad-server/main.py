from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import router as endpoints_router

app = FastAPI()

app.include_router(endpoints_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
