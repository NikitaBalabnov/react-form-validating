import React from 'react'
import Confetti from 'react-confetti'

export default () => {
  return (
    <Confetti width={window.innerWidth - 50} numberOfPieces={650} height={window.innerHeight - 20}/>
  )
}