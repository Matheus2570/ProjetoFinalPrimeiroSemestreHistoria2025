import { useEffect, useState } from 'react';
import './sliderHomePage.css'; 

function SliderHomePage(props) {
  const { imagens } = props;
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

 

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximo();
    }, 3000);

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [imagemAtual]); // Garante que o carrossel continue ciclando

  return (
    <div className="meio">
      <div id="slider1">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
        
      
      
      </div>
    </div>
  );
}

export default SliderHomePage;
