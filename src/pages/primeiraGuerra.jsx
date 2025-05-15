import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Guerra1 from '../assets/PrimeiraGuerra1.png';
import Guerra2 from '../assets/PrimeiraGuerra2.png';
import Guerra3 from '../assets/PrimeiraGuerra3.png';
import Guerra4 from '../assets/PrimeiraGuerra4.png';
import Footer from '../components/footerPaginas.jsx';

function Pagina4() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);
  const [curtidas, setCurtidas] = useState(0); // NOVO

  const imagens = [
    Guerra1,
    Guerra2,
    Guerra3,
    Guerra4
  ];
// Carregar curtidas do localStorage
// NOVO
  useEffect(() => {
    const curtidaSalva = localStorage.getItem("curtidaContestado");
    if (curtidaSalva) {
      setCurtidas(parseInt(curtidaSalva));
    }
  }, []);

  const handleCurtir = () => {
    const novaCurtida = curtidas + 1;
    setCurtidas(novaCurtida);
    localStorage.setItem("curtidaContestado", novaCurtida);
  };
  // FIM NOVO

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem('PrimeiraGuerra');
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Primeira Guerra Mundial")}`
        );
        const resultado = await res.json();
        localStorage.setItem("PrimeiraGuerra", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Primeira Guerra Mundial</h2>
          <p>A Primeira Guerra Mundial (1914-1918) foi um conflito global entre a Tríplice Entente (França, Reino Unido, Rússia, depois Itália e EUA) e a Tríplice Aliança (Alemanha, Áustria-Hungria e Império Otomano).
            As causas incluíram o imperialismo, o nacionalismo, a política de alianças,
            a corrida armamentista e a instabilidade nos Balcãs, culminando no assassinato do arquiduque Francisco Ferdinando.
            <br></br>
            A guerra iniciou com a fase de movimento, mas logo se transformou em uma sangrenta guerra de trincheiras. Em 1917, a Rússia se retirou e os EUA entraram, mudando o equilíbrio de poder. As ofensivas finais
            da Entente em 1918 levaram ao colapso das Potências Centrais.
            <br></br>
            As consequências foram vastas com milhões de mortos, o fim de impérios (Alemão, Austro-Húngaro, Russo e Otomano), a criação de novos países, um redesenho do mapa europeu, crise econômica,
            a ascensão dos EUA, a criação da Liga das Nações e o punitivo Tratado de Versalhes, que semeou ressentimento na Alemanha e contribuiu para futuros conflitos. A guerra também gerou um profundo impacto social e cultural.</p>

        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfZAle8CVgg?si=hfriiKYwrORaF64q"
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>

            </iframe>

       <iframe width="560" height="315" src="https://www.youtube.com/embed/0Cy2UIUsbus?si=o0FhVEU5AaI5aZVA" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen></iframe>
      </div>

      {/*Aqui*/}
           
{/* BOTÃO CURTIR */}

      <div className='botaoContainer' >
            <button className='botaoCurtir' onClick={handleCurtir}>👍 Curtir</button>
            <span style={{ marginLeft: "10px" }}>{curtidas} curtidas</span>
          </div>
{/* FIM DO BOTÃO CURTIR */}

      <Footer
        link1="https://brasilescola.uol.com.br/historiag/primeira-guerra.htm"
        nome1="Site 1"
        link2="https://www.todamateria.com.br/primeira-guerra-mundial/"
        nome2="Site 2"
        link3="https://mundoeducacao.uol.com.br/historiageral/primeira-guerra-mundial.htm"
        nome3="Site 3"
      />

    </div>
  );
}

export default Pagina4;
