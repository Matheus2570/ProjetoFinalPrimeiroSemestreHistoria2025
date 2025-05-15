import { useEffect, useState } from 'react';

function Pagina2() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("guerraDeContestado");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false); // Já tem dados, termina o loading
          return; // Para aqui para não fazer fetch
        }

        // Se não tem no localStorage, faz a requisição
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
      {loading && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!loading && dado && (
        <div className="resultado">
          <h1>{dado.title}</h1>
          <p><em>{dado.description}</em></p>
          {dado.thumbnail && (
            <img src={dado.thumbnail.source} alt={dado.title} width={250} />
          )}
          <p>{dado.extract}</p>
          <a href={dado.content_urls.desktop.page} target="_blank" rel="noreferrer">
            Ver na Wikipedia
          </a>
        </div>
      )}
    </div>
  );
}

export default Pagina2;
