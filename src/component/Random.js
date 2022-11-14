import './Random.css'

const Random = (props) => {
  const randomNum = Math.floor(Math.random() * props.max)
  return (
    <p className='Random'>Random Value between {props.min} and {props.max} => {randomNum}</p>
  )
}

export default Random
