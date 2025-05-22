import { useEffect, useState } from 'react';

// Função que representa o componente SliderHome
function SliderHome(props) {
  // Recebe as imagens como propriedade do componente
  const { imagens } = props;
  
  // Estado que armazena a imagem atual
  const [imagemAtual, setImagemAtual] = useState(0);

  // Função que avança para a próxima imagem
  const proximo = () => {
    // Atualiza o estado da imagem atual, fazendo um loop infinito
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  // Efeito que cria um intervalo para avançar para a próxima imagem a cada 5 segundos
  useEffect(() => {
    // Cria um intervalo que chama a função proximo a cada 5 segundos
    const intervalo = setInterval(() => {
      proximo();
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, [imagemAtual]); // Garante que o carrossel continue ciclando

  // Retorna o JSX do componente
  return (
    // Div que contém o slider
    <div className="meio">
     
      <div id="slider">
       
        {imagens.map((imagem, index) => (
          // Imagem que é exibida no slider
          <img
            // Chave única para a imagem
            key={index}
            // Classe CSS para a imagem
            className="img"
            // URL da imagem
            src={imagem}
            // Texto alternativo para a imagem
            alt={`Imagem ${index + 1}`}
            // Estilo que esconde ou exibe a imagem com base no estado da imagem atual
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
}

// Exporta o componente como padrão
export default SliderHome;