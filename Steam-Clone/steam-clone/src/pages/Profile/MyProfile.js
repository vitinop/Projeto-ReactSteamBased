import './MyProfile.css';
import { useState,useEffect } from 'react';
import axios from "axios";

export default function MyProfile(props) {
  const[user,setUser] = useState({});
  const[mounted,setMounted] = useState(false);
  const[notLogged, setNotLogged] =useState(true);
  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])
  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='https://www.giantbomb.com/a/uploads/original/5/56742/3058593-arthur_portrait.jpg' alt='Profile-Pic' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <a href="wishlist"><h2>Minha Lista de Desejos</h2></a>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Você não está logado!</h2>
        )
      }
    </div>
    
  )
}