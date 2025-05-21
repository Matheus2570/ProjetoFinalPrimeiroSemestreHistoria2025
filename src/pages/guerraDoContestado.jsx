import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Contestado1 from '../assets/GuerraContestado1.jpg';
import Contestado2 from '../assets/GuerraContestado2.jpg';
import Contestado3 from '../assets/GuerraContestado3.jpg';
import Contestado4 from '../assets/GuerraContestado4.jpg';
import Footer from  '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx'

function Pagina2() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);


  const imagens = [
    Contestado1,
    Contestado2,
    Contestado3,
    Contestado4
  ];




  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("guerraDoContestado");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Guerra do Contestado")}`
        );
        const resultado = await res.json();
        localStorage.setItem("guerraDoContestado", JSON.stringify(resultado));
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
      
      <p><strong>(1912–1916)</strong></p>

<p>
  <strong>Origem do Conflito</strong><br />
  A Guerra do Contestado foi um conflito armado ocorrido entre 1912 e 1916 na região limítrofe entre os estados do Paraná e Santa Catarina, no sul do Brasil. A guerra teve origem em disputas territoriais entre os dois estados, mas seu pano de fundo foi principalmente uma luta social e econômica envolvendo milhares de camponeses, pequenos posseiros e trabalhadores rurais expulsos de suas terras para abrir espaço para a construção da Estrada de Ferro São Paulo-Rio Grande, controlada por empresas estrangeiras, em especial capital americano.
</p>

<p>
  <strong>Condições de Vida e Tensões Sociais</strong><br />
  Os habitantes da região do Contestado viviam em condições precárias, dependiam da agricultura de subsistência, da extração da erva-mate e da madeira, e eram profundamente ligados às suas terras, que representavam sua sobrevivência e identidade. Com a chegada da ferrovia, muitas famílias foram despejadas de forma violenta, sem receber qualquer indenização, aumentando o sentimento de injustiça e revolta. Além disso, a presença das empresas estrangeiras e a exploração econômica agravaram as tensões, ao mesmo tempo em que o governo federal e os governos estaduais não conseguiam ou não queriam proteger os interesses dos camponeses.
</p>

<p>
  <strong>Aspectos Religiosos e Confrontos Armados</strong><br />
  O conflito ganhou também um aspecto religioso importante, com o surgimento de líderes messiânicos que incentivavam a resistência armada, prometendo proteção divina e um mundo justo para os seguidores. Isso fez com que a guerra assumisse uma dimensão quase sagrada, com os camponeses organizando guerrilhas e ataques às forças policiais e militares. O governo, por sua vez, reagiu com repressão severa, enviando tropas para combater os revoltosos e esmagar o movimento.
</p>

<p>
  <strong>Consequências e Legado</strong><br />
  A Guerra do Contestado expôs as contradições do Brasil rural da época: a concentração de terras nas mãos de poucos, a exploração econômica por capitais estrangeiros, o abandono das populações rurais pelo Estado e a luta desesperada desses grupos por seus direitos e sobrevivência. Apesar da derrota militar dos revoltosos, o conflito influenciou debates futuros sobre reforma agrária, direitos dos trabalhadores rurais e a intervenção do Estado para promover justiça social no campo.
</p>

          
        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/FF6I7lB8uAg"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/0YHkAIG3d7k"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Curtidas chaveLocalStorage="curtidaContestado" />

      <Footer
  link1="https://brasilescola.uol.com.br/historiab/guerra-contestado.htm"
  nome1="Brasil Escola - Guerra do Contestado"
  link2="https://www.todamateria.com.br/guerra-do-contestado/"
  nome2="Todo Matéria - Guerra do Contestado"
  link3="https://mundoeducacao.uol.com.br/historiadobrasil/guerra-contestado-messianismo.htm"
  nome3="Mundo Educação - Guerra do Contestado"
/>

    </div>
  );
}

export default Pagina2;
