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
        A Crise de 1929, conhecida como a Grande Depressão, foi um evento de repercussão global que transformou profundamente a economia mundial e os sistemas políticos dos países afetados. Teve início com o colapso da Bolsa de Valores de Nova York, em outubro de 1929, quando o mercado acionário despencou após anos de crescimento especulativo e bolha financeira. Esse crash provocou um efeito dominó que resultou no fechamento de bancos, falência de empresas e desemprego em massa, afetando milhões de pessoas.
      </p>
      <p>
        A década de 1920 foi caracterizada por um crescimento econômico acelerado nos Estados Unidos e em outras potências, sustentado por consumo elevado, crédito fácil e especulação financeira. No entanto, essa prosperidade era instável, marcada por desigualdades e pelo excesso de produção industrial que superava a demanda real. Quando os investidores perderam confiança, venderam ações em massa, causando o colapso do mercado. O impacto imediato foi o congelamento dos créditos, a queda da produção e o aumento do desemprego para níveis recordes, afetando tanto o setor industrial quanto o agrícola.
      </p>
      <p>
        O efeito da crise espalhou-se rapidamente para a Europa, América Latina e outras regiões, agravando a recessão global e causando crises políticas em vários países. A resposta inicial dos governos foi o protecionismo comercial, que piorou ainda mais a situação ao reduzir o comércio internacional. Nos Estados Unidos, o presidente Franklin D. Roosevelt lançou o New Deal, um conjunto de reformas e políticas públicas para estimular a economia, proteger os trabalhadores e reformar o sistema financeiro, fortalecendo o papel do Estado na economia.
      </p>
      <p>
        A Crise de 1929 teve consequências duradouras, alterando para sempre a relação entre Estado e economia, acelerando o declínio do liberalismo econômico clássico e pavimentando o caminho para regimes autoritários na Europa, como o fascismo e o nazismo, que exploraram o descontentamento popular para ascender ao poder. Além disso, a crise evidenciou a necessidade de mecanismos regulatórios para o mercado financeiro e políticas sociais para proteger os mais vulneráveis.
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
