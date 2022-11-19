import './App.css';
import Greetings from './component/Greetings';
import IdCard from './component/IdCard';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';
import Rating from './component/Rating';
import DriverCard from './component/DriverCard';
import LikeButton from './component/LikeButton';
import ClickablePicture from './component/ClickablePicture';
import Dice from './component/Dice';

function App() {
  return (
    <div className="App">

      <IdCard 
        lastName='Doe' 
        firstName='John' 
        gender='male' 
        height={178} 
        dob='1992-07-14' 
        picture='https://randomuser.me/api/portraits/men/44.jpg'/>
      <IdCard 
        lastName='Dolores' 
        firstName='Obrien' 
        gender='female' 
        height={172} 
        dob='1988-05-11' 
        picture='https://randomuser.me/api/portraits/women/44.jpg'/>

        <Greetings lang='de'>Ludwig</Greetings>
        <Greetings lang='fr'>François</Greetings>
        <Greetings lang='en'>John</Greetings>
        <Greetings lang='es'>Omar</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <BoxColor r={255} g={0} b={0} hex='ff0000'color="white"/>
        <BoxColor r={128} g={255} b={0} hex='80ff00' color="#222222"/>

        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"/>
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"/>
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}/>
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />

        <div class="likebtn">
          <LikeButton color="white"/>
          <LikeButton color="white"/>
        </div>

        <ClickablePicture />

        <Dice />
    </div>
  );
}

export default App;


