import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import imgCan1 from '../assets/imagemCan1.jpg'
import imgCan2 from '../assets/imagemCan2.jpg'
import imgCan3 from '../assets/imagemCan3.jpg'
import imgCan4 from '../assets/imagemCan4.jpg'
import imgCan5 from '../assets/imagemCan5.jpg'
import imgCan6 from '../assets/imagemCan6.jpeg'
import imgCan7 from '../assets/imagemCan7.jpg'
import Footer from '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx'

function Pagina1() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  const imagens = [
    imgCan1,
    imgCan2,
    imgCan3,
    imgCan4,
    imgCan5,
    imgCan6,
    imgCan7,
  ];

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("guerraDeCanudos");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Guerra de Canudos")}`
        );
        const resultado = await res.json();
        localStorage.setItem("guerraDeCanudos", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Guerra de Canudos</h2>
          <p>
            A guerra de canudos aconteceu por motivos governamentais.
            De repente mudamos para uma república e uma grande revolta surgiu já que nessa época a nossa economia era baseada em latifúndio, monocultura e exploração de mão de obra que era miserável.
          </p>
          <p>
            A guerra aconteceu pois mais de 25000 pessoas que procuravam condições de vida melhores se agruparam no sertão da Bahia, em específico no arraial de Canudos; lá a comunidade não tinha diferenças sociais e os rebanhos e lavouras pertenciam a todos atraindo cada vez mais pessoas.
            A comunidade era liderada por Antônio conselheiro que causava por sua vez receio ao governo por seu "poder" crescente e o que gerou conflito entre os latifundiários e a população pobre já que a população de canudos estava sofrendo descaso.</p>
          <p>
            No meio disso tudo, surgiu um líder religioso chamado José Maria, que prometia justiça e um novo tempo de paz e igualdade.
            Os moradores de Canudos eram fieis a Antônio já que a partir dele vinha uma suposta salvação para quem o seguisse o que tornava sua palavra tão forte.
          </p>
          <p>
            Com toda essa tensão o medo e receio aumentou da parte governamental,padres perderam seus fieis e os proprietários das terras perderam seus trabalhadores, assim passaram a considerar os habitantes de canudos como fanáticos que deveriam ser eliminados;
            após isso o governador da Bahia enviou soldados duas vezes mas os sertanejos sairam por cima, depois o vice-presidente também tentou e os sertanejos ganharam novamente. Essas tentativas fez com que o presidente e a república fossem vistos como fracos já que fracassaram, isso frustrou muito o governo então Prudente de Morais, o presidente na época, ordenou que 5000 homens fossem destruir canudos e assim fizeram; voltaram com a cabeça de Antônio e mãos em forma de troféu acabando assim com a guerra. </p>


        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/UCicCcFJPns?si=uMcOhCWEBXm3fPFx"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/f4DT0-gvs6c?si=Bcguh_WSBBjNGO4X"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Curtidas chaveLocalStorage="curtidaCanudos" />

      <Footer
        link1="https://www.fflch.usp.br/127134"
        nome1="Faculdade de Filosofia, Letras e Ciências Humanas da USP - Guerra de Canudos" 
        link2="https://museudarepublica.museus.gov.br/wp-content/uploads/2017/10/CronoCanudos.pdf"
        nome2="Museu da República - Cronologia da Guerra de Canudos"
        link3="https://atlas.fgv.br/verbetes/guerra-de-canudos"
        nome3="Atlas da História do Brasil - Guerra de Canudos"
      />

    </div>
  );
}

export default Pagina1;
