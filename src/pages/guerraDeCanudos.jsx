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
  /* Bloco fantasma */ 
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
          <p><strong>(1896–1897)</strong></p>

     <p>
  <strong>Introdução ao Conflito</strong><br/>
  A Guerra de Canudos foi um conflito social e militar que marcou profundamente a história do Brasil no final do século XIX, tendo ocorrido entre 1896 e 1897 no sertão da Bahia, mais especificamente na região de Canudos, um arraial fundado por Antônio Conselheiro, um líder religioso carismático. Este conflito foi resultado direto das tensões sociais e econômicas existentes após a Proclamação da República em 1889, que não trouxe melhorias para as populações mais pobres do sertão nordestino. A seca, a fome, a miséria e o abandono governamental geravam uma grande insatisfação popular, criando um ambiente propício para o surgimento de movimentos messiânicos e comunitários como o de Canudos.
</p>

<p>
  <strong>A Liderança de Antônio Conselheiro</strong><br/>
  Antônio Conselheiro atraiu milhares de seguidores ao pregar uma doutrina religiosa que misturava o catolicismo com uma crítica à República e às mudanças sociais que considerava injustas e imorais. O arraial cresceu rapidamente, chegando a abrigar cerca de 30 mil pessoas, entre sertanejos, ex-escravos e marginalizados que buscavam refúgio naquele espaço autônomo e auto-sustentável, onde a vida era pautada pela religiosidade e pela solidariedade comunitária. Essa independência e a rejeição ao novo regime político geraram desconfiança e medo nas autoridades republicanas, que passaram a enxergar Canudos como uma ameaça à ordem pública.
</p>

<p>
  <strong>O Confronto Militar</strong><br/>
  Durante a guerra, o governo enviou quatro expedições militares para destruir o arraial, mas as primeiras três foram derrotadas graças à resistência dos moradores, que conheciam profundamente o território e lutavam com extrema determinação para defender seu modo de vida. A última expedição, maior e mais bem equipada, acabou por esmagar Canudos após meses de combate intenso, promovendo um massacre que dizimou grande parte da população, incluindo mulheres e crianças. A brutalidade dessa repressão chocou intelectuais da época e foi denunciada posteriormente por Euclides da Cunha na obra “Os Sertões”, que documentou as condições precárias e a valentia do povo sertanejo, além de criticar as injustiças sociais e a violência do Estado.
</p>

<p>
  <strong>O Significado Histórico</strong><br/>
  A Guerra de Canudos representou não apenas um confronto armado, mas um choque entre dois mundos: o sertão rural, empobrecido e marcado pela religiosidade popular, e a modernidade republicana, autoritária e centralizadora, que buscava impor sua autoridade sobre as regiões periféricas do país. Esse conflito evidenciou a exclusão social, o preconceito contra os sertanejos e a intolerância política e religiosa que marcaram aquele período, deixando um legado importante para a compreensão das desigualdades brasileiras e dos movimentos sociais de resistência.
</p>


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
