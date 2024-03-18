'use client'
import React from 'react'
import { useState } from 'react';
import './style.css'

const DisplayFq = ({faq}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };
  return (
    <div className='present-faq'>
      <div className='inside-faq'>
        <div style={{fontWeight:'600', color:'rgba(1, 22, 56, 0.7)' , cursor:'pointer', flex:80, fontSize:'1rem'}}  onClick={toggleAnswerVisibility}>
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

export default DisplayFq
