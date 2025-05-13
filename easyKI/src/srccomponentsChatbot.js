import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isBot: false }]);
      setInputText('');
      // Mock "KI-Antwort" nach 1 Sekunde
      setTimeout(() => {
        setMessages(prev => [...prev, { text: 'Das ist eine Testantwort! 🤖', isBot: true }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isBot ? 'bot' : 'user'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Frage stellen..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Senden</button>
      </div>
    </div>
  );
};

export default Chatbot;