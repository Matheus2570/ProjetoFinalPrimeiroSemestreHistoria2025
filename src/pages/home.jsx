import "./home.css";
import Footer from '../components/footerSemFonte'
import Canudos1 from '../assets/imagemCan2.jpg'
import Canudos2 from '../assets/imagemCan3.jpg'
import Contestado1 from '../assets/GuerraContestado2.jpg'
import Contestado2 from '../assets/GuerraContestado4.jpg'
import PrimeiraGuerra1 from '../assets/PrimeiraGuerra1.png'
import PrimeiraGuerra2 from '../assets/PrimeiraGuerra2.png'
import RevolucaoRussa1 from '../assets/revolucaorussa1.png'
import RevolucaoRussa2 from '../assets/revolucaorussa4.png'
import FascismoItaliano1 from '../assets/FascismoItaliano.jpg'
import FascismoItaliano2 from '../assets/Fascismoitalianoo.png'
import CriseDe19291 from '../assets/criseDe2929_2.jpg'
import CriseDe19292 from '../assets/criseDe1929_3.jpg'
import RevolucaoDe1930 from '../assets/Revolucao1930(4).png'
import RevolucaoDe19302 from '../assets/Revolucao1930(2).png'

import SliderHome from '../components/SliderHomePage';
function Home() {
  const imagens = [
     Canudos1,
Canudos2,
Contestado1,
Contestado2,
PrimeiraGuerra1,
PrimeiraGuerra2,
RevolucaoRussa1, 
RevolucaoRussa2,
FascismoItaliano1,
FascismoItaliano2,
CriseDe19291,
CriseDe19292, 
RevolucaoDe1930,
RevolucaoDe19302,
    ];
  return (
    <div>
      <center>
       <SliderHome imagens={imagens} />
       </center>
    <center>
    <div className="container">
      <p className="blocosp1"> Página produzida por estudantes do Senai, em especifico o grupo 5, com objetivo de ajudar outros estudantes com resumos da disciplina história! 📚 </p>
    <p className="blocosp2">Para acessar os conteúdos basta clicar no simbolo de Menu no topo da página no lado direito. 📖</p>
    <p className="blocosp3">Em todas as páginas existe um botão "Gostei", o qual você pode acionar e após seus estudos conferir na última página o ranking dos conteúdos que a galera mais gostou! 🎉✨</p>
    <p className="recadinho"> Bons estudos!! <br></br>
Você consegue <br></br>😎🤙🏽 </p>
    </div>
    </center>
    

<Footer/>
</div>
  );
}

export default Home;

