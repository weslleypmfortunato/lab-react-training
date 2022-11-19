import './LikeButton.css'
import {useState} from 'react'

const LikeButton = (props) => {
  const [likes, setLikes] = useState(0)

  const timesPressed = () => {
    setLikes(likes + 1)
  }

  const changeColor = () => {
    const colors = ['purple','blue','green','yellow','orange','red']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const selectedColor = colors[randomIndex]
    return selectedColor

  }
  
  const divStyle = {
    backgroundColor: changeColor(),
    color: `${props.color}`,
    fontWeight: 900,
  }

  return (
    <div>
      <button style={divStyle} onClick={() => timesPressed()}>{likes}
      {likes <=1 ? ' Like' : ' Likes'}
      </button>
    </div>
    
  )
}

export default LikeButton
