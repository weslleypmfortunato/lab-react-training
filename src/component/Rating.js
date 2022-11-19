import './Rating.css'

const Rating = (props) => {
  let ratings = props.children
  let roundedScore = Math.round(ratings)
  let emptyStars = 5 - roundedScore
  const starsArr = []

  for (let i = 0; i < roundedScore; i++) {
    starsArr.push(<div>&#9733;</div>)
  }

  for (let i = 0; i < emptyStars; i++) {
    starsArr.push(<div>&#9734;</div>)
  }

  return (
    <div className='stars'>{starsArr}</div>
  )
}

export default Rating