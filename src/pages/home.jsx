import { useEffect, useState } from "react";
import "./home.css";
import Botao from "../components/botao";

function BuscaAutomatica() {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  const termos = [
    "Guerra de Canudos",
    "Guerra do Contestado",
    "Primeira Guerra Mundial",
  ];

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resultados = [];

        await Promise.all(
          termos.map(async (termo) => {
            const res = await fetch(
              `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
                termo
              )}`
            );
            const dado = await res.json();
            console.log(dado);
            resultados.push(dado);
          })
        );

        localStorage.setItem("dadosHistoricos", JSON.stringify(resultados));
        setDados(resultados);
      } catch (erro) {
        setErro("Erro ao buscar dados.");
      } finally {
        setLoading(false);
      }
    };

    buscarDados();
  }, []);

  return (
    <div className="container">
      <h1>Dados Históricos</h1>
      {loading && <p>Carregando...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!loading && dados.length > 0 && (
        <div className="resultado">
          {dados.map((item, index) => (
            <div key={index} style={{ marginBottom: "30px" }}>
              <h2>{item.title}</h2>
              <p>
                <em>{item.description}</em>
              </p>
              {item.thumbnail && (
                <img src={item.thumbnail.source} alt={item.title} width={250} />
              )}
              <p>{item.extract}</p>
              <a
                href={item.content_urls.desktop.page}
                target="_blank"
                rel="noreferrer"
              >
                Ver na Wikipedia
              </a>
            </div>
          ))}
        </div>
      )}

      <Botao />
    </div>
  );
}

export default BuscaAutomatica;
