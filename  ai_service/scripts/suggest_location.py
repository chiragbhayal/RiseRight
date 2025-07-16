# ai_service/scripts/suggest_location.py

import joblib
import pandas as pd
import os

# Load the trained classification model
MODEL_PATH = os.path.join(os.path.dirname(__file__), '../models/location_classifier.pkl')
model = joblib.load(MODEL_PATH)

# Function to recommend better locations
def suggest_location(input_data: dict):
    """
    Suggests a better location for a business based on its parameters.
    
    Parameters:
        input_data (dict): Must include:
            - business_type (str)
            - funding (float/int)
            - years_operating (int)

    Returns:
        str: Recommended city/location name
    """
    try:
        # Convert input to DataFrame
        df = pd.DataFrame([input_data])

        # One-hot encode business_type if needed
        if 'business_type' in df.columns:
            df = pd.get_dummies(df)

        # Align with model input
        model_columns = model.feature_names_in_
        for col in model_columns:
            if col not in df.columns:
                df[col] = 0
        df = df[model_columns]

        # Predict location
        prediction = model.predict(df)
        return prediction[0]

    except Exception as e:
        return {"error": str(e)}
