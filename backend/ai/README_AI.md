# AI Prediction Module

## Purpose
This module provides price forecasting for:
- specific products
- entire categories

## Main Interface
`predict(request: dict) -> dict`

### Product prediction request
```json
{
  "mode": "product",
  "category": "food",
  "product": "flour",
  "region": "Tashkent",
  "horizon_days": 7
}


How to use
from predict import predict

result = predict(request_json)