import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import RevRussa1 from '../assets/revolucaorussa1.png';
import RevRussa2 from '../assets/revolucaorussa2.png';
import RevRussa3 from '../assets/revolucaorussa3.png';
import RevRussa4 from '../assets/revolucaorussa4.png';
import RevRussa5 from '../assets/revolucaorussa5.png';
import RevRussa6 from '../assets/revolucaorussa6.png';
import Footer from  '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx';

function Pagina4() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);


  const imagens = [
    RevRussa1,
    RevRussa2,
    RevRussa3,
    RevRussa4,
    RevRussa5,
    RevRussa6
  ];
 
  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("revolucaoRussa");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Revolução Russa")}`
        );
        const resultado = await res.json();
        localStorage.setItem("revolucaoRussa", JSON.stringify(resultado));
        setDado(resultado);
      } catch (erro) {
        setErro("Erro ao buscar dados.");
      } finally {
        setLoading(false);
      }
    };

    buscarDado();
  }, []);

  return (
    <div className="container">
      {/* Bloco da API */}
      {loading && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!loading && dado && (
        <div className="api-section">
          <h1>{dado.title}</h1>
          <h3><em>{dado.description}</em></h3>
          {dado.thumbnail && (
            <img src={dado.thumbnail.source} alt={dado.title} width={250} />
          )}
          <p>{dado.extract}</p>
          <a href={dado.content_urls.desktop.page} target="_blank" rel="noreferrer">
            Ver na Wikipedia
          </a>
        </div>
      )}

      {/* Bloco com resumo + carrossel */}
      <div className="resumo-pessoal">
        <div className="resumo-texto">
          <h2>Resumo pessoal – Guerra do Contestado</h2>
          <p>
           A Rússia, no início do século XX, era um império comandado pelo czar, com grande desigualdade social. A maioria da população vivia na miséria,enquanto a nobreza desfrutava de luxo.
            As ideias comunistas de Karl Marx e Friedrich Engels, que propunham uma sociedade sem classes, começaram a ganhar força entre os russos.
          </p>
          <p>
            O Partido Operário Social-Democrata Russo foi criado, liderado por Lenin, e depois se dividiu em dois grupos: bolcheviques (radicais, liderados por Lenin) e mencheviques (moderados). 
            A crise se agravou com a derrota na Guerra Russo-Japonesa (1904) e o massacre do Domingo Sangrento (1905), gerando revoltas e a criação da Duma, embora o czar mantivesse o controle.
          </p>
          <p>
           A entrada da Rússia na Primeira Guerra Mundial piorou a situação, levando à Revolução de Fevereiro de 1917, que acabou com a monarquia e criou um Governo Provisório, enfraquecido por manter o país na guerra.
           Em outubro de 1917, os bolcheviques tomaram o poder na Revolução de Outubro, instaurando um governo comunista.
          </p>
          <p>
           Lenin implementou medidas como o fim da propriedade privada, a saída da guerra (Tratado de Brest-Litovski) e o início da Guerra Civil Russa (1918–1923), entre o Exército Vermelho (bolcheviques) e seus opositores.
           Os bolcheviques venceram, fundando a URSS em 1922. Para reerguer a economia, Lenin criou a NEP, que permitia algumas práticas capitalistas.
          </p>
          <p>
           Com a morte de Lenin (1924), Stalin assumiu o poder após derrotar Trótski. Durante a Era Stalin, a URSS se industrializou e combateu o analfabetismo, mas também sofreu com repressões brutais, como o Holodomor na Ucrânia, o Grande Expurgo e os campos de trabalho forçado (Gulag). 
           Stalin governou até sua morte em 1953, deixando um legado de avanços e terror.
          </p>
          
        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YHNd8-Tha-E?si=cBJPLmvN7ngCPami" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/3-0ZcoHFtXY?si=fgCDxA_e2DkK9Ch0&amp;controls=0&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      
        <Curtidas chaveLocalStorage="curtidaRevolucaoRussa" />

      <Footer
  link1="https://youtu.be/r_1xj0Pyi-8?feature=shared"
  nome1="Youtube- A Revolução Russa e Suas Consequências"
  link2="https://brasilescola.uol.com.br/historiag/revolucao-russa.htm"
  nome2="Brasil Escola - Revolução Russa"
  link3="https://www.todamateria.com.br/revolucao-russa/"
  nome3="Toda Matéria - Revolução Russa"
/>

    </div>
  );
}

export default Pagina4;
