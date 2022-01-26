import './card.css';
import { FaRegStar,FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Card(props) {
  const [wish, setWish]= useState(false);

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/game', { state: props.id })
  }

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }
    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }

  const handleWish = ()=>{
    setWish(!wish);
    wishGame()
  }
  return (
    <div className='card'>
      <div className='card-item'>
        <div className='card-image'onClick={goToGamePage}>
          <img src="https://i.pinimg.com/564x/d7/3d/4c/d73d4cc12a2d29826e179358d9d818cc.jpg" alt={props.name}></img>
        </div>
        <h2 className='card-title'>{props.name}</h2>
        <span className='card-preco'>{'R$ XX,XX'}</span>
      
      </div>
      <button className='wishlist'>
     
        <FaStar onClick={handleWish} className={`wished ${wish ? "wish" : "" }`}/>
      </button>
    </div>
  )
}

