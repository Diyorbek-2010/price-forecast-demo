from pydantic import BaseModel
from typing import Optional

class AnalyzeRequest(BaseModel):
    mode: str                 # "product" | "category"
    region: str
    category: str
    product: Optional[str] = None
    date: str                 # "1 oy", "6 oy", ...
