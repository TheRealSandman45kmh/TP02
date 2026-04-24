import mysql.connector
import os
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()

# --- CONNEXION MYSQL ---
conn = mysql.connector.connect(
    database=os.getenv("MYSQL_DATABASE"),
    user=os.getenv("MYSQL_USER"),
    password=os.getenv("MYSQL_ROOT_PASSWORD"),
    host=os.getenv("MYSQL_HOST"),
    port=3306
)

# --- CONNEXION MONGODB ---
MONGO_URL = os.getenv("MONGO_URL")
client = AsyncIOMotorClient(MONGO_URL)
db_mongo = client.blog_db

@app.get("/users")
async def get_users():
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM utilisateur")
    records = cursor.fetchall()
    return {"utilisateurs": records}

@app.get("/posts")
async def get_posts():
    # Récupère les posts depuis MongoDB (blog_db.posts)
    cursor = db_mongo.posts.find({}, {"_id": 0})
    posts = await cursor.to_list(length=100)
    return {"posts": posts}