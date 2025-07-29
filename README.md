# AI Helpdesk Chat Agent
A full-stack AI-powered chat agent built with a React frontend and a Python Flask backend, integrated with the OpenAI GPT API to provide intelligent,
conversational responses. This project demonstrates how to build an end-to-end AI chatbot application suitable for helpdesk or customer support scenarios.
## Project Overview
This AI Helpdesk Chat Agent enables users to interact with an AI assistant that responds naturally to their queries. 
The frontend provides a clean, animated chat interface, while the backend serves API requests to OpenAI’s GPT model for generating responses. It includes features such as:
- Real-time chat with user and AI messages displayed distinctly
- Responsive, modern UI with animations
- Loading indicator while AI generates responses
- Full local development setup with React and Flask
- CORS enabled backend for cross-origin communication
- Easy to extend with additional features or hosting on cloud platform
## Features
- User friendly chat interface with styling and animations
- AI-powered responses using OpenAI GPT-3.5-turbo model
- Backend API built with Flask, handling AI requests securely
- Cross-Origin Resource Sharing (CORS) enabled for frontend/backend interactions
- Loading indicator to show typing status
- Responsive design for desktop and mobile use
## Getting Started
### Prerequisites
- Node.js and npm installed on your machine
- Python 3.7+ installed
- OpenAI API key (sign up at https://platform.openai.com)
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
4. Set your OpenAI API key in `app.py`:
    ```
    openai.api_key = "YOUR_OPENAI_API_KEY"
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
- The AI agent will reply with a generated response from OpenAI
- Enjoy a seamless conversational experience!
## Project Structure

