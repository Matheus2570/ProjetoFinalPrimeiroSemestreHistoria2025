import { useEffect, useState } from "react";
import SliderHome from "../components/sliderPaginas";
import "./cssPaginasGlobais.css";
import Crise from "../assets/criseDe1929.jpg";
import Crise2 from "../assets/criseDe1929_1.jpg";
import Crise3 from "../assets/criseDe2929_2.jpg";
import Crise4 from "../assets/criseDe1929_3.jpg";
import Footer from "../components/footerPaginas.jsx";

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
        localStorage.setItem("guerraDeContestado", JSON.stringify(resultado));
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

      {/* Bloco com resumo + carrossel */}
      <div className="resumo-pessoal">
        <div className="resumo-texto">
          <h2>Resumo pessoal – Crise de 1929</h2>
          <p>
            A Crise de 1929 foi um colapso econômico mundial que começou nos EUA
            com a quebra da Bolsa de Valores de Nova York devido à superprodução
            industrial, subconsumo da população, especulação excessiva no
            mercado de ações e políticas econômicas inadequadas.
          </p>
          <p>
            Isso levou a falências de empresas, desemprego em massa e impacto
            sobre a exportação de café no Brasil. O presidente Franklin D.
            Roosevelt implementou o New Deal, um plano de recuperação econômica
            com investimento em obras públicas, programas de assistência social,
            reforma bancária e estímulo ao emprego.
          </p>
          <p>
            A crise evidenciou as fragilidades do sistema capitalista liberal e
            levou à adoção de modelos econômicos mais regulados. Seu fim se deu
            com o New Deal e a entrada dos EUA na Segunda Guerra Mundial,
            deixando um legado de profundas transformações políticas, sociais e
            econômicas no século XX.
          </p>
          <p>
            A Crise de 1929 também teve um impacto significativo na política
            global, contribuindo para o surgimento de regimes autoritários em
            alguns países. Além disso, a crise levou a uma reavaliação do papel
            do Estado na economia, com muitos governos adotando políticas
            intervencionistas para mitigar os efeitos da crise.
          </p>
          <p>
            No Brasil, a crise contribuiu para a Revolução de 1930, que levou
            Getúlio Vargas ao poder e iniciou um período de transformações
            políticas e econômicas no país. com a implementação de políticas
            nacionalistas e intervencionistas. Vargas também criou a
            Consolidação das Leis do Trabalho (CLT) para proteger os direitos
            dos trabalhadores.
          </p>
        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/TTq6yzDH4gM?si=DN3z-Oi8-YmxxQFE"
          title="Vídeo 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/V5VXxyn6G24?si=8Pv7Dzl3vVRleVOu"
          title="Vídeo 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/*Aqui*/}

      <Footer
        link1="https://www.todamateria.com.br/crise-de-1929/"
        nome1="Toda Matéria"
        link2="https://www.historiadomundo.com.br/idade-contemporanea/crisede29.htm"
        nome2="História do Mundo"
        link3="https://brasilescola.uol.com.br/historiag/crise29.htm"
        nome3="Brasil Escola"
      />
    </div>
  );
}

export default Pagina6;
