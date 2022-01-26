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
          <img src={props.image} alt={props.name}></img>
        </div>
        <h2 className='card-title'>{props.name}</h2>
        <span className='card-preco'>{'R$ ' + props.preco}</span>
      
      </div>
      <button className='wishlist'>
      <FaRegStar onClick={handleWish} className={`wishlist ${wish ? "wishFalse" : "" }`} />
        <FaStar onClick={handleWish} className={`wished ${wish ? "wish" : "" }`}/>
      </button>
    </div>
  )
}

