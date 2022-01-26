import '../sidenav/Sidenav.css'
import GiftCardLogo from "../imgs/steamgiftcards.png";

function Sidenav() {
  return (
    <div className="sidenavBlock">
      <div className="sidenav_header">
        <a href="https://store.steampowered.com/digitalgiftcards/clear">
          <img
            className="sidenav_giftcard_img"
            src={GiftCardLogo}
            alt="Página de Giftcards "
          />
        </a>
        Vales-presente
      </div>

      <div className="sidenav_items">
        <a
          className="sidenav_giftcard_subitem"
          href="https://store.steampowered.com/digitalgiftcards/"
        >
          Já disponíveis no Steam
        </a>
      </div>

      <div className="sidenav_header">Recomendado</div>

      <div className="sidenav_items">
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/recommended/friendactivity/?snr=1_4_4__125"
        >
          <span className="icon friends"></span> Por amigos
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/curators/?snr=1_4_4__125"
        >
          <span className="icon curators"></span> Por curadores
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tag/browse/?snr=1_4_4__125#yours"
        >
          <span className="icon tags"></span> Marcadores
        </a>
      </div>

      <div className="sidenav_header">Lista de Descobrimento</div>

      <div className="sidenav_items">
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/explore/next/0?snr=1_4_4__125"
        >
          <span className="icon queue"></span> Recomendações
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/explore/next/3?snr=1_4_4__125"
        >
          <span className="icon queue_new"></span> Lançamentos
        </a>
      </div>

      <div className="sidenav_header">Ver Categorias</div>

      <div className="sidenav_items">
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/search/?filter=topsellers&amp;snr=1_4_4__125"
        >
          <span className="icon top_sellers"></span> Mais vendidos
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/explore/new/?snr=1_4_4__125"
        >
          <span className="icon recent"></span> Lançamentos
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/explore/upcoming/?snr=1_4_4__125"
        >
          <span className="icon upcoming"></span> Em breve
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/specials?snr=1_4_4__125#tab=TopSellers"
        >
          <span className="icon discounts"></span> Ofertas
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/vr/?snr=1_4_4__125"
        >
          <span className="icon vr"></span> Realidade virtual
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/controller/?snr=1_4_4__125"
        >
          <span className="icon controller"></span> Compatíveis com controles
        </a>
      </div>

      <div className="sidenav_header">Navegar por Gênero</div>
      <div className="sidenav_items">
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/genre/Free%20to%20Play/?snr=1_4_4__125"
        >
          Gratuito p/ Jogar{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/genre/Early%20Access/?snr=1_4_4__125"
        >
          Acesso Antecipado{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Aventura/?snr=1_4_4__125"
        >
          Aventura{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/A%C3%A7%C3%A3o/?snr=1_4_4__125"
        >
          Ação{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Casual/?snr=1_4_4__125"
        >
          Casual{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Corrida/?snr=1_4_4__125"
        >
          Corrida{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Esportes/?snr=1_4_4__125"
        >
          Esportes{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Estrat%C3%A9gia/?snr=1_4_4__125"
        >
          Estratégia{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Indie/?snr=1_4_4__125"
        >
          Indie{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Multijogador%20Massivo/?snr=1_4_4__125"
        >
          Multijogador Massivo{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/RPG/?snr=1_4_4__125"
        >
          RPG{" "}
        </a>
        <a
          className="sidenav_item"
          href="https://store.steampowered.com/tags/pt-br/Simula%C3%A7%C3%A3o/?snr=1_4_4__125"
        >
          Simulação{" "}
        </a>
      </div>

      <div className="sidenav_header">Vistos Recentemente</div>
    </div>
  );
}
export default Sidenav;
