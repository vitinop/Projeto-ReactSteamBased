import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slidermain.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Slidermain(props) {
  const[game,setGame] = useState([]);
  const[game2,setGame2] = useState([]);
  const[game3,setGame3] = useState([]);
  const[game4,setGame4] = useState([]);
  const [mounted,setMounted]=useState(false);

  const getData= async()=>{
    await axios.get(`/game/find/${props.id}`)
    .then (response=>{
      if(mounted){
      setGame(response.data)
      }
    })
  }
  const getData2= async()=>{
    await axios.get(`/game/find/${props.id2}`)
    .then (response=>{
      if(mounted){
      setGame2(response.data)
      }
    })
  }
  const getData3= async()=>{
    await axios.get(`/game/find/${props.id3}`)
    .then (response=>{
      if(mounted){
      setGame3(response.data)
      }
    })
  }
  const getData4= async()=>{
    await axios.get(`/game/find/${props.id4}`)
    .then (response=>{
      if(mounted){
      setGame4(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
    getData2()
    getData3()
    getData4()
  }, [mounted])

  return (
    <div className="SliderBlockMaster">
      <div>
        <div className="SliderDestaque">
          <Carousel
            width="600px"
            height="337px"
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={game.image} alt={game.name} />
            </div>
           
            <div>
            <img src={game2.image} alt={game2.name} />
            </div>
            <div>
            <img src={game3.image} alt={game3.name} />
            </div>
            <div>
            <img src={game4.image} alt={game4.name} />
            </div>
          </Carousel>
          <div className="SliderGameInfo">
            <h1> {game.name}</h1>
            <div className="SliderGameImgs">
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
              <div className="SliderGameSubImgs">
                <img src="https://cdn1.epicgames.com/f4a904fcef2447439c35c4e6457f3027/offer/DS_wide-2560x1440-c3d7bbf8ee36dd025610088381a5235a.jpg" />
              </div>
            </div>
            <p>{'R$ ' + props.preco}</p>
          </div>
        </div>
      </div>

      
      
      
    </div>
)};


export default Slidermain;
