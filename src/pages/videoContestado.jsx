import Footer from '../components/footerPaginas.jsx';
import './videoContestado.css';

function Pagina10() {
  return (
    <div className="container">
      <header>
        <h3 className="titulo-video">Vídeo Grupo 5 Sobre Guerra do Contestado</h3>
      </header>

      <div className="videoosection">
        <iframe
          src="https://www.youtube.com/embed/FF6I7lB8uAg"
          title="Vídeo sobre a Guerra do Contestado"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="descricao-video">
        Neste vídeo, falaremos sobre a história da Guerra do Contestado, um conflito que revelou as tensões sociais e econômicas da região sul do Brasil no início do século XX. 
        Conheça os personagens, os eventos e o legado dessa guerra que ainda ecoa na memória brasileira.
      </p>
    </div>
  );
}

export default Pagina10;