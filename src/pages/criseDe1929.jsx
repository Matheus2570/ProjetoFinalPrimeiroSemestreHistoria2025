import { useEffect, useState } from "react";
import SliderHome from "../components/sliderPaginas";
import "./cssPaginasGlobais.css";
import Crise from "../assets/criseDe1929.jpg";
import Crise2 from "../assets/criseDe1929_1.jpg";
import Crise3 from "../assets/criseDe2929_2.jpg";
import Crise4 from "../assets/criseDe1929_3.jpg";
import Footer from "../components/footerPaginas.jsx";
import Curtidas from "../components/botaoCurtir.jsx";

function Pagina6() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  const imagens = [Crise, Crise2, Crise3, Crise4];

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("criseDe1929");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Crise de 1929")}`
        );
        const resultado = await res.json();
        localStorage.setItem("criseDe1929", JSON.stringify(resultado));
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
          <h3>
            <em>{dado.description}</em>
          </h3>
          {dado.thumbnail && (
            <img src={dado.thumbnail.source} alt={dado.title} width={250} />
          )}
          <p>{dado.extract}</p>
          <a
            href={dado.content_urls.desktop.page}
            target="_blank"
            rel="noreferrer"
          >
            Ver na Wikipedia
          </a>
        </div>
      )}

      {/* Bloco com resumo e carrossel */}
      <div className="resumo-pessoal">
        <div className="resumo-texto">
          <h2>Resumo pessoal – Crise de 1929</h2>
         <>
  <p><strong>(1929–1939)</strong></p>

<p>
  <strong>Contexto e Início da Crise</strong><br />
  A Crise de 1929, também conhecida como a Grande Depressão, foi um dos mais impactantes colapsos econômicos da história moderna, com efeitos devastadores que repercutiram em escala global. Teve início nos Estados Unidos, com a quebra da Bolsa de Valores de Nova York em 24 de outubro de 1929, data que ficou conhecida como a "Quinta-feira Negra". Durante essa semana, os mercados acionários entraram em colapso devido à venda massiva de ações, provocada pelo temor de que os preços estivessem inflacionados artificialmente. Essa quebra pôs fim a uma década de prosperidade aparente, marcada por crescimento especulativo, crédito facilitado e otimismo exagerado no sistema financeiro.
</p>

<p>
  <strong>Década de 1920: Prosperidade Frágil</strong><br />
  A década de 1920, chamada de "Anos Loucos" ou "Roaring Twenties", foi caracterizada por um rápido crescimento econômico, sobretudo nos Estados Unidos, com avanços tecnológicos, aumento do consumo e expansão do crédito. No entanto, essa prosperidade era frágil e desigual, baseada em especulação financeira e superprodução. As indústrias produziam mais do que o mercado podia absorver, gerando estoques excessivos e queda nos preços. Enquanto isso, os trabalhadores, que representavam a maioria da população, não acompanhavam esse ritmo de enriquecimento, criando um desequilíbrio estrutural entre produção e consumo.
</p>

<p>
  <strong>Impactos Econômicos e Sociais</strong><br />
  O colapso da bolsa provocou uma reação em cadeia: bancos faliram em massa por não conseguirem recuperar os empréstimos feitos com base em ações supervalorizadas, empresas fecharam por falta de crédito e consumidores pararam de gastar. O desemprego atingiu níveis alarmantes, com cerca de 25% da força de trabalho norte-americana desocupada em 1933. Milhares de pessoas perderam suas casas, e cidades inteiras mergulharam na pobreza. A crise não se restringiu aos Estados Unidos. Como a economia mundial estava cada vez mais interligada, os efeitos foram sentidos na Europa, na América Latina, na Ásia e em outras regiões, provocando uma recessão global.
</p>

<p>
  <strong>Consequências Políticas</strong><br />
  As consequências políticas da crise foram igualmente severas. Em muitos países europeus, o desemprego em massa e a instabilidade econômica geraram insatisfação popular, que foi explorada por movimentos autoritários. Na Alemanha, a crise enfraqueceu a frágil República de Weimar e facilitou a ascensão de Adolf Hitler e do Partido Nazista ao poder. Na Itália, fortaleceu o regime fascista de Benito Mussolini. Na América Latina, provocou mudanças nos modelos econômicos e o crescimento de governos com propostas nacionalistas e intervencionistas, como o de Getúlio Vargas no Brasil.
</p>

<p>
  <strong>Resposta dos Estados Unidos: New Deal</strong><br />
  Nos Estados Unidos, a resposta governamental inicial foi tímida, mas a partir de 1933, com a posse do presidente Franklin D. Roosevelt, foi implementado o New Deal. Esse conjunto de medidas incluía investimentos públicos em obras de infraestrutura, criação de empregos, regulação do sistema bancário e da bolsa de valores, e programas sociais de apoio a desempregados e agricultores. O New Deal redefiniu o papel do Estado na economia, rompendo com o liberalismo clássico e abrindo caminho para uma nova era de intervenção estatal.
</p>

<p>
  <strong>Legado e Lições da Crise</strong><br />
  A Crise de 1929 deixou lições profundas. Ficou evidente que os mercados não são capazes de se autorregular de forma eficiente em momentos de instabilidade. A necessidade de instituições fortes, políticas públicas inclusivas e sistemas regulatórios se tornou uma das principais conclusões extraídas desse período. Além disso, a crise reforçou a importância do equilíbrio entre crescimento econômico e justiça social, apontando para um novo paradigma na relação entre Estado, mercado e sociedade.
</p>

</>

        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/PuXyboguY5c?si=yR8Tkc1-DdeBGB9T"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/V5VXxyn6G24?si=87M8KsyeR5oFfHa3"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <Curtidas chaveLocalStorage="curtidaCriseDe1929" />

      <Footer
        link1="https://www.todamateria.com.br/crise-de-1929/"
        nome1="Toda Matéria - Crise de 1929"
        link2="https://www.historiadomundo.com.br/idade-contemporanea/crisede29.htm"
        nome2="História do Mundo - Crise de 1929"
        link3="https://brasilescola.uol.com.br/historiag/crise29.htm"
        nome3="Brasil Escola - Crise de 1929"
      />
    </div>
  );
}

export default Pagina6;
