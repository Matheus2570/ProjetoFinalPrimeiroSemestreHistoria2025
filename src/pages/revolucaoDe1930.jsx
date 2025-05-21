import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Revolucao1 from '../assets/Revolucao1930(1).png';
import Revolucao2 from '../assets/Revolucao1930(2).png';
import Revolucao3 from '../assets/Revolucao1930(3).png';
import Revolucao4 from '../assets/Revolucao1930(4).png';
import Footer from '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx';


function Pagina8() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);


  const imagens = [
    Revolucao1,
    Revolucao2,
    Revolucao3,
    Revolucao4
  ];
  // Carregar curtidas do localStorage



  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem('Revolucao1930');
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Revolução de 1930")}`
        );
        const resultado = await res.json();
        localStorage.setItem("Revolucao1930", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Revolução de 1930</h2>
         <>
  <p><strong>(1930)</strong></p>

   <p>
        A Revolução de 1930 foi um movimento político-militar que representou a ruptura da chamada República Velha no Brasil, pondo fim à política do café com leite, baseada na alternância de poder entre São Paulo e Minas Gerais, e promovendo a ascensão de Getúlio Vargas ao poder. O contexto da revolução está inserido nas profundas transformações econômicas, sociais e políticas do país, agravadas pela crise econômica mundial de 1929, que afetou severamente as exportações brasileiras e a economia do café.
      </p>
      <p>
        A eleição presidencial de 1930 foi marcada pela vitória de Júlio Prestes, candidato da situação, que foi contestada pela oposição, principalmente por Getúlio Vargas, governador do Rio Grande do Sul e líder da Aliança Liberal. O assassinato do candidato a vice-presidente da oposição, João Pessoa, serviu como estopim para a revolta. Diversos estados, insatisfeitos com o domínio paulista e com as condições econômicas do país, aderiram ao movimento revolucionário, que contou com o apoio decisivo dos militares.
      </p>
      <p>
        A revolução culminou na deposição do presidente Washington Luís e na posse de Getúlio Vargas como presidente provisório, iniciando uma nova era política. Vargas implementou uma série de reformas voltadas para a modernização econômica e social, centralizando o poder e promovendo maior intervenção do Estado na economia, além de incentivar a industrialização. Seu governo ficou marcado pela implantação de políticas trabalhistas, criação de leis sociais e pela formação do Estado Novo em 1937, um regime autoritário que duraria até 1945.
      </p>
      <p>
        A Revolução de 1930 significou uma mudança profunda na estrutura política do Brasil, rompendo com os velhos oligopólios rurais e dando início a uma fase de modernização do país, que buscava integrar as diferentes regiões nacionais e enfrentar os desafios da industrialização e urbanização, configurando-se como um marco importante na história brasileira.
      </p>
</>

        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jQU6Ojetq8M?si=NblW6mIrHIDwrJgB"
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>

            </iframe>

       <iframe
       src="https://www.youtube.com/embed/z6SqhhdoCbc?si=x98T4I_YV-7arwhS" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen></iframe>
      </div>

      <Curtidas chaveLocalStorage="curtidaRevolucao1930" />

      <Footer
        link1="https://mundoeducacao.uol.com.br/historiadobrasil/revolucao-1930.htm#:~:text=1930.%5B1%5D-,A%20Revolu%C3%A7%C3%A3o%20de%201930%20foi%20um%20movimento%20armado%2C%20liderado%20pelo,ga%C3%BAcho%20como%20l%C3%ADder%20de%20Estado."
        nome1="Mundo Educação - Revolução de 1930"
        link2="https://www.todamateria.com.br/revolucao-de-1930/"
        nome2="Toda Matéria - Revolução de 1930"
        link3="https://brasilescola.uol.com.br/o-que-e/historia/o-que-foi-revolucao-1930.htm"
      nome3="Brasil Escola - Revolução de 1930"
      />

    </div>
  );
}

export default Pagina8;
