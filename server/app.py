from pymongo import MongoClient
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from BL.auth_BL import AuthBL
import jwt
import datetime
import re


def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(email_regex, email))


client = MongoClient("mongodb://localhost:27017/")

db = client["Susita_db"]

users_collection = db["users"]

app = Flask(__name__)
authentication = AuthBL()

# Initialize Flask-Limiter with the default rate limits
limiter = Limiter(key_func=lambda: request.remote_addr, app=app)

@app.route('/register', methods=['POST'])
@limiter.limit("5/minute")  # Limit the requests to 5 per minute per IP address
def register():
    email = request.json.get('email')

    if not email:
        return jsonify({"error": "Email is required"}), 400

    if not is_valid_email(email):
        return jsonify({"error": "Invalid email format"}), 400

    # Insert the user's email into the database and set 'registered' to False
    new_user = {"email": email, "registered": False}
    users_collection.insert_one(new_user)

    # Generate a JWT with the user's email and a one-hour expiration
    token = authentication.create_jwt(email)

    # Send the registration email with the unique JWT to the user
    authentication.send_registration_email(email, token)

    return jsonify({"message": "Registration email has been sent"}), 200


if __name__ == '__main__':
    # Import the necessary modules for SSL
    from werkzeug.serving import run_simple
    # Serve the application using SSL
    run_simple('localhost', 5000, app, ssl_context=('server.crt', 'server.key'))
    app.run(debug=False)
