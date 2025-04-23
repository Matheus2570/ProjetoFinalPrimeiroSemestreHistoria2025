import { useState, useEffect } from 'react';

function Pagina1() {
  const [dadosHistoricos, setDadosHistoricos] = useState([]);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const dadosArmazenados = localStorage.getItem('dadosHistoricos');


    if (dadosArmazenados) {
      try {
        const dadosParseados = JSON.parse(dadosArmazenados);

        //Filtro guerra de canudos
        const guerraCanudos = dadosParseados.find(item => item.title === "Guerra de Canudos");

        if (guerraCanudos) {
          setDadosHistoricos([guerraCanudos]);     //Mostra so guerra de canudos
        } else {
          setErro('Guerra de Canudos não encontrada.');
        }
      } catch (erro) {
        setErro('Erro ao ler dados do localStorage.');
      }
    } else {
      setErro('Nenhum dado encontrado no localStorage.');
    }
  }, []);

  return (
    <div>
      <h1>Trazido pela Wikipedia</h1>
      {erro ? (
        <p style={{ color: 'red' }}>{erro}</p>
      ) : dadosHistoricos.length > 0 ? (
        dadosHistoricos.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{item.title}</h2>
            <p>{item.extract}</p>
           
            {item.thumbnail && (
              <img
                src={item.thumbnail.source}
                alt={item.title}
                width="250"
              />
            )}
            <a href={item.content_urls.desktop.page} target="_blank" rel="noreferrer">
              Leia mais na Wikipedia
            </a>
          </div>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Pagina1;
