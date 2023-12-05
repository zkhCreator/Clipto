from typing import Union

from fastapi import APIRouter, FastAPI

router = APIRouter()


@router.get("/")
def read_root():
    return {"Hello": "World"}

app = FastAPI()
app.include_router(router, prefix="/api")

# 如果直接运行此文件，则使用 uvicorn 运行应用
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
