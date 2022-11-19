import './DriverCard.css'
import Rating from './Rating'

const DriverCard = (props) => {
  const driverStyle = {
    backgroundColor: `blue`,
    color: 'white',
    width: '585px',
    height: '120px',
    borderRadius: '10px',
 }



  return (
    <div className="DriverCardStyle" style={driverStyle}>
      <img src={props.img} alt="Driver"/>
      <div className="info_driver">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>

  )
}

export default DriverCard