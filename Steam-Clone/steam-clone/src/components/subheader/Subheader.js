import '../subheader/Subheader.css'
function Subheader() {
    return (
    <div className="SubheaderBlock">
        <a class="pulldown" href="#">Sua loja</a>
        <a class="pulldown" href="#">Novidades e tendências</a>
        <a class="pulldown" href="#">Categorias</a>
        <a class="tab" href="#">Loja de pontos</a>
        <a class="tab" href="#">Notícias</a>
        <a class="tab" href="#">Laboratório</a>
        <input id="StoreSearchBox" name="term" type="text" class="default" placeholder="Buscar" size="22" autocomplete="off" maxlength="64"></input>
        
    </div>
    )
}
export default Subheader;