import React, { useState } from 'react';
import '../App.scss'
import Logo from '../img/logoSneakMe.png'


function Discussion(props) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: inputValue })
        });
        const data = await response.json();
        const newMessage = { text: data.message, sender: 'bot' };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleChatClose = () => {
        props.onClose();
    };




    console.log(props, "props discussion");

    return (
        <div class="rectangleChatbot">
            <div class="topBlue">
                <h1 class="topBlueTitle">ppbot</h1>
                <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="bottomWhite">

                <div className="chatbot">
                    <div className="chatMessages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={handleChange} placeholder="Entrez votre message" />
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Discussion;
