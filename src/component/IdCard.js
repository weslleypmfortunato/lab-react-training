import './IdCard.css'

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="Profile" />
      <div className="profile_info">
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Birth</strong> {props.dob}</p>
      </div>
    </div>
  )
}

export default IdCard