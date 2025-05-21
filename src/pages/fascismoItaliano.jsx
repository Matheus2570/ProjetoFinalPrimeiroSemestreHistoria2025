import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import FascismoItaliano from '../assets/FascismoItaliano.jpg';
import fascismoItaliano from '../assets/fascismoitaliano.png';
import Fascismoitalianoo from '../assets/Fascismoitalianoo.png';
import Curtidas from '../components/botaoCurtir.jsx';
import Footer from '../components/footerPaginas.jsx';

function Pagina5() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);
 

  const imagens = [
    FascismoItaliano,
    fascismoItaliano,
    Fascismoitalianoo,
   
  ];

// Carregar curtidas do localStorage


  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("fascismoItaliano");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Itália Fascista")}`
        );
        const resultado = await res.json();
        localStorage.setItem("fascismoItaliano", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Fascismo Italiano </h2>
          <p>
          O fascismo Italiano foi um governo conservador e extremista que assumiu
        o poder do governo por meio de Benito Mussolini em 1922 que acabou
        oficialmente em 1943. O fascismo na Itália foi um período em que o país
        foi governado por um partido político conservador, radical e de
        extrema-direita, de 1922 a 1943, embora de alguma forma tenha se
        sustentado no poder até 1945. O fascismo surgiu, em 1919, como uma
        organização paramilitar, transformando-se em partido em 1921. Liderado
        por Benito Mussolini, o fascismo se aproveitou do cenário de incerteza
        na qual a Itália vivia após o trauma do pós-Primeira Guerra Mundial.
        Usava da violência para alcançar os seus objetivos e cresceu
        consideravelmente violentando os socialistas na Europa. Benito Mussolini
        foi executado no final da Segunda Guerra Mundial. Diante disso o
        fascismo via nessas práticas o objetivo único de alcançar o “destino
        fatal de Roma”, que seria o de um país glorioso e dominador de muitas
        terras. Inclusive, por conta disso, realizava um resgate do passado
        histórico romano, com o objetivo de transmitir a ideia da “força” do
        povo italiano.
          </p>

          
        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe
          src=" https://www.youtube.com/embed/1crIvDB7Ios?si=JEolMMKiGiYE51fl"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/2MMKqI9qzXU?si=R5XXnDxYvysc7Md1"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
      <Curtidas chaveLocalStorage="curtidaFascismo" />

      <Footer
  link1="https://brasilescola.uol.com.br/historiag/fascismo.htm"
  nome1="Brasil Escola - Fascismo Italiano"
  link2="https://www.todamateria.com.br/fascismo-na-italia/"
  nome2="Toda Matéria - Fascismo Italiano"
  link3="https://www.bbc.com/portuguese/articles/c0dd9d2l9wvo"
  nome3="BBC - Fascismo Italiano"
/>

    </div>
  );
}

export default Pagina5;
