import { useEffect, useState } from 'react'; // Importa hooks do React para gerenciar estado e efeitos colaterais
import './SliderHomePage.css'; // Importa CSS para estilizar o componente

// Função que representa o componente SliderHomePage
function SliderHomePage(props) {
  // Destrutura a propriedade "imagens" do objeto props
  const { imagens } = props;
  
  // Estado que armazena a imagem atual sendo exibida
  const [imagemAtual, setImagemAtual] = useState(0);

  // Função que avança para a próxima imagem
  const proximo = () => {
    // Atualiza o estado imagemAtual para a próxima imagem, utilizando o operador módulo para garantir que o índice esteja dentro do limite do array
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  // Hook que cria um efeito colateral para atualizar a imagem a cada 3 segundos
  useEffect(() => {
    // Cria um intervalo que chama a função proximo a cada 3 segundos
    const intervalo = setInterval(() => {
      proximo();
    }, 3000);

    // Função de limpeza que é chamada quando o componente é desmontado, para evitar vazamentos de memória
    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [imagemAtual]); // Garante que o carrossel continue ciclando

  // Retorna o JSX que representa o componente
  return (
    // Div que contém o slider
    <div className="meio">
      
      <div id="slider1">
      
        {imagens.map((imagem, index) => (
          // Imagem que é exibida no slider
          <img
            // Chave única para cada imagem
            key={index}
            // Classe CSS para estilizar a imagem
            className="img"
            // URL da imagem
            src={imagem}
            // Texto alternativo para a imagem
            alt={`Imagem ${index + 1}`}
            // Estilo que esconde ou exibe a imagem com base no estado imagemAtual
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
        
      
      
      </div>
    </div>
  );
}

// Exporta o componente como padrão
export default SliderHomePage;