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
      <div class="rectangleChatbot">test</div>
      )
}

export default Inscription;

