import './Greetings.css'

const Greetings = (props) => {
  let hello = ''

  if (props.lang === "de") {
    hello = 'Hallo'
  } else if (props.lang === 'fr') {
    hello = 'Bonjour'
  } else if (props.lang === 'en') {
    hello = 'Hello'
  } else if (props.lang === 'es') {
    hello = 'Hola'
  }

  return (
    <p className='Greetings'>{hello} {props.children}</p>
  )
    
}

export default Greetings