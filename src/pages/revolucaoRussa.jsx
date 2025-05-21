import { useEffect, useState } from 'react';
import SliderHome from '../components/sliderPaginas';
import './cssPaginasGlobais.css';
import RevRussa1 from '../assets/revolucaorussa1.png';
import RevRussa2 from '../assets/revolucaorussa2.png';
import RevRussa3 from '../assets/revolucaorussa3.png';
import RevRussa4 from '../assets/revolucaorussa4.png';
import RevRussa5 from '../assets/revolucaorussa5.png';
import RevRussa6 from '../assets/revolucaorussa6.png';
import Footer from  '../components/footerPaginas.jsx';
import Curtidas from '../components/botaoCurtir.jsx';

function Pagina4() {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(true);


  const imagens = [
    RevRussa1,
    RevRussa2,
    RevRussa3,
    RevRussa4,
    RevRussa5,
    RevRussa6
  ];
 
  useEffect(() => {
    const buscarDado = async () => {
      try {
        const dadoLocal = localStorage.getItem("revolucaoRussa");
        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent("Revolução Russa")}`
        );
        const resultado = await res.json();
        localStorage.setItem("revolucaoRussa", JSON.stringify(resultado));
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
          <h2>Resumo pessoal – Guerra do Contestado</h2>
          <p>
          A Rússia era um grande império governado por um imperador chamado czar, que detinha poder absoluto sobre tudo. Apesar de ser uma potência territorial, o Império Russo era muito pobre em comparação com outras nações. Enquanto alguns membros do governo e da nobreza viviam com muito luxo, a maior parte da população vivia em extrema pobreza. </p>
          <p>
          A ideia do comunismo foi se desenvolvendo ao longo do tempo, tendo como principais pensadores Karl Marx e Friedrich Engels. Eles idealizavam uma sociedade igualitária, sem classes sociais, onde o povo estaria tão evoluído que o Estado não seria mais necessário. Para que isso acontecesse, seria necessário passar pelo socialismo. Essas ideias foram muito bem aceitas pela população russa, que vivia em condições muito precárias. 
</p>
<p> Com isso, foi fundado o Partido Operário Social-Democrata Russo, liderado por Vladimir Lenin. O partido foi declarado ilegal, e Lenin foi para a Europa estudar mais sobre o marxismo. Mais tarde, o partido se dividiu em duas vertentes: 
</p>
<h4>Bolcheviques: </h4>
<ul>
  <li>Defendiam uma revolução armada (guerra de classes);</li>
  <li>Eram mais radicais;</li>
  <li>Defendiam a ditadura do proletariado;</li>
  <li>Buscavam uma solução mais rápida para os problemas sociais.</li>
</ul>
<h4>Mencheviques: </h4>
<ul>
  <li>Eram menos radicais;</li>
  <li>Queriam desenvolver melhor o capitalismo antes de grandes mudanças;</li>
  <li>Acreditavam em uma transição mais lenta.</li>
</ul>

 <p>Em 1904, iniciou-se a Guerra Russo-Japonesa. Ao fim, foi assinado um tratado de paz, mas a derrota foi humilhante para o poderoso Império Russo. Em 1905, milhares de pessoas marcharam até o Palácio de Inverno em São Petersburgo, a capital do império, para entregar uma petição ao czar. No entanto, a guarda imperial abriu fogo contra os manifestantes, matando centenas de pessoas. Esse evento ficou conhecido como Domingo Sangrento e aumentou a revolta popular. Muitos acreditavam que o czar havia ordenado o massacre, mesmo que outros dissessem que ele nem estava no palácio. </p>
<p> Esse episódio foi o estopim para a Revolução de 1905, considerada por muitos como um "ensaio" para a Revolução de 1917. Para amenizar a situação, o czar criou a Duma, e o país se tornou, teoricamente, uma monarquia constitucional. No entanto, a Duma tinha pouca autonomia, pois o czar ainda concentrava grande parte do poder. A partir disso, partidos passaram a ser permitidos. </p>
<p>Surgiu então o Soviete de São Petersburgo, um conselho de operários que passou a organizar diversas manifestações pelo país. Lenin retornou à Rússia e intensificou as ações do partido, incluindo assaltos e roubos a bancos, com a ajuda de Joseph Stalin. Como consequência, alguns revolucionários foram presos, e outros, como Lenin, tiveram de fugir novamente do país. 
</p>
<p>A capital, São Petersburgo, foi renomeada para Petrogrado, em um esforço de dar um nome mais russo à cidade. O czar decidiu entrar na Primeira Guerra Mundial, o que agravou ainda mais a crise interna. Milhares de soldados russos morreram e a vida no país se tornou insustentável. Em 1915, Nicolau II decidiu comandar pessoalmente o exército e deixou o governo nas mãos de sua esposa, a czarina Alexandra. Isso gerou desconfiança, pois ela era alemã, e muitos acreditavam que era influenciada por Grigori Rasputin, um místico tido como má influência para a família imperial. Rasputin foi assassinado em 1916. 
</p>
<p>Em 1917, uma nova onda de manifestações explodiu. A guarda imperial foi chamada, mas no fim se juntou ao povo. Em março de 1917 (8 de março no calendário gregoriano), ocorreu a Revolução de Fevereiro, que marcou o fim da monarquia na Rússia. Nicolau II foi forçado a abdicar, e dois poderes surgiram: Governo Provisório: liderado pelos deputados da Duma;  Soviete de Petrogrado: conselho dos operários e soldados. 
</p>
<p>Embora o Governo Provisório estivesse formalmente no poder, quem tinha real apoio popular e do exército eram os soviéticos. O grande erro do governo provisório foi manter a Rússia na guerra, o que desagradou ainda mais a população. 
</p>
<p>Nesse período, Lenin com o apoio do governo alemão, voltou à Rússia com o objetivo de desestabilizar ainda mais o país. Ele proferia discursos com promessas de “Paz, Pão e Terra”, que conquistou a simpatia popular. 
</p>
<p>Entre fevereiro e outubro, houve diversas manifestações e conflitos, como a tentativa de golpe de Lavr Kornilov que falhou. Lenin teve que fugir para a Finlândia, e Trotski foi preso, mas ambos retornaram. 
</p>
<p>Com a volta de Lenin e Trotski, os bolcheviques ganharam força e, em outubro de 1917, derrubaram o Governo Provisório. Os bolcheviques assumiram o poder e se tornaram o Partido Comunista. As primeiras medidas de Lenin incluíram a divisão de terras, o fim da propriedade privada e a estatização da economia. Mesmo perdendo as eleições, os bolcheviques se mantiveram no poder e reprimiram duramente qualquer oposição com a Guarda Vermelha. 
</p>
<p>Assinaram o Tratado de Brest-Litovski, que tirou a Rússia da Primeira Guerra Mundial, mas resultou na perda de vastos territórios. Apesar disso, o povo comemorou o fim da guerra. 
</p>
<p>Logo após, iniciou-se a Guerra Civil Russa (1918–1923), entre o exército Branco: contra os bolcheviques, apoiado por EUA, França, Japão e outros países; Exército Vermelho: comandado pelos bolcheviques; Verdes: camponeses que não apoiavam nenhum dos lados, só queriam paz; Negros: anarquistas, que mais tarde se juntariam aos vermelhos. 
</p>
<p>Para impedir o resgate do czar, os bolcheviques assassinaram brutalmente Nicolau II, sua esposa e seus cinco filhos. O Exército Branco cometeu muitas atrocidades, o que fez o povo se alinhar mais aos vermelhos. Porém, o Terror Vermelho também causou inúmeras mortes. 
</p>
<p>Com o fim da Primeira Guerra, os bolcheviques tentaram expandir a revolução pela Europa, mas foram barrados pelos poloneses ao tentar invadir Varsóvia. A Ucrânia, no entanto, foi transformada em um estado fantoche. 
</p>
<p>Perto do fim da guerra, foi implantada a NEP (Nova Política Econômica), que incluía a liberdade de comércio interno; Liberdade de salário aos trabalhadores; Autorização para empresas privadas; Entrada de capitais estrangeiros. 
</p>
<p>Essas medidas contrariavam o comunismo, mas eram necessárias para reconstruir o país. Em 1922, foi criada a União das Repúblicas Socialistas Soviéticas (URSS). A guerra civil terminou em 1923 com a vitória dos bolcheviques, sendo uma das mais sangrentas da história. 
</p>
<p>Com a morte de Lenin em 1924, iniciou-se uma disputa entre Trótski e Stalin pelo poder. Stalin venceu e Trótski fugiu para o México, onde foi assassinado em 1940 a mando de Stalin. 
</p>
<h3>Era Stalin </h3>
<p>Stalin promoveu avanços importantes, como a redução do analfabetismo, ampliação dos direitos das mulheres e o desenvolvimento industrial da URSS, a transformando em uma superpotência e uma das principais forças na derrota da Alemanha nazista. </p>
<p>Por outro lado, cometeu inúmeras atrocidades, como: Holodomor (ou Holocausto Ucraniano): confiscou os alimentos da Ucrânia e proibiu a entrada de ajuda, causando fome em massa (entre 2,5 e 12 milhões de mortos); Grande Expurgo: eliminou opositores dentro do partido e da população; Campos Gulag: campos de trabalho forçado, onde milhares morreram por fome ou exaustão. Os campos cresceram durante seu governo e só foram reduzidos após sua morte em 1953. </p>
       
        </div>

        <SliderHome imagens={imagens} />
      </div>

      {/* Bloco com os dois vídeos */}
      <div className="video-section">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YHNd8-Tha-E?si=cBJPLmvN7ngCPami" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/3-0ZcoHFtXY?si=fgCDxA_e2DkK9Ch0&amp;controls=0&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      
        <Curtidas chaveLocalStorage="curtidaRevolucaoRussa" />

      <Footer
  link1="https://youtu.be/r_1xj0Pyi-8?feature=shared"
  nome1="Youtube- A Revolução Russa e Suas Consequências"
  link2="https://brasilescola.uol.com.br/historiag/revolucao-russa.htm"
  nome2="Brasil Escola - Revolução Russa"
  link3="https://www.todamateria.com.br/revolucao-russa/"
  nome3="Toda Matéria - Revolução Russa"
/>

    </div>
  );
}

export default Pagina4;
