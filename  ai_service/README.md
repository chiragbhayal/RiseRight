# 🤖 RiseRight AI Service

This folder contains the AI/ML microservices for the **RiseRight** project — a Business Support & Growth Analysis Tool that provides predictive analytics, recommendations, and trend analysis using trained models.

---

## 📦 Project Structure

```
ai_service/
│
├── models/                  # 🧠 Pre-trained ML models (.pkl)
│   ├── growth_predictor.pkl
│   └── location_classifier.pkl
│
├── scripts/                 # 📜 Core ML logic
│   ├── predict_growth.py
│   ├── suggest_location.py
│   ├── recommend_universities.py
│   ├── generate_tips.py
│   └── resource_matcher.py
│
├── api/                     # 🌐 FastAPI app
│   ├── app.py               # Entry point
│   └── endpoints.py         # Route logic
│
├── requirements.txt         # 📦 Python dependencies
└── README.md                # 📘 You're here!
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/riseright.git
cd riseright/ai_service
```

### 2. Create Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Server

```bash
uvicorn api.app:app --reload
```

Visit the server at: [http://localhost:8000](http://localhost:8000)  
Swagger docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🔌 Available Endpoints

| Method | Endpoint                      | Description                              |
|--------|-------------------------------|------------------------------------------|
| GET    | `/`                           | Health check                             |
| POST   | `/api/ai/predict-growth`      | Predicts growth probability              |
| POST   | `/api/ai/suggest-location`    | Suggests better locations                |
| POST   | `/api/ai/recommend-universities` | Recommends relevant universities      |
| POST   | `/api/ai/generate-tips`       | Provides business growth suggestions     |
| POST   | `/api/ai/resource-match`      | Recommends growth resources              |

---

## 📊 Models Used

- `growth_predictor.pkl`: Trained RandomForestRegressor or similar model on business data to predict growth.
- `location_classifier.pkl`: Trained classification model to recommend alternative business-friendly locations.

---

## 🧪 Testing

You can test endpoints using:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **Postman**: Import and test via JSON payloads.
- **Axios/Fetch** from your React frontend.

---

## 🛠 Technologies

- **Python 3.10+**
- **FastAPI** for API framework
- **scikit-learn** & **pandas** for ML
- **Joblib** for model serialization

---

## 📬 Contributing

Have suggestions or want to improve the ML pipeline? Feel free to submit a pull request or open an issue.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](../LICENSE) file for details.

---
