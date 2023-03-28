import React, { useState } from 'react';
import '../App.scss'
import Logo from '../img/logoSneakMe.png'
function Discussion(props) {
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
console.log(props,"props discussion");
    return (
        <div class="rectangleChatbot">
            <div class="topBlue">
                <h1 class="topBlueTitle">ppbot</h1>
                <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="bottomWhite">
            </div>
        </div>
    );
}

export default Discussion;

