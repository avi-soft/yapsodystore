'use client'
import React from 'react'
import Chatpage from './chatpage/page'
import Script from 'next/script'
import { useState } from 'react'
import './style.css'
const Page = () => {
  const [showBox, setShowBox] = useState(false);
  return (
    <div className='chatbutton'>
      <Script src="https://kit.fontawesome.com/8d4b434c6d.js" crossorigin="anonymous" />
      {!showBox && (

      <button className='butt' onClick={() => setShowBox(true)}>
        <i className="fa-regular fa-comment" style={{ marginRight: 10 }}></i>
        Chat</button>
      )}
      {showBox    && <Chatpage onClose={() => setShowBox(false)} />}
    </div>
  )
}

export default Page
