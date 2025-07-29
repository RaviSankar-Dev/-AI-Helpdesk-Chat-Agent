from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

GROQ_API_KEY = ""
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

@app.route('/')
def index():
    return "Welcome to the AI Helpdesk Chat Agent using Groq!"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "llama3-70b-8192",  # Must use correct Groq model!
        "messages": [
            {"role": "user", "content": user_message}
        ],
        # You can add "max_tokens", "temperature", etc. as needed.
    }

    try:
        response = requests.post(GROQ_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        ai_data = response.json()
        ai_reply = ai_data.get("choices", [{}])[0].get("message", {}).get("content", "Sorry, no reply.")
        return jsonify({"reply": ai_reply})
    except requests.exceptions.RequestException as e:
        print(f"Error when calling Groq AI API: {e}")
        return jsonify({"reply": "Error: Could not get response from Groq AI."}), 500

if __name__ == '__main__':
    app.run(port=5000)
