import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBarra.css";
import BotaoMudarTema from "./botao";

function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">Portal Da História</h1>

        <div className="tituloComBotao">
          {/* Ícone do menu com efeito flip 3D */}
          <i
        className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
        onClick={alternarMenu} 
        style={{ cursor: "pointer" }}
      ></i> 

          <BotaoMudarTema />
        </div>
      </div>

      {menuAberto && (
        <div id="menu-opcoes" className="menu-opcoes">
          <ul>
                        <li><Link to="/" className="navLink">🏠 Página Principal</Link></li>
            <li><Link to="/guerra-de-canudos" className="navLink">⚔️ Guerra de Canudos</Link></li>
            <li><Link to="/guerra-do-contestado" className="navLink">🛡️ Guerra do Contestado</Link></li>
            <li><Link to="/primeira-guerra" className="navLink">🌍 Primeira Guerra</Link></li>
            <li><Link to="/revolucao-russa" className="navLink">☭ Revolução Russa</Link></li>
            <li><Link to="/fascismo-italiano" className="navLink">🦅 Fascismo Italiano</Link></li>
            <li><Link to="/crise-de-1929" className="navLink">📉 Crise de 1929</Link></li>
            <li><Link to="/revolucao-de-1930" className="navLink">🔥 Revolução de 1930</Link></li>
            <li><Link to="/sobre-nos" className="navLink">👥 Sobre Nós</Link></li>
            <li><Link to="/ranking" className="navLink">✅ Ranking Das Melhores Páginas</Link></li>
          </ul>
        </div>
      )}

      {/* 
      Código antigo do ícone que muda sem efeito 3D:
      
      <i
        className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
        onClick={alternarMenu} 
        style={{ cursor: "pointer" }}
      ></i> 
      */}
    </nav>
  );
}

export default Nav;
