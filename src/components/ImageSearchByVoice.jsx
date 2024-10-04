import React, { useState } from "react";

const ImageSearchByVoice = ({ setSearch }) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState('');

  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setError('');
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const spokenQuery = event.results[0][0].transcript;
      setSearch(spokenQuery); // Set the spoken query
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="voice-search-container" style={{ textAlign: "center", margin: "20px 0" }}>
      <button className="btn btn-outline-success" onClick={handleVoiceSearch} disabled={isListening}>
        {isListening ? 'Listening...' : 'Speak Your Search'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ImageSearchByVoice;







