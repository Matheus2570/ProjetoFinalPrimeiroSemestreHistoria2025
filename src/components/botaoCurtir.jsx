import React, { useState, useEffect } from "react";
import "./botaoCurtir.css"; // ou embuta o CSS se quiser

const Curtidas = ({ chaveLocalStorage }) => {
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    const curtidaSalva = localStorage.getItem(chaveLocalStorage);
    if (curtidaSalva) {
      setCurtidas(parseInt(curtidaSalva));
    }
  }, [chaveLocalStorage]);

  const handleCurtir = () => {
    const novaCurtida = curtidas + 1;
    setCurtidas(novaCurtida);
    localStorage.setItem(chaveLocalStorage, novaCurtida);
  };

  return (
    <div className='botaoContainer'>
      <button className='botaoCurtir' onClick={handleCurtir}>👍 Curtir</button>
      <span style={{ marginLeft: "10px" }}>{curtidas} curtidas</span>
    </div>
  );
};

export default Curtidas;
