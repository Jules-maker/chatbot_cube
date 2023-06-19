import React, { useState, useRef, useEffect } from 'react';
import '../App.scss'
import Logo from '../img/logoSneakMe.png'
import botPic from '../img/botPic.png'


function Discussion(props) {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [content, setContent] = useState('')
    const messagesEndRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // (pour éviter de recharger la page)
    
        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, userMessage]);
    
        const response = await fetch('http://localhost:8000/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: inputValue })
        });
    
        const data = await response.json();
        const botMessage = { text: data, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
    
        setInputValue('');
    };
    

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleChatClose = () => {
        props.onClose();
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          // Call the handleSubmit function if Enter key is pressed without Shift key
          setContent(e.target.value)
          handleSubmit(e)
        }
      }
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    



    console.log(props, "props discussion");

    return (
        <div class="rectangleChatbot">
            <div class="topBlue">
                <h1 class="topBlueTitle">ppbot</h1>
                <button onClick={handleChatClose} class="closeButton"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="bottomWhite">
                <div className="containerBottomWhite">
                <div className="containerMessages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender === 'user' ? 'userMessage' : 'botMessage'}`}>
                            {message.sender === 'bot' && <img src={botPic} alt="Bot Avatar" />}
                            {message.text}
                        </div>
                    ))}
                      <div ref={messagesEndRef}></div>
                </div>
                    <div className='containerSendMessage'>
                            <form onSubmit={handleSubmit} className="buttonsSendMessage">
                                <textarea type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Entrez votre message" className='fieldWriteMessage'/>
                                <button type="submit" className='buttonSend'>Envoyer</button>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discussion;