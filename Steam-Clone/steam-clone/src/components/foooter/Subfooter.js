import "./Subfooter.css";

export default function Subfooter() {
  return (
    <div className="recommendations-container">
      <div className="recommendations">
        <h1>Em busca de recomendações?</h1>

        <h4>Inicie a sessão para ver mais recomendações personalizadas</h4>
        <button type="button" name="button">
          Iniciar sessão
        </button>
        <h4>
          ou <span className="bold">cadastre-se</span> no Steam gratuitamente
        </h4>
      </div>
    </div>
  );
}
