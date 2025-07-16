# ai_service/scripts/recommend_universities.py

import pandas as pd
import os

# Static university dataset (you can later replace this with a DB or API)
UNIVERSITY_DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/universities.csv')

# Load university dataset
def load_data():
    try:
        return pd.read_csv(UNIVERSITY_DATA_PATH)
    except FileNotFoundError:
        return pd.DataFrame([])

# Filter universities based on business type
def recommend_universities(business_type: str, top_n: int = 5):
    """
    Recommends top universities offering programs in business, tech, or industry-specific domains.

    Parameters:
        business_type (str): Type of the business (e.g., Tech, Finance, Healthcare, Retail)
        top_n (int): Number of university recommendations

    Returns:
        List[Dict]: Top matching universities with name and programs
    """
    df = load_data()
    if df.empty:
        return [{"error": "University dataset not found."}]

    # Case-insensitive match
    filtered = df[df['focus_area'].str.contains(business_type, case=False, na=False)]

    # Return top N universities
    recommendations = filtered.head(top_n)[['university_name', 'location', 'focus_area', 'ranking']]

    return recommendations.to_dict(orient='records')
