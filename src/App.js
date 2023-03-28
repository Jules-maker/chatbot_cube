import React, { useState } from 'react';
import './App.scss';
//Local components
import Connexion from './components/Connexion';
import Discussion from './components/Discussion';
import Inscription from './components/Inscription';

function App() {
  // usestate pour faux routing
  const [showChat, setShowChat] = useState("close");
  // const [choice,setChoice] = useState("connexion")
  
  const handleClick = (param) => {
    setShowChat(param);
  };




  console.log(showChat,"showchat");
  return (
    <div className="App">
      {/* {
        choices.map((choice) => {
          <Chat onClose={handleClick(choice)} choices={choice} />
      
        })
      } */}


      {showChat === "close" && (
        <div className="Circle" onClick={() => handleClick("connexion")}>
          <i className="fa-solid fa-comment"></i>
        </div>
      )}
      {showChat === "inscription" && (
        <Inscription onClose={() => handleClick("close")}  handleClick={handleClick} />
      )}
      {showChat === "connexion" && (
        <Connexion onClose={() => handleClick("close")}  handleClick={ handleClick} />
      )}
      {showChat === "discussion" && (
        <Discussion onClose={() => handleClick("close")}  handleClick={handleClick} />
      )}
      
    </div>
  );
}

export default App;
