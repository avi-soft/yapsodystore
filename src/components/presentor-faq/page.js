// Note- import this page 

import React from 'react'
import FreqQuest from './faq/page'
import './style.css'
const page = () => {

  // Basically i have taken this as an array but this data will come from backend so please make changes accordingly
  // or this data you will get by fetch api's...
  const faq = [
    {
      question: "How do i contact presenter?",
      answer: "through email"
    },
    {
      question: "Is a minimal age required to attend this event?",
      answer: "18"
    },
    {
      question: "Can we purchase tickets for the event over the phone?",
      answer: "yes"
    },
    {
      question: "Is the event indoors or outdoors?",
      answer: "Outdoor or it may be depend on weather"
    },
        
  ]
  return (
    <div className='Freq-main-page'>
      <div className='left-faq'>left</div>
      <div className='right-faq'>
        <div className='freqaskquest'>Frequently Asked Questions</div>
        <div className='container'>
          {faq.map((value, index) => (
            <div  key={index}>
                {/* this component will render accordingly to the data...*/}
              <FreqQuest key={value.question} faq={value} />    
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page