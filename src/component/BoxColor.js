import './BoxColor.css'

const BoxColor = (props) => {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: `${props.color}`,
    width: '605px',
    height: '100px',
  }


  return (
    <div className='BoxColor' style={divStyle}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>#{props.hex}</p>
    </div>
  )
}

export default BoxColor
