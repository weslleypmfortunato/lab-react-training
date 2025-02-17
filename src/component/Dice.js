import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'
import React, { useState } from 'react';
import './Dice.css'


const Dice = () => {
  const [dice, setDice] = useState(diceEmpty)


  const changeDice = () => {
  const diceArr = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]
  const randomIndex = Math.floor(Math.random() * diceArr.length)
  const selectedDice = diceArr[randomIndex]
  setDice(selectedDice)

  }

  // setInterval(changeDice, 1000)
  return (
    <div>
      <img className="dice" src={dice} alt="Dice Empty" onClick={changeDice}/>
    </div>
  )
}

export default Dice