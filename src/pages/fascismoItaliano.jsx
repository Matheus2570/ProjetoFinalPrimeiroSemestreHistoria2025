import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import FascismoItaliano from '../assets/FascismoItaliano.jpg';
import fascismoItaliano from '../assets/fascismoitaliano.webp';
import Fascismoitalianoo from '../assets/Fascismoitalianoo.png';

function Pagina5() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);
  const [curtidas, setCurtidas] = useState(0); // NOVO

  const imagens = [
    FascismoItaliano,
    fascismoItaliano,
    Fascismoitalianoo,
   
  ];

// Carregar curtidas do localStorage
// NOVO
  useEffect(() => {
    const curtidaSalva = localStorage.getItem("curtidaFascismo");
    if (curtidaSalva) {
      setCurtidas(parseInt(curtidaSalva));
    }
  }, []);

  const handleCurtir = () => {
    const novaCurtida = curtidas + 1;
    setCurtidas(novaCurtida);
    localStorage.setItem("curtidaFascismo", novaCurtida);
  };
  // FIM NOVO

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
          src=" https://www.youtube.com/watch?v=2MMKqI9qzXU"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://youtu.be/2MMKqI9qzXU?si=cDf_Bdvv4nQ7bPYt"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      
{/* BOTÃO CURTIR */}

      <div className='botaoContainer' >
            <button className='botaoCurtir' onClick={handleCurtir}>👍 Curtir</button>
            <span style={{ marginLeft: "10px" }}>{curtidas} curtidas</span>
          </div>
{/* FIM DO BOTÃO CURTIR */}

      <Footer
  link1="https://brasilescola.uol.com.br/historiab/guerra-contestado.htm"
  nome1="Site 1"
  link2="https://www.todamateria.com.br/guerra-do-contestado/"
  nome2="Site 2"
  link3="https://mundoeducacao.uol.com.br/historiadobrasil/guerra-contestado-messianismo.htm"
  nome3="Site 3"
/>

    </div>
  );
}

export default Pagina5;
