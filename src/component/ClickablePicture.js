import initialPicture from "../assets/images/initialPicture.png"
import glassesPicture from "../assets/images/glassesImage.png"
import {useState} from 'react'

const ClickablePicture = () => {
  const [glasses, setGlasses] = useState(false)

  const changeImage = () => {
    setGlasses(!glasses)
  }

  return (
    <>
      <img src={glasses ? glassesPicture : initialPicture} onClick={() => changeImage()} alt="Meme" />
    </>
  )
}

export default ClickablePicture