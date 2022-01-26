import "../WishList/WishList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/card/card";

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLoggend] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/game/myWishList", config).then((response) => {
        setNotLoggend(false);
        setWishList(response.data.games);
      });
    }
  }, [mounted]);

  return (
    <div className="wishlist">
      {!notLogged ? (
        <Card title="Minha Lista de Desejos">
          {wishList.map((game) => (
            <Card
              id={game.id}
              image={game.image}
              title={game.name}
              preco={game.price}
              key={game.id}
            />
          ))}
        </Card>
      ) : (
        <div className="txt">
          <h2>Sem dados na lista.</h2>
          <h2>Entre com uma conta!</h2>
        </div>
      )}
    </div>
  );
}
