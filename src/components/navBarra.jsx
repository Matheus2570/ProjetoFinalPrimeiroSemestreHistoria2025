import { Link } from "react-router-dom";
import { useState } from "react";
import "./nav.css";
import BotaoMudarTema from "./botao";

function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">Ervas Medicinais</h1>
        <div className="teste">
          <BotaoMudarTema />
        </div>
        <i className="bx bx-menu" onClick={alternarMenu} style={{ cursor: "pointer" }}></i>
      </div>

      {menuAberto && (
        <div id="menu-opcoes" className="menu-opcoes">
          <ul>
            <li><Link to="/" className="navLink">🏠 Página Principal</Link></li>
            <li><Link to="/guerra-canudos" className="navLink">Guerra de Canudos</Link></li>
            <li><Link to="/guerra-contestado" className="navLink">Guerra do Contestado</Link></li>
            <li><Link to="/primeira-guerra" className="navLink">Primeira Guerra</Link></li>
            <li><Link to="/revolucao-russa" className="navLink">Revolução Russa</Link></li>
            <li><Link to="/fascismo-italiano" className="navLink">Fascismo Italiano</Link></li>
            <li><Link to="/crise-1929" className="navLink">Crise de 1929</Link></li>
            <li><Link to="/revolucao-1930" className="navLink">Revolução de 1930</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
