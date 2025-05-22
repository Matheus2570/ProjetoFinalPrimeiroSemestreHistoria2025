import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Revolucao1 from '../assets/Revolucao1930(1).png';
import Revolucao2 from '../assets/Revolucao1930(2).png';
import Revolucao3 from '../assets/Revolucao1930(3).png';
import Revolucao4 from '../assets/Revolucao1930(4).png';
import Footer from '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx';


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
  // Carregar curtidas do localStorage



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
          <h2>Resumo pessoal – Revolução de 1930</h2>
         <>
  <p><strong>(1930)</strong></p>

  <p>
  <strong>Contexto e Fim da República Velha</strong><br />
  A Revolução de 1930 foi um movimento político-militar de grande importância na história do Brasil, pois marcou o fim da chamada República Velha (ou Primeira República), que havia se consolidado desde 1889 com a Proclamação da República. Essa ruptura colocou um ponto final na política do café com leite, uma prática que envolvia a alternância no poder entre as elites de São Paulo (forte na produção de café) e Minas Gerais (baseada na pecuária e agricultura), excluindo outras regiões do país do protagonismo político. O movimento revolucionário representou o início de uma nova fase no Brasil, caracterizada por transformações estruturais nas esferas política, econômica e social.
</p>

<p>
  <strong>Causas da Revolução</strong><br />
  O pano de fundo da revolução envolvia a crise da ordem oligárquica, a insatisfação das elites regionais excluídas do poder central e a intensificação de movimentos sociais e reivindicações populares. A crise econômica mundial de 1929 agravou ainda mais a situação do Brasil, que dependia fortemente da exportação de café. Com a queda dos preços do produto no mercado internacional, milhares de produtores faliram e o governo foi incapaz de lidar com a crise. Esse contexto de descontentamento foi essencial para fomentar a oposição ao governo federal.
</p>

<p>
  <strong>Eleição de 1930 e Aliança Liberal</strong><br />
  A eleição presidencial de 1930, vencida por Júlio Prestes, candidato da situação apoiado pelas oligarquias paulistas e mineiras, foi amplamente contestada pela oposição reunida na Aliança Liberal, liderada por Getúlio Vargas, então governador do Rio Grande do Sul. A Aliança Liberal tinha como vice o paraibano João Pessoa. O assassinato de João Pessoa em julho de 1930, ainda que não relacionado diretamente à política nacional, foi usado como justificativa simbólica para desencadear o movimento revolucionário. A morte foi explorada como um exemplo da violência e corrupção do regime vigente.
</p>

<p>
  <strong>Início e Desdobramentos da Revolução</strong><br />
  A Revolução teve início em 3 de outubro de 1930, com levantes em diversos estados como Rio Grande do Sul, Minas Gerais e Paraíba. A movimentação revolucionária ganhou força rapidamente, principalmente com o apoio de setores das Forças Armadas, que passaram a pressionar o governo federal. Diante da instabilidade e da impossibilidade de conter os avanços dos revolucionários, o presidente Washington Luís foi deposto em 24 de outubro de 1930 por um grupo de militares, que impediram a posse de Júlio Prestes e entregaram o poder a Getúlio Vargas, então líder da revolução.
</p>

<p>
  <strong>Governo Provisório de Vargas e Reformas</strong><br />
  Com a chegada de Vargas ao poder, iniciou-se uma nova fase da política brasileira. Ele assumiu a presidência provisoriamente e, ao longo dos anos seguintes, centralizou o poder, extinguiu o Congresso Nacional, substituiu governadores por interventores nomeados por ele e passou a concentrar a autoridade no governo federal. Vargas também implementou políticas que visavam modernizar o país, com forte intervenção estatal na economia, incentivo à industrialização, desenvolvimento da infraestrutura e criação de políticas sociais e trabalhistas. Leis como a Consolidação das Leis do Trabalho (CLT), instituída mais tarde, se originaram desse novo modelo.
</p>

<p>
  <strong>Estado Novo (1937-1945)</strong><br />
  Em 1937, Vargas deu um golpe de Estado e instituiu o Estado Novo, uma ditadura que durou até 1945. Esse regime autoritário suspendeu as liberdades civis, censurou a imprensa, reprimiu opositores e implantou um governo centralizador e nacionalista. Apesar disso, o período também foi marcado por um processo de modernização da estrutura produtiva e pela valorização do trabalhador urbano como novo ator político.
</p>

<p>
  <strong>Legado da Revolução de 1930</strong><br />
  A Revolução de 1930 representou, portanto, uma ruptura com o modelo de República oligárquica e ruralista, abrindo caminho para um Estado mais centralizado, urbano-industrial e com maior presença nas esferas sociais e econômicas. Foi um marco de transição entre o Brasil agrário da República Velha e o Brasil moderno, cuja base econômica e institucional seria profundamente transformada nas décadas seguintes. Essa revolução redefiniu o papel do Estado brasileiro e iniciou a Era Vargas, que influenciaria decisivamente os rumos do país ao longo do século XX.
</p>

</>

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

      <Curtidas chaveLocalStorage="curtidaRevolucao1930" />

      <Footer
        link1="https://mundoeducacao.uol.com.br/historiadobrasil/revolucao-1930.htm#:~:text=1930.%5B1%5D-,A%20Revolu%C3%A7%C3%A3o%20de%201930%20foi%20um%20movimento%20armado%2C%20liderado%20pelo,ga%C3%BAcho%20como%20l%C3%ADder%20de%20Estado."
        nome1="Mundo Educação - Revolução de 1930"
        link2="https://www.todamateria.com.br/revolucao-de-1930/"
        nome2="Toda Matéria - Revolução de 1930"
        link3="https://brasilescola.uol.com.br/o-que-e/historia/o-que-foi-revolucao-1930.htm"
      nome3="Brasil Escola - Revolução de 1930"
      />

    </div>
  );
}

export default Pagina8;
