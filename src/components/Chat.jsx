import React, { useState } from 'react';
import '../../src/App.scss'
import Logo from '../img/logoSneakMe.png'
function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, inputValue]);
    setInputValue('');
  };

  const handleChatClose = () => {
    props.onClose();
  };

  return (
      <div class="rectangleChatbot">
        <div class="topBlue">   
            <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
            <h1 class="topBlueTitle">ppbot</h1>
        </div>
        <div class="bottomWhite">
            <img src={Logo} alt="logo sneak me" class="bottomWhiteLogo"/>
            <label for="email" class="labelEmail">Adresse mail
                <input type="email" id="email" required></input>
            </label>
            <label for="password" class="labelPassword">Mot de passe
                <input type="password" id="password" required></input>
            </label>
            <button type="submit" class="labelButton">Se connecter</button>
            <p>Pas encore de compte ?
                <a href="">Inscrivez-vous</a>
            </p>
        </div>
      </div>
  );
}

export default Chat;

