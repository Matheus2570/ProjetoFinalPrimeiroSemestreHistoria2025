import './sobreNos.css';
import grupoImg from '../assets/grupo.png';

function Pagina8() {
    return (
        <div>

      <main>
        <section className="grupo">
        <img src={grupoImg} alt="Foto do grupo" className='imgrupo'/>
          <div className="nomes">
            <p>
              Matheus de Carvalho<br />
              Maria Clara Cardoso Gomes Freire<br />
              Laura Marques<br />
              Ana Clara Zamoner Dias<br />
              Vitor Gabriel de Paula<br />
              Valentina Marcela Martelli
            </p>
          </div>
        </section>

        <section className="descricao">
          <p>
            Nós somos o grupo 5, grupo montado no ano de 2024 para trabalharmos juntos nas aulas do curso.
            Agora com 1 ano e 5 meses de curso desenvolvemos esse site para auxiliar outros alunos assim como nós!
            O site tem 7 conteúdos relacionados à disciplina de história com um vídeo produzido por nós exemplificando 
            e aprofundando mais no conteúdo da Guerra de Contestado! Aproveitem! ❤️
          </p>
        </section>
        <footer className="Footer">
        
       
        <div className="Bloco3">
          <div className="BlocoSobreNos">
            <p>
              <div class="footer_social">
                <a href="https://www.instagram.com" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </p>
            <p>Nós somos o grupo 5</p>
          </div>
          <div className="BlocoReclamacoes">
            <p>Numero para reclamações: 
            (19) 9891-24968/ 0800-9875 
            </p>
            <p>Numero para feedbacks e dúvidas:
            (19) 9891-24968/ 0800-9875 

            </p>
          </div>
        </div>
      </footer>
      </main>

      
    </div>
    );
  }
  
  export default Pagina8;
  