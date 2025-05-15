import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Revolucao1 from '../assets/Revolucao1930(1).png';
import Revolucao2 from '../assets/Revolucao1930(2).png';
import Revolucao3 from '../assets/Revolucao1930(3).png';
import Revolucao4 from '../assets/Revolucao1930(4).png';
import Footer from '../components/footerPaginas.jsx';

function Pagina8() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  const imagens = [
    Revolucao1,
    Revolucao2,
    Revolucao3,
    Revolucao4
  ];

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem('Revolucao1930');
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Revolução de 1930")}`
        );
        const resultado = await res.json();
        localStorage.setItem("Revolucao1930", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Revolução de 1930</h2>
          <p>A Revolução de 1930 foi um movimento político-militar que marcou o fim da República Velha e o início da Era Vargas no Brasil. Liderada por Getúlio Vargas, o então governador do Rio Grande do Sul, e com o apoio de outros estados como Minas Gerais e Paraíba, a revolução depôs o presidente Washington Luís antes que o presidente eleito Júlio Prestes tomasse posse.
<br></br>
A insatisfação com a política do "café com leite", que alternava o poder entre as oligarquias de Minas Gerais e São Paulo, a crise econômica de 1929 e o assassinato de João Pessoa, candidato a vice-presidente na chapa de Vargas pela Aliança Liberal, foram fatores cruciais para o desencadeamento do movimento.
<br></br>
Em outubro de 1930, as tropas revolucionárias iniciaram levantes em diversos estados, culminando na deposição de Washington Luís no dia 24 de outubro. Em 3 de novembro de 1930, Getúlio Vargas assumiu a chefia do Governo Provisório, marcando o fim da República Velha e o início de um novo período na história do Brasil, caracterizado pela centralização do poder e por importantes reformas sociais e econômicas.</p>

        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jQU6Ojetq8M?si=NblW6mIrHIDwrJgB"
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>

            </iframe>

       <iframe
       src="https://www.youtube.com/embed/z6SqhhdoCbc?si=x98T4I_YV-7arwhS" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen></iframe>
      </div>

      {/*Aqui*/}

      <Footer
        link1="https://mundoeducacao.uol.com.br/historiadobrasil/revolucao-1930.htm#:~:text=1930.%5B1%5D-,A%20Revolu%C3%A7%C3%A3o%20de%201930%20foi%20um%20movimento%20armado%2C%20liderado%20pelo,ga%C3%BAcho%20como%20l%C3%ADder%20de%20Estado."
        nome1="Site 1"
        link2="https://www.todamateria.com.br/revolucao-de-1930/"
        nome2="Site 2"
        link3="https://brasilescola.uol.com.br/o-que-e/historia/o-que-foi-revolucao-1930.htm"
        nome3="Site 3"
      />

    </div>
  );
}

export default Pagina8;
