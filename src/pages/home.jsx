import "./home.css";
import Footer from '../components/footerSemFonte'
import imgCan1 from '../assets/imagemCan1.jpg'
import imgCan2 from '../assets/imagemCan2.jpg'
import imgCan3 from '../assets/imagemCan3.jpg'
import SliderHome from '../components/sliderHomePage';
function Home() {
  const imagens = [
      imgCan1,
      imgCan2,
     imgCan3
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

