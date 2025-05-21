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
          <>
  <p><strong>(1917 - 1943)</strong></p>

   <p>
        O fascismo italiano foi um movimento político autoritário e nacionalista que surgiu no início do século XX, liderado por Benito Mussolini, e que moldou profundamente a Itália entre as décadas de 1920 e 1940. Após a Primeira Guerra Mundial, a Itália vivia uma grave crise econômica, social e política, com desemprego elevado, greves e o medo do avanço do socialismo e do comunismo. Nesse contexto, Mussolini fundou o Partido Nacional Fascista em 1919, prometendo restaurar a ordem, a estabilidade e o orgulho nacional.
      </p>
      <p>
        O fascismo pregava a supremacia do Estado sobre o indivíduo, o culto à autoridade e ao líder, a repressão das oposições políticas e o combate ao socialismo. Mussolini e seus seguidores utilizavam violência paramilitar, propagandas intensas e retórica nacionalista para conquistar apoio popular. Em 1922, com a Marcha sobre Roma, Mussolini pressionou o rei a nomeá-lo Primeiro-Ministro, iniciando a consolidação do regime fascista que aboliu as instituições democráticas, censurou a imprensa e perseguiu opositores.
      </p>
      <p>
        Durante seu governo, Mussolini implementou políticas expansionistas, promovendo a invasão da Etiópia em 1935, buscando restaurar o império romano e colocar a Itália entre as grandes potências mundiais. O fascismo italiano também formou uma aliança estreita com o nazismo alemão, culminando na participação da Itália na Segunda Guerra Mundial ao lado das potências do Eixo. O regime fascista ficou marcado pelo autoritarismo extremo, pela propaganda ideológica e pela repressão brutal, e terminou com a derrota da Itália em 1945 e a morte de Mussolini.
      </p>
      <p>
        O fascismo é um dos exemplos mais estudados de regimes totalitários do século XX, ilustrando como crises econômicas e medos sociais podem ser explorados para a ascensão de governos autoritários, e deixando um legado de violência, intolerância e destruição.
      </p>
</>


          
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
