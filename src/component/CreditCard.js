import './CreditCard.css'

const CreditCard = (props) => {
  const cardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    width: '358px',
    borderRadius: '10px',
  }

  return (
    <div className="test">
      <div className="CrediCardStyle" style={cardStyle}>
        <div className="card_flag">
          {props.type === 'Visa' ? (
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Visa_2014.svg" alt="Card Flag"/>
          ): (
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' alt="Card Flag" />
          )}
        </div>
        <div className="card_number">
          <span>**** **** ****</span>
          <span>{props.number.split('').splice(12, 4)}</span>
        </div>
        <div className="card_user_info">
          <div className="bottom_info">
            <p className="expiration">Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p className="bank">{props.bank}</p>
          </div>
          <p className="owner">{props.owner}</p>
        </div>
      </div>
    </div>
  )
}

export default CreditCard






