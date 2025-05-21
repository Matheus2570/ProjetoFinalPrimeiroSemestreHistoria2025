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
  <strong>Contexto de Surgimento</strong><br />
  O fascismo italiano foi um movimento político autoritário, ultranacionalista e antidemocrático que surgiu no início do século XX, tendo como principal líder Benito Mussolini. O movimento ganhou força em um momento de grande instabilidade na Itália, especialmente após a Primeira Guerra Mundial. O país enfrentava uma grave crise econômica, com inflação, desemprego e empobrecimento generalizado, além de intensos conflitos sociais marcados por greves e o temor da expansão do socialismo e do comunismo, especialmente após a Revolução Russa de 1917.
</p>

<p>
  <strong>Criação do Partido Fascista</strong><br />
  Nesse cenário de descontentamento e insegurança, Mussolini fundou, em 1919, o Partido Nacional Fascista. O partido prometia restaurar a ordem, garantir a estabilidade política e reviver o orgulho nacional italiano, apelando à população com um discurso agressivo contra a esquerda, contra os liberais e contra o sistema democrático parlamentar. O fascismo pregava a supremacia do Estado sobre o indivíduo, o fim do pluralismo político, a censura à imprensa e a glorificação da figura do líder como salvador da pátria.
</p>

<p>
  <strong>Ascensão ao Poder</strong><br />
  Um dos principais instrumentos do fascismo era a violência organizada, com o uso dos "camisas-negras", milícias paramilitares que atacavam sindicatos, partidos de esquerda e quaisquer opositores do regime. Em 1922, Mussolini liderou a Marcha sobre Roma, uma mobilização simbólica e intimidadora que pressionou o rei Vítor Emanuel III a nomeá-lo Primeiro-Ministro. A partir daí, iniciou-se a construção do Estado fascista, que progressivamente eliminou as instituições democráticas e implantou um regime totalitário, no qual não havia espaço para a dissidência.
</p>

<p>
  <strong>Características do Regime</strong><br />
  O regime de Mussolini centralizou o poder, reprimiu liberdades individuais, perseguiu minorias políticas e utilizou-se de intensa propaganda para manipular a opinião pública. A educação foi militarizada, e a juventude italiana era doutrinada desde cedo nos valores do fascismo. O Estado passou a controlar vários aspectos da vida social e econômica, promovendo a ideia de uma nação forte, unida e subordinada ao líder máximo, chamado de "Duce".
</p>

<p>
  <strong>Política Externa e Alianças</strong><br />
  Em termos de política externa, Mussolini buscava resgatar a glória do antigo Império Romano e expandir o território italiano. Em 1935, invadiu a Etiópia, provocando condenações internacionais. No final da década de 1930, aproximou-se de Adolf Hitler, selando uma aliança entre o fascismo italiano e o nazismo alemão. A Itália entrou na Segunda Guerra Mundial ao lado das potências do Eixo, participando de diversos conflitos e sofrendo severas derrotas militares.
</p>

<p>
  <strong>Queda do Regime</strong><br />
  Com o avanço dos Aliados e a crescente oposição interna, o regime de Mussolini começou a ruir. Em 1943, ele foi deposto e preso, embora tenha sido libertado por forças alemãs e colocado como líder de um governo-fantoche no norte da Itália. Em 1945, ao tentar fugir, Mussolini foi capturado por partisans italianos e executado. O corpo do ditador foi exposto publicamente como símbolo do fim do regime fascista.
</p>

<p>
  <strong>Legado e Importância Histórica</strong><br />
  O fascismo é considerado um dos exemplos mais extremos de regime totalitário do século XX. Seu legado inclui repressão, violência política, intolerância, militarismo e desrespeito aos direitos humanos. O estudo do fascismo continua sendo fundamental para compreender os perigos que ideologias autoritárias representam para a democracia, especialmente em contextos de crise e polarização social.
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
