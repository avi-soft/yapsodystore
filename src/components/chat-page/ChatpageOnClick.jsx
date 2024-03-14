import React from 'react'
import Link from 'next/link'
import ChatFormPage from './FormChat'
import './style.css'
const ChatOption = ({onClose}) => {   
    const handleLineClick =()=>{
        onClose();
    }
    return (
        <div className='main-chat-page'>
            <div className='chat-text'>
                <div style={{ justifyContent: 'center', display: 'flex', flex: 85, alignItems: 'center', marginLeft: 31 }}>Chat with us</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 15 }}>
                    <div className='horizontal-line' onClick={handleLineClick}><hr /></div>
                </div>
            </div>
            <div className='chatbox-text'>
                <div style={{ marginLeft: 24 }}>
                    <p style={{ marginBottom: 0 }}>{`By submitting your information, you consent to Yapsody's Privacy Policy. In order to serve you better, transmission and storage of this communication is provided by the #1 chat app`}</p>
                    <Link href='https://www.zendesk.com/in/#' style={{color:'blue'}}>Zendesk.com</Link>
                </div>
                <div className='form-input2'>
                    <ChatFormPage/>
                </div>
            </div>
            <div className='footer'>
                <button>Start Chat</button>
            </div>
        </div>
    )
}

export default ChatOption
