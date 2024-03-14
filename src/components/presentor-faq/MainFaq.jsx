
import React from 'react'
import FaqQues from './FaqQuestions'
import ClickB from '../box-appear/temp'

const MainFaq = ({onClose}) => {
  return (
    <ClickB component={FaqQues} onClose={onClose}/>
  )
  
}

export default MainFaq
