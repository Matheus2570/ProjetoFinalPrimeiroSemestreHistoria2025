import { useEffect, useState } from 'react';
import './ranking.css';

import Canudos from '../assets/imagemCan2.jpg';
import Contestado from '../assets/GuerraContestado2.jpg';
import PrimeiraGuerra from '../assets/PrimeiraGuerra1.png';
import RevolucaoRussa from '../assets/revolucaorussa4.png';
import Fascismo from '../assets/FascismoItaliano2.png';
import CriseDe1929 from '../assets/criseDe1929_3.jpg';
import Revolucao1930 from '../assets/Revolucao1930(2).png';
import Footer from '../components/footerSemFonte';

const Pagina9 = () => {
  const [curtidas, setCurtidas] = useState([]);

  const imagens = {
    'Guerra de Canudos': Canudos,
    'Guerra do Contestado': Contestado,
    'Primeira Guerra Mundial': PrimeiraGuerra,
    'Revolução Russa': RevolucaoRussa,
    'Fascismo': Fascismo,
    'Crise de 1929': CriseDe1929,
    'Revolução de 1930': Revolucao1930
  };

  useEffect(() => {
    const paginas = [
      { chave: 'curtidaCanudos', titulo: 'Guerra de Canudos' },
      { chave: 'curtidaContestado', titulo: 'Guerra do Contestado' },
      { chave: 'curtidaPrimeiraGuerra', titulo: 'Primeira Guerra Mundial' },
      { chave: 'curtidaRevolucaoRussa', titulo: 'Revolução Russa' },
      { chave: 'curtidaFascismo', titulo: 'Fascismo' },
      { chave: 'curtidaCriseDe1929', titulo: 'Crise de 1929' },
      { chave: 'curtidaRevolucao1930', titulo: 'Revolução de 1930' }
    ];

    const dadosCurtidas = paginas.map(({ chave, titulo }) => {
      const valor = parseInt(localStorage.getItem(chave)) || 0;
      return { titulo, valor };
    });

    const ordenado = dadosCurtidas.sort((a, b) => b.valor - a.valor);
    setCurtidas(ordenado);
  }, []);

  return (
    <div className="curtidas-container">
      <h2 className="titulo-curtidas">📊 Páginas Mais Curtidas</h2>
      <ul className="curtidas-list">
        {curtidas.map((pagina, index) => (
          <li key={index}>
            <div className="grupo">
              <p className="nomesTexto"><strong>{pagina.titulo}</strong></p>
              <center>
              <p className="descricao"> <span style={{color: "red"}}>  {pagina.valor} </span>  curtida{pagina.valor !== 1 ? 's' : ''} </p>
              </center>
              <img
                src={imagens[pagina.titulo]}
                alt={pagina.titulo}
                className="curtida-imagem"
              />
            </div>
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Pagina9;
