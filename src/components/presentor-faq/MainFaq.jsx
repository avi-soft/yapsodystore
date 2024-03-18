import React from 'react'
import FaqQues from './FaqQuestions'
import ClickFreq from '../box-appear/OnlyForFaq'

const MainFaq = ({onClose}) => {
  return (
    <ClickFreq component={FaqQues} onClose={onClose}/>
  )
  
}

export default MainFaq
