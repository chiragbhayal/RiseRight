# ai_service/api/app.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.endpoints import router as ai_router

app = FastAPI(
    title="RiseRight AI Service",
    description="AI/ML microservice for business growth analysis, tips, and suggestions.",
    version="1.0.0"
)

# Allow all frontend origins for dev purposes (configure securely in prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the API routes from endpoints.py
app.include_router(ai_router, prefix="/api/ai")

# Health Check Route
@app.get("/")
def read_root():
    return {"message": "RiseRight AI/ML service is running."}
