import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import { Smile } from 'react-feather';

import 'emoji-mart/css/emoji-mart.css';
import './Input.css';



const Input = ({message, setMessage, sendMessage}) => {
    
    const[showEmojis, setEmojis] = useState(false);

    const toggleEmojiPicker = (event) => {

        setEmojis(!showEmojis);
    }
    
    return(
        
    <form className="form">
        
        <input 
         className="input"
         type="text"
         placeholder="Type a message..."
         value={message}
         
         onChange={(event) => setMessage(event.target.value)}
         onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        {
            showEmojis ? (<Picker onSelect={emoji => setMessage(message + emoji.native)}  emojiTooltip={true}/>) : null
        }
        <button type="button" className="toggle-emoji" onClick={event => toggleEmojiPicker(event)} >
            <Smile/>
        </button>
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        
        
    </form>
    );
}

export default Input;