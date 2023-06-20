import React, { useState } from 'react';
import '../App.scss'
import Logo from '../img/logoSneakMe.png'
function Inscription(props) {
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
  console.log(props, "props de Inscription")
  return (
    <div class="rectangleChatbot">
      <div class="topBlue">
        <h1 class="topBlueTitle">ppbot</h1>
        <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="loginView">
        <div class="form-group">
          <div class="input-wrapper">
            <label for="input1" class="labelNameAndSurname">Prénom</label>
            <input type="text" id="input1" className='connexion' name="input1" />
          </div>

          <div class="input-wrapper">
            <label for="input2" class="labelNameAndSurname">Nom</label>
            <input type="text" id="input2" className='connexion' name="input2" />
          </div>
        </div>

        <label for="email" class="labelEmail">Adresse mail
          <input type="email" id="email" className='connexion' required></input>
        </label>
        <label for="password" class="labelPassword">Mot de passe
          <input type="password" id="password" className='connexion' required></input>
        </label>
        <label for="password" class="labelPassword">Confirmer le mot de passe
          <input type="password" id="password" className='connexion' required></input>
        </label>
        <button type="submit" class="labelButton" onClick={() => props.handleClick("discussion")}>S'inscrire</button>

      </div>
    </div>
  );
}

export default Inscription;

