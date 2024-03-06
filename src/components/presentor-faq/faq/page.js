'use client'
import React from 'react'
import { useState } from 'react';
import './style.css'

const page = ({faq}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <div className='present-faq'>
      <div className='inside-faq'>
        <div style={{fontWeight:'bold', color:'#1d1d2c' , cursor:'pointer', flex:80}}  onClick={toggleAnswerVisibility}>
          {faq.question}
        </div>
        <div style={{flex:20 , display:'flex', justifyContent:'center', color:'grey'}}>
          <spa>{isAnswerVisible ? <span >&#8896;</span> : <span >&#8897;</span>}</spa>
        </div>
      </div>
        
      {isAnswerVisible && (
      <div style={{color:'#343131' , margin:'9px 0px '}}>{faq.answer}</div>
      )}
    </div>
  )

}

export default page
