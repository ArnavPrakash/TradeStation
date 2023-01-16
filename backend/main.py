from fastapi import FastAPI, status, Response
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import dotenv_values
import uvicorn
import pymongo

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods = ["*"],
    allow_headers=["*"]
)

env_var = dotenv_values(".env")
client = pymongo.MongoClient(env_var["db_url"])
db = client["Stocks"]

# Models
class LoginData(BaseModel):
    username: str
    password: str

class LogoutData(BaseModel):
    username: str

class NewUser(BaseModel):
    username: str
    password: str
    email: str
    loginStatus: str = "I"

class StockDetails(BaseModel):
    stock: str
    returntype: str = "list"

# APIs
@app.post("/userLogin")
async def userLogin(data:LoginData, response:Response):
    users = db.user
    user = users.find_one({"username":data.username})
    if user:
        if data.password == user["password"]:
            users.update_one({"username":data.username},{"$set":{"loginStatus":"A"}})
            return {}
        else:
            response.status_code = status.HTTP_401_UNAUTHORIZED
            return {"message": "Incorrect Password"}
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "User not registered"}

@app.post("/userLogout")
async def userLogout(data:LogoutData, response:Response):
    users = db.user
    user = users.find_one({"username":data.username})
    print(user)
    if user:
        if user["loginStatus"] == "I":
            users.update_one({"username":data.username},{"$set":{"loginStatus":"A"}})
            return {}
        else:
            response.status_code = status.HTTP_403_FORBIDDEN
            return {"message": "User not logged in"}
    else:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"message": "User not registered"}

@app.post("/registerUser")
async def registerUser(data:NewUser, response:Response):
    users = db.user
    user = users.find_one({"username":data.username})
    print(user)
    if user:
        response.status_code = status.HTTP_403_FORBIDDEN
        return {"message": "User already registered"}
    users.insert_one(dict(data))
    return {}

@app.post("/fetchStockData")
async def fetchStockData(data:StockDetails, response:Response):
    stocks = eval(f"db.{data.stock}")
    stock = stocks.find({},{"_id":0})
    stock_data=list(stock)
    if data.returntype == "dict":
        return {"data" : stock_data}
    elif data.returntype == "list":
        stock_data_list = {
            "Date":[],
            "Open":[],
            "High":[],
            "Low":[],
            "Close":[],
            "Adj Close":[],
            "Volume":[]
        }
        for i in stock_data:
            stock_data_list["Date"].append(i["Date"])
            stock_data_list["Open"].append(i["Open"])
            stock_data_list["High"].append(i["High"])
            stock_data_list["Low"].append(i["Low"])
            stock_data_list["Close"].append(i["Close"])
            stock_data_list["Adj Close"].append(i["Adj Close"])
            stock_data_list["Volume"].append(i["Volume"])
        return {"data" : stock_data_list}

@app.get("/")
async def index():
    return RedirectResponse(url=f"{env_var['ROOT_PATH']}/docs")


if __name__ == "__main__":
        uvicorn.run("main:app", host=env_var["HOST"], port=int(env_var["PORT"]), reload=True, root_path=env_var['ROOT_PATH'])