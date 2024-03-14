'use client'    // this is main page which have to import
import React from 'react'
import Chatpage from '../components/chat-page/ChatpageOnClick'
import Script from 'next/script'
import { useState } from 'react'
import '@/components/chat-page/style.css'
const ChatButtonPage = () => {
  const [showBox, setshowBox] = useState(false);
  return (
    <div className='chatbutton'>
      <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous" />
      {!showBox && (

      <button className='inside-chatbutton' onClick={() => setshowBox(true)}>
        <i className="fa-regular fa-comment" style={{ marginRight: 10 }}></i>
        Chat</button>
      )}
      {showBox    && <Chatpage onClose={() => setshowBox(false)} />}
    </div>
  )
}

export default ChatButtonPage
