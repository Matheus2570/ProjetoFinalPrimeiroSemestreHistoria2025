import { useEffect, useState } from 'react';

function SliderHomePage(props) {
  const { imagens } = props;
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

 

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximo();
    }, 5000);

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [imagemAtual]); // Garante que o carrossel continue ciclando

  return (
    <div className="meio">
      <div id="slider">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
        
          &lt;
      
      </div>
    </div>
  );
}

export default SliderHomePage;
