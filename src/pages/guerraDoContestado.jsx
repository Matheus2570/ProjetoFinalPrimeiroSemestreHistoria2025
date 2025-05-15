import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Contestado1 from '../assets/GuerraContestado1.jpg';
import Contestado2 from '../assets/GuerraContestado2.jpg';
import Contestado3 from '../assets/GuerraContestado3.jpg';
import Contestado4 from '../assets/GuerraContestado4.jpg';
import Footer from  '../components/footerPaginas.jsx';

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
        const dadoLocal = localStorage.getItem("guerraDeContestado");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Guerra do Contestado")}`
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
          <p>
            A Guerra do Contestado foi um conflito que rolou entre 1912 e 1916, na divisa entre o Paraná e Santa Catarina.
            A região era cheia de madeira e erva-mate, o que causou briga entre os dois estados por causa das terras.
          </p>
          <p>
            Tudo piorou quando uma empresa dos Estados Unidos construiu uma ferrovia no local e tirou muitos posseiros de suas terras.
            Depois que a obra terminou, muita gente ficou desempregada e sem ter onde morar.
          </p>
          <p>
            No meio disso tudo, surgiu um líder religioso chamado José Maria, que prometia justiça e um novo tempo de paz e igualdade.
            Ele criou uma comunidade chamada "Quadrado Santo" e ganhou vários seguidores.
          </p>
          <p>
            Mesmo depois da morte de José Maria, os sertanejos continuaram lutando, acreditando que ele ia voltar.
            O governo mandou tropas, armas e até aviões pra acabar com a resistência.
          </p>
          <p>
            A guerra terminou em 1916, com milhares de mortos. No fim, os estados resolveram a disputa pelas terras,
            mas o conflito mostrou como o povo do campo era ignorado pelo governo e vivia em situação bem difícil.
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

      <Footer />
    </div>
  );
}

export default Pagina2;
