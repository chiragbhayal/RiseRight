# ai_service/api/endpoints.py

from fastapi import APIRouter, HTTPException, Request
from pydantic import BaseModel
from typing import List, Dict

from scripts.predict_growth import predict_growth
from scripts.suggest_location import suggest_location
from scripts.recommend_universities import recommend_universities
from scripts.generate_tips import generate_tips
from scripts.resource_matcher import match_resources

router = APIRouter()


# Define request models
class BusinessRequest(BaseModel):
    business_type: str
    location: str
    funding: float
    additional_info: Dict = {}


@router.post("/predict-growth")
def growth_prediction(request: BusinessRequest):
    try:
        prediction = predict_growth(request.dict())
        return {"growth_score": prediction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/suggest-location")
def location_suggestion(request: BusinessRequest):
    try:
        alternatives = suggest_location(request.dict())
        return {"recommended_locations": alternatives}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/recommend-universities")
def universities_recommendation(request: BusinessRequest):
    try:
        universities = recommend_universities(request.dict())
        return {"recommended_universities": universities}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/generate-tips")
def tips_generator(request: BusinessRequest):
    try:
        tips = generate_tips(request.dict())
        return {"growth_tips": tips}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/match-resources")
def resources_matcher(request: BusinessRequest):
    try:
        resources = match_resources(request.dict())
        return {"recommended_resources": resources}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
