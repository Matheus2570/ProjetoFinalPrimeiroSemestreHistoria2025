// Importação de hooks do React
import { useEffect, useState } from 'react';

// Importação de CSS para estilização da página
import './ranking.css';

// Importação de imagens utilizadas na página
import Canudos from '../assets/imagemCan2.jpg';
import Contestado from '../assets/GuerraContestado2.jpg';
import PrimeiraGuerra from '../assets/PrimeiraGuerra1.png';
import RevolucaoRussa from '../assets/revolucaorussa4.png';
import Fascismo from '../assets/FascismoItaliano2.png';
import CriseDe1929 from '../assets/criseDe1929_3.jpg';
import Revolucao1930 from '../assets/Revolucao1930(2).png';

// Importação do componente Footer
import Footer from '../components/footerSemFonte';

// Definição da função Pagina9
const Pagina9 = () => {
  // Estado para armazenar as curtidas
  const [curtidas, setCurtidas] = useState([]);

  // Objeto que relaciona títulos com imagens
  const imagens = {
    'Guerra de Canudos': Canudos,
    'Guerra do Contestado': Contestado,
    'Primeira Guerra Mundial': PrimeiraGuerra,
    'Revolução Russa': RevolucaoRussa,
    'Fascismo': Fascismo,
    'Crise de 1929': CriseDe1929,
    'Revolução de 1930': Revolucao1930
  };

  // Hook useEffect para executar uma ação quando a página é carregada
  useEffect(() => {
    // Definição de um array de objetos que representam as páginas
    const paginas = [
      { chave: 'curtidaCanudos', titulo: 'Guerra de Canudos' },
      { chave: 'curtidaContestado', titulo: 'Guerra do Contestado' },
      { chave: 'curtidaPrimeiraGuerra', titulo: 'Primeira Guerra Mundial' },
      { chave: 'curtidaRevolucaoRussa', titulo: 'Revolução Russa' },
      { chave: 'curtidaFascismo', titulo: 'Fascismo' },
      { chave: 'curtidaCriseDe1929', titulo: 'Crise de 1929' },
      { chave: 'curtidaRevolucao1930', titulo: 'Revolução de 1930' }
    ];

    // Mapeamento do array de páginas para obter os valores de curtidas
    const dadosCurtidas = paginas.map(({ chave, titulo }) => {
      // Obtenção do valor de curtidas do localStorage ou 0 se não existir
      const valor = parseInt(localStorage.getItem(chave)) || 0;
      return { titulo, valor };
    });

    // Ordenação do array de curtidas em ordem decrescente
    const ordenado = dadosCurtidas.sort((a, b) => b.valor - a.valor);

    // Atualização do estado de curtidas
    setCurtidas(ordenado);
  }, []);

  // Retorno do JSX que representa a página
  return (
    // Div que contém a lista de curtidas
    <div className="curtidas-container">
     
      <h2 className="titulo-curtidas">📊 Páginas Mais Curtidas</h2>
  
      <ul className="curtidas-list">
        
        {curtidas.map((pagina, index) => (
          // Item da lista
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

// Exportação da função Pagina9 como componente
export default Pagina9;