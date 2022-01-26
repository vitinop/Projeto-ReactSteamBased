import "./Home.css";
import Sidenav from "../../components/sidenav/Sidenav.js";
import Subheader from "../../components/subheader/Subheader.js";
import Slidermain from "../../components/slidermain/Slidermain.js";
import Subfooter from "../../components/foooter/Subfooter";
import Card from "../../components/card/card";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Home() {

  const[games,setGames] = useState([]);
  const [mounted,setMounted]=useState(false);

  const getData = async ()=>{
    await axios.get('/game/findMany')
    .then(response =>{
      if(mounted){
      setGames(response.data)}
    })
  }
  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])
   
 
  return (
    <div>
      <main>
        <div className="TotalBody">
          <div className="Sidebody">
            <Sidenav></Sidenav>
          </div>
          <div className="MainBody">
            <Subheader></Subheader>
            <div className="SliderSection">
            <h4>Destaques e Recomendados</h4>
            {
                  <Slidermain
                    id='b1ef3772-5067-48d0-a6ff-5b44c27c2c7b'                    
                    id2='9654f94c-9e2e-4bfb-a6b7-838381032375'
                    id3='1191aaab-5b49-44a3-a88f-e82889b3598d'
                    id4='0c97ef4c-a927-46ed-a620-a1b030a798da'
                    preco='12.00'
                    /> 
            }
            </div>
            <h4>Itens da Loja</h4>

            <div className="CardsSection">
            <Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/><Card/>
            
              {
                games.map( game => (
                  <Card
                    id={game.id}
                    image={game.image}
                    name={game.name}
                    preco={game.price}
                    key={game.name}
                    />
                ))
              } 
            </div>
          </div>
        </div>
        <Subfooter/>
      </main>
    </div>
  );
}
