from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/cybercrime_users"
mongo = PyMongo(app)
users = mongo.db.users

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    if users.find_one({"email": data['email']}):
        return jsonify({"message": "User already exists"}), 400
    users.insert_one({"email": data['email'], "password": data['password']})
    return jsonify({"message": "Registered successfully"})

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = users.find_one({"email": data['email']})
    if user and user['password'] == data['password']:
        return jsonify({"message": "Login successful"})
    return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
