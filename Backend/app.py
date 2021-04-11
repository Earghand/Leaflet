import os
from firebase_admin import credentials, firestore, initialize_app

config = {
  apiKey: "AIzaSyAJo3FBmvPypRYefYW65G3ZyZIlIxoJpXY",
  authDomain: "leaflet-d7978.firebaseapp.com",
  databaseURL: "https://leaflet-d7978-default-rtdb.firebaseio.com",
  projectId: "leaflet-d7978",
  storageBucket: "leaflet-d7978.appspot.com",
  messagingSenderId: "377199180805",
  appId: "1:377199180805:web:1f50c19ef202e595d0706c"
}

cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
todo_ref = db.collection('todos')

from flask import Flask
app = Flask(__name__)

@app.route("/", methods=['getName'])
def basic():
  return "Hello World!"

@app.route("/yes")
def yes():
  
  return "yes"




if __name__ == "__main__":
  app.run()


