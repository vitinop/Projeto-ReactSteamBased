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
              <img src='https://www.maodevacadescontos.com.br/wp-content/uploads/2019/07/Death-Stranding.jpg' alt={game.name} />
            </div>
           
            <div>
            <img src='https://i.pinimg.com/564x/d7/3d/4c/d73d4cc12a2d29826e179358d9d818cc.jpg'alt={game2.name} />
            </div>
            <div>
            <img src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/maxresdefault-5-601x338.jpg" alt={game3.name} />
            </div>
            <div>
            <img src="https://valedopontar.com.br/wp-content/uploads/2017/11/Review-The_Witcher_3_Wild_Hunt-A_perfeicao_dos_RPGs.jpg" alt={game4.name} />
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
