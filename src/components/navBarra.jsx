import { Link } from "react-router-dom"; // Importa o componente Link do react-router-dom
import { useState } from "react"; // Importa o hook useState do React
import "./navBarra.css"; // Importa o arquivo de estilos CSS
import BotaoMudarTema from "./botao"; // Importa o componente BotaoMudarTema

// Função que representa o componente de navegação
function Nav() {
  // Estado que controla se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Função que alterna o estado do menu
  const alternarMenu = () => {
    setMenuAberto(!menuAberto); // Alterna o estado do menu
  };


  const handleClick = () => {
    setMenuAberto(false); // Fecha o menu
  };

  return (
    // Elemento de navegação
    <nav className="navBar">
     
      <div className="navTopo">
       
        <h1 className="tituloSite">Portal Da História</h1>

       
        <div className="tituloComBotao">
          {/* Ícone do menu mudando */}
          
          <i
            className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
            onClick={alternarMenu} // Função que alterna o estado do menu
            style={{ cursor: "pointer" }} // Estilo que define o cursor como um ponteiro
          ></i>

        
          <BotaoMudarTema />
        </div>
      </div>


      {menuAberto && (
        // Div que contém as opções do menu
        <div id="menu-opcoes" className="menu-opcoes">
         
          <ul>
           
            <li>
              <Link to="/" onClick={handleClick} className="navLink">🏠 Página Principal</Link>
            </li>
            <li>
              <Link to="/guerra-de-canudos" onClick={handleClick} className="navLink">⚔️ Guerra de Canudos</Link>
            </li>
            <li>
              <Link to="/guerra-do-contestado" onClick={handleClick} className="navLink">🛡️ Guerra do Contestado</Link>
            </li>
            <li>
              <Link to="/primeira-guerra" onClick={handleClick} className="navLink">🌍 Primeira Guerra</Link>
            </li>
            <li>
              <Link to="/revolucao-russa" onClick={handleClick} className="navLink">☭ Revolução Russa</Link>
            </li>
            <li>
              <Link to="/fascismo-italiano" onClick={handleClick} className="navLink">🦅 Fascismo Italiano</Link>
            </li>
            <li>
              <Link to="/crise-de-1929" onClick={handleClick} className="navLink">📉 Crise de 1929</Link>
            </li>
            <li>
              <Link to="/revolucao-de-1930" onClick={handleClick} className="navLink">🔥 Revolução de 1930</Link>
            </li>
            <li>
              <Link to="/sobre-nos" onClick={handleClick} className="navLink">👥 Sobre Nós</Link>
            </li>
            <li>
              <Link to="/ranking" onClick={handleClick} className="navLink">✅ Ranking Das Melhores Páginas</Link>
            </li>
            <li>
              <Link to="/video-contestado" onClick={handleClick} className="navLink">🎥 Vídeo Sobre Contestado</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Exporta o componente Nav como padrão
export default Nav;