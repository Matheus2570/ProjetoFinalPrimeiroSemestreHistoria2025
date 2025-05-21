import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import Guerra1 from '../assets/PrimeiraGuerra1.png';
import Guerra2 from '../assets/PrimeiraGuerra2.png';
import Guerra3 from '../assets/PrimeiraGuerra3.png';
import Guerra4 from '../assets/PrimeiraGuerra4.png';
import Footer from '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx';

function Pagina4() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);


  const imagens = [
    Guerra1,
    Guerra2,
    Guerra3,
    Guerra4
  ];
// Carregar curtidas do localStorage


  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem('PrimeiraGuerra');
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Primeira Guerra Mundial")}`
        );
        const resultado = await res.json();
        localStorage.setItem("PrimeiraGuerra", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Primeira Guerra Mundial</h2>
       <>
  <p><strong>(1914–1918)</strong></p>
 <p>
    A Revolução de 1930 é considerada o acontecimento da história do período republicano brasileiro que pôs fim à chamada República Velha e, mais do que isso, foi o acontecimento que também deu fim às articulações políticas entre as oligarquias regionais do Brasil, que sobrepunham os seus interesses particulares aos interesses do Estado e da Nação como um todo. O principal protagonista da Revolução de 1930 foi Getúlio Dorneles Vargas, então presidente (nome que se dava aos governadores da época) do estado do Rio Grande do Sul. Para melhor compreendermos esse episódio de nossa história, é necessário saber qual era o cenário político da época. É o que será exposto no tópico seguinte.
  </p>

  <h2>A formação da Aliança Liberal (AL) e as Eleições de 1930</h2>

  <p>
    O cenário político do biênio 1929-1930 foi um dos mais conturbados não só para o Brasil, mas também para boa parte do mundo, sobretudo em virtude das consequências da Grande Depressão Americana, provocada pelo “crash” da Bolsa de Nova York. A economia cafeeira paulista, que movimentava grande parte da economia brasileira à época, foi diretamente atingida por esses fatores externos. A oligarquia que comandava esse setor da economia também tinha o controle do poder político e buscava delinear um futuro de recondução à estabilidade econômica por meio da sucessão no cargo da presidência da República. Em 1929, o presidente era o paulista Washington Luís, que, contrariando os acordos da “política do café com leite”, indicou como seu sucessor outro político paulista, Júlio Prestes.
  </p>

  <p>
    Essa desavença entre as oligarquias de São Paulo e Minas foi acompanhada da organização de uma outra frente, formada por políticos de outros estados, como Rio Grande do Sul, Pernambuco, Paraíba e Rio de Janeiro. Essa frente ficou conhecida como Aliança Liberal, ou AL. O objetivo da AL era lançar candidatos à presidência e à vice-presidência que viabilizassem uma alternativa ao joguete oligárquico. Os candidatos em questão, para disputar as eleições de 1930, eram Getúlio Vargas, presidente do Rio Grande do Sul (para a presidência), e João Pessoa, presidente da Paraíba (para a vice-presidência).
  </p>

  <p>
    Apesar da grande popularidade que a Aliança Liberal chegou a atingir, a chapa de Vargas e Pessoa não conseguiu concorrer em pé de igualdade com a máquina eleitoreira dos paulistas. Washington Luís trabalhou firme para que Júlio Prestes fosse eleito. Isso implicava a mobilização de toda a estrutura de fraudes das urnas, coerções e compras de votos e busca de apoio de outros presidentes de estados – no total, 17 apoiaram Júlio Prestes. O resultado foi esmagador. Com a apuração dos votos, em 21 de maio de 1930, contou-se 1.091.709 votos a favor de Prestes contra 742.794 obtidos por Vargas.
  </p>

  <h2>Contexto Histórico</h2>

  <p>
    Até 1930 a política no Brasil era conduzida pelas oligarquias de Minas Gerais e São Paulo, por meio de eleições fraudulentas e que mantinham o país sob um regime econômico agroexportador.
  </p>

  <p>
    As elites paulista e mineira alternavam a presidência da República elegendo candidatos que defendiam seus interesses. Este sistema político ficou conhecido como "política do café com leite" ou política dos governadores.
  </p>

  <p>
    O modelo funcionou até os demais estados brasileiros crescerem em importância e reivindicarem mais espaço no cenário político brasileiro.
  </p>

  <p>
    Por outro lado, a Crise de 1929, atingiu a economia brasileira, provocando desemprego e dificuldades financeiras.
  </p>

  <p>
    O fato do Brasil ser um país de monocultura cafeeira fez que a crise fosse profunda, pois as exportações do produto caíram vertiginosamente. A crise econômica contribuiu para o clima de insatisfação popular com o governo de Washington Luís.
  </p>

  <p>
    Igualmente, havia o descontentamento de oficiais de baixa patente do exército, os quais desejavam derrubar as oligarquias e instaurar uma nova ordem no Brasil.
  </p>

  <p>
    Devemos lembrar que os tenentes já haviam mostrado seu desagrado com a situação política brasileira através de episódios como a Revolta do Forte de Copacabana ou na Revolta Paulista de 1924.
  </p>

  <h2>Governo Provisório de Vargas</h2>

  <p>
    Os aliados de Getúlio Vargas esperavam que o novo presidente convocasse eleições gerais para formar uma Assembleia Constituinte, mas o assunto era sempre adiado.
  </p>

  <p>
    Cansados de esperar, várias vozes começaram a criticar o governo provisório, como o partido comunista, a Aliança Nacional Libertadora, os paulistas, etc.
  </p>

  <p>
    Em São Paulo, cresce o movimento pedindo eleições presidenciais e uma Constituição. Diante da negativa do governo central e do aumento da repressão policial, o estado de São Paulo, declara guerra ao governo no episódio que será conhecido como a Revolução de 1932.
  </p>

  <h2>Revolução ou Golpe?</h2>

  <p>
    A Revolução de 1930 foi chamada desta maneira pelos seus membros. No entanto, trata-se de um golpe de estado e não uma revolução.
  </p>

  <p>
    Já o golpe de Estado, é a retirada do poder por meio da violência de um político constitucionalmente eleito ou consagrado para aquele cargo.
  </p>

  <p>
    Os acontecimentos de 30 foram uma luta pelo poder entre as elites, com margem de vitória a qualquer uma delas e que pouco mudariam a estrutura social brasileira em profundidade.
  </p>

  <h2>Curiosidades</h2>

  <ul>
    <li>Washington Luís só retornaria ao Brasil em 1947. Por sua vez, Júlio Prestes pediu asilo ao consulado britânico e voltaria em 1934.</li>
    <li>Três ex-ministros de Getúlio Vargas e três tenentes de 1930 chegaram à Presidência da República: Eurico Gaspar Dutra, João Goulart e Tancredo Neves (ministros); Castelo Branco, Emílio Médici e Ernesto Geisel (militares).</li>
    <li>Getúlio teve quase 100% dos votos no Rio Grande do Sul durante a eleição de 30.</li>
  </ul>

  <h2>Paz armada e corrida armamentista</h2>

  <p>
    Desde o final do século XIX o mundo vivia em tensão. O extraordinário crescimento industrial possibilitou a Corrida Armamentista, ou seja: a produção de armas numa quantidade jamais imaginada.
  </p>

  <p>
    Depois da partilha da África na Conferência de Berlim, em 1885, as rivalidades entre as nações imperialistas, a luta pelos mercados e o desejo de ganhar áreas de influência, acentuaram a corrida armamentista.
  </p>

  <p>
    Nesta época, o Império Alemão decidiu se transformar em potência naval, para complementar sua capacidade militar terrestre.
  </p>

  <p>
    O expansionismo do Império Alemão e seu rápido crescimento industrial geraram uma enorme desconfiança na Inglaterra, França e Rússia em relação aos alemães.
  </p>

  <p>
    A ferrovia passou a ser utilizada para auxiliar o Exército e faria a diferença em comparação com as guerras anteriores. O trem era capaz de se locomover dez vezes mais rápido que um cavalo e transportar maior quantidade de materiais e homens de uma só vez.
  </p>

  <p>
    Quanto ao Exército, já havia grande mobilização por parte das nações envolvidas. Mesmo em tempos de paz, a Alemanha possuía 880.000 homens, a Áustria-Hungria, 450.000 e a França, 739.000. Todos esses países aumentaram muito o número de soldados mobilizados com o início da guerra, passando da casa dos milhões.
  </p>

  <p>
    O mais surpreendente era o pequeno número de soldados do Reino Unido, com apenas 247.500 homens.
  </p>

  <p>
    O Império Russo possuía o maior número de efetivos, porém seu exército era o menos equipado e o mais atrasado tecnologicamente, se comparado aos outros europeus.
  </p>

  <p>
    No mar, os navios de guerra se aperfeiçoaram. Em 1906, o Reino Unido lança o navio de guerra “Dreadnought” que revolucionaria a Marinha.
  </p>

  <p>
    Estava equipado com 10 canhões de 305 mm, 27 canhões de 76 mm e 5 tubos de torpedo de 450 mm.
  </p>

  <h2>Nacionalismos</h2>

  <p>
    Outro aspecto importante da época foi o fortalecimento dos nacionalismos, que eram influenciados pelo Social Darwinismo. Essas teorias incentivavam a luta pelo espaço vital, ou seja, as nações deveriam se fortalecer para dominar as outras.
  </p>

  <p>
    Entre os países nacionalistas, podemos destacar a Alemanha, a França, a Rússia e a Itália.
  </p>

  <p>
    A Itália queria a “terra prometida” e a França queria recuperar a Alsácia-Lorena, territórios perdidos na guerra franco-prussiana.
  </p>

  <p>
    Os nacionalistas foram os maiores incentivadores da guerra.
  </p>

  <h2>O Alvorecer da Guerra</h2>

  <p>
    As tensões aumentaram com o assassinato do arquiduque Francisco Ferdinando, herdeiro do trono do Império Austro-Húngaro, no dia 28 de junho de 1914, em Sarajevo, na Bósnia, por um nacionalista sérvio chamado Gavrilo Princip.
  </p>

  <p>
    Esse assassinato foi o estopim da Primeira Guerra Mundial.
  </p>

  <p>
    Em julho de 1914, a Áustria-Hungria declarou guerra à Sérvia, iniciando o conflito.
  </p>

  <p>
    Outros países entraram na guerra por alianças e interesses próprios, o que rapidamente transformou o conflito em uma guerra mundial.
  </p>
</>

        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZfZAle8CVgg?si=hfriiKYwrORaF64q"
         title="YouTube video player"
          frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>

            </iframe>

       <iframe width="560" height="315" src="https://www.youtube.com/embed/0Cy2UIUsbus?si=o0FhVEU5AaI5aZVA" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
         allowfullscreen></iframe>
      </div>

      
      <Curtidas chaveLocalStorage="curtidaPrimeiraGuerra" />
           

      <Footer
        link1="https://brasilescola.uol.com.br/historiag/primeira-guerra.htm"
        nome1="Brasil Escola - Primeira Guerra Mundial"
        link2="https://www.todamateria.com.br/primeira-guerra-mundial/"
        nome2="Toda Matéria - Primeira Guerra Mundial"
        link3="https://mundoeducacao.uol.com.br/historiageral/primeira-guerra-mundial.htm"
        nome3="Mundo Educação - Primeira Guerra Mundial"
      />

    </div>
  );
}

export default Pagina4;
