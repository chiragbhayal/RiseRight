# ai_service/scripts/predict_growth.py

import joblib
import pandas as pd
import os

# Load the trained model
MODEL_PATH = os.path.join(os.path.dirname(__file__), '../models/growth_predictor.pkl')
model = joblib.load(MODEL_PATH)

# Function to preprocess input data and make prediction
def predict_growth(input_data: dict):
    """
    Predicts the growth score of a business based on input features.
    
    Parameters:
        input_data (dict): Dictionary containing the following keys:
            - location
            - business_type
            - funding
            - years_operating

    Returns:
        float: Predicted growth score (0.0 to 1.0 scale)
    """
    try:
        # Convert input dict to DataFrame
        df = pd.DataFrame([input_data])

        # One-hot encode input (must match training format)
        df_encoded = pd.get_dummies(df)

        # Align columns with model training columns
        model_columns = model.feature_names_in_
        for col in model_columns:
            if col not in df_encoded.columns:
                df_encoded[col] = 0
        df_encoded = df_encoded[model_columns]

        # Predict using the model
        prediction = model.predict(df_encoded)
        return float(prediction[0])

    except Exception as e:
        return {"error": str(e)}
