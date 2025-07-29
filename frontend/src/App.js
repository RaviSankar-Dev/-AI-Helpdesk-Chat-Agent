import { useState, useRef, useEffect } from "react";
import axios from "axios";  // import axios for HTTP requests
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // loading indicator state
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Send POST request to backend
      const response = await axios.post("http://localhost:5000/chat", { message: input });

      const agentReply = response.data.reply || "Sorry, no response from server.";
      const agentMsg = { sender: "Agent", text: agentReply };

      setMessages((prev) => [...prev, agentMsg]);
    } catch (error) {
      console.error("Error communicating with backend:", error);
      setMessages((prev) => [...prev, { sender: "Agent", text: "Error: Could not get response." }]);
    }

    setIsLoading(false);
  };

  // Scroll chat to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="app-container">
      <h2>AI Helpdesk Chat Agent</h2>

      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender === "You" ? "you" : "agent"}`}
          >
            <b>{msg.sender}:</b> {msg.text}
          </div>
        ))}

        {isLoading && (
          <div className="chat-message agent">
            <b>Agent:</b> Typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="input-row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" && !isLoading ? sendMessage() : undefined)}
          placeholder="Type your question..."
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading || input.trim() === ""}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
