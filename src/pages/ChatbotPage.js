import React, { useState } from 'react';
import '../App.css';

// Predefined manual responses
const responses = {
  "phishing": "Phishing is a cyberattack that uses fake messages to trick people into giving up personal info.",
  "ransomware": "Ransomware is malware that locks your data and demands a ransom to unlock it.",
  "2fa": "2FA stands for Two-Factor Authentication. It adds an extra layer of security to your accounts.",
  "firewall": "A firewall protects your system by filtering incoming and outgoing traffic.",
  "vpn": "A VPN encrypts your internet traffic and hides your IP address.",
  "https": "HTTPS encrypts data sent between your browser and the website.",
  "sql injection": "SQL Injection is when an attacker inserts malicious SQL into input fields to access databases.",
  "malware": "Malware is any software intentionally designed to cause damage to a computer or network.",
  "default": "I'm not sure about that. Try asking something related to cybersecurity!"
};

// Function to find a matching response
const getManualResponse = (message) => {
  const lower = message.toLowerCase();
  for (const key in responses) {
    if (lower.includes(key)) {
      return responses[key];
    }
  }
  return responses["default"];
};

function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    const botReply = getManualResponse(input);
    const botMessage = { text: botReply, sender: 'bot' };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-page">
      <h1>Cyber Security Chatbot</h1>
      <div className="chatbot-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}<br />
            </div>
            
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about cyber security..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatbotPage;
