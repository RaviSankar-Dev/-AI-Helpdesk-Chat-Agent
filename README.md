# AI Helpdesk Chat Agent
A full-stack AI-powered chat agent built with a React frontend and a Python Flask backend, integrated with the Groq LLM  API to provide intelligent,
conversational responses. This project demonstrates how to build an end-to-end AI chatbot application suitable for helpdesk or customer support scenarios.
## Project Overview
This AI Helpdesk Chat Agent enables users to interact with an AI assistant that responds naturally to their queries. 
The frontend provides a clean, animated chat interface, while the backend serves API requests to Groq LLM ’s GPT model for generating responses. It includes features such as:
- Real-time chat with user and AI messages displayed distinctly
- Responsive, modern UI with animations
- Loading indicator while AI generates responses
- Full local development setup with React and Flask
- CORS enabled backend for cross-origin communication
- Easy to extend with additional features or hosting on cloud platform
## Features
- User friendly chat interface with styling and animations
- AI-powered responses using Groq LLM model
- Backend API built with Flask, handling AI requests securely
- Cross-Origin Resource Sharing (CORS) enabled for frontend/backend interactions
- Loading indicator to show typing status
- Responsive design for desktop and mobile use
## Getting Started
### Prerequisites
- Node.js and npm installed on your machine
- Python 3.7+ installed
- Groq LLM  API key (sign up at https://platform.groq llm .com)
### Frontend Setup (React)
1. Navigate to the `frontend` directory:
    ```
    cd frontend
    ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm start
    ```
4. The frontend will be available at http://localhost:3000

### Backend Setup (Flask)

1. Navigate to the `backend` directory:
    ```
    cd backend
    ```
2. Create and activate a virtual environment:
    ```
    python -m venv venv
    # On Windows
    venv\Scripts\activate
    # On macOS/Linux
    source venv/bin/activate
    ```
3. Install backend dependencies:
    ```
    pip install -r requirements.txt
    ```
4. Set your Groq LLM  API key in `app.py`:
    ```
    groq llm .api_key = "YOUR_Groq LLM _API_KEY"
    ```
5. Run the Flask server:
    ```
    python app.py
    ```
6. The backend will run at http://localhost:5000
## Usage
- Open the frontend URL http://localhost:3000 in your browser
- Type your query or message into the input box
- Press **Send** or hit Enter
- The AI agent will reply with a generated response from Groq LLM 
- Enjoy a seamless conversational experience!
## Project Structure

## Technologies Used

- **Frontend:** React, JavaScript, CSS (with animations)
- **Backend:** Python, Flask, Flask-CORS
- **AI Service:** Groq LLM  API
- **HTTP Client:** Axios (frontend)
- **Package Managers:** npm, pip
- **Development Tools:** VS Code, Postman (optional)

## Screenshots
![https://github.com/RaviSankar-Dev/-AI-Helpdesk-Chat-Agent/blob/main/ai%20chat%20agent.png?raw=true] 
*Example of the AI Helpdesk Chat Agent UI showcasing user and agent messages*

## Contribution and License

Feel free to contribute by submitting issues or pull requests.

This project is open-source and available under the [MIT License](LICENSE).
 




