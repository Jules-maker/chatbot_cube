import React, { useState } from 'react';
import Chat from './components/Chat';
import './App.scss';

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(true);
  };

  const handleClose = () => {
    setShowChat(false);
  };

  return (
    <div className="App">
      {!showChat && (
        <div className="Circle" onClick={handleClick}>
          <i class="fa-solid fa-comment"></i>
        </div>
      )}
      {showChat && <Chat onClose={handleClose} />}
    </div>
  );
}

export default App;
