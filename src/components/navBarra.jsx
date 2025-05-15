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
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              marginRight: "5%",
              perspective: "600px",
            }}
          >
            <div
              onClick={alternarMenu}
              style={{
                width: "40px",
                height: "40px",
                position: "relative",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s, color 0.5s ease",
                transform: menuAberto ? "rotateY(180deg)" : "rotateY(0deg)",
                cursor: "pointer",
              }}
            >
              {/* Frente */}
              <i
                className="bx bx-menu"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  fontSize: "2.5em",
                  backfaceVisibility: "hidden",
                }}
              ></i>

              {/* Verso */}
              <i
                className="bx bx-menu-alt-right"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  fontSize: "2.5em",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              ></i>
            </div>
          </div>

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
