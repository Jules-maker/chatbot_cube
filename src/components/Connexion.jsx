import React, { useState } from 'react';
import '../App.scss'
import Logo from '../img/logoSneakMe.png'
function Connexion(props) {
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
console.log(props)
  return (
      <div class="rectangleChatbot">
        <div class="topBlue">   
            <h1 class="topBlueTitle">ppbot</h1>
            <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="loginView">
            <img src={Logo} alt="logo sneak me" class="Logo"/>
            <label for="email" class="labelEmail">Adresse mail
                <input type="email" id="email" className='connexion' required></input>
            </label>
            <label for="password" class="labelPassword">Mot de passe
                <input type="password" id="password" className='connexion' required></input>
            </label>
            <button type="submit" class="labelButton" onClick={() => props.handleClick("discussion")}>Se connecter</button>
            <p>Pas encore de compte ?
                <div className={"link"} onClick={() => props.handleClick("inscription")}>Inscrivez-vous</div>
            </p>
        </div>
      </div>
  );
}

export default Connexion;