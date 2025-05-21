import grupoImg from '../assets/grupo.jpeg';
import Footer from '../components/footerSemFonte';
import './sobreNos.css';

function Pagina8() {
    return (
        <div>
            <main>
                <section className="bloco-grupo">
                    <img src={grupoImg} alt="Foto do grupo" className="imagem-grupo" />
                    <div className="nomes-grupo">
                        <p className="texto-nomes">
                            Matheus de Carvalho<br />
                            Maria Clara Cardoso Gomes Freire<br />
                            Laura Marques<br />
                            Ana Clara Zamoner Dias<br />
                            Vitor Gabriel de Paula<br />
                            Valentina Marcela Martelli
                        </p>
                    </div>
                </section>

                <section className="bloco-descricao">
                    <p className="texto-descricao">
                        Nós somos o grupo 5, grupo montado no ano de 2024 para trabalharmos juntos nas aulas do curso.
                        Agora com 1 ano e 5 meses de curso desenvolvemos esse site para auxiliar outros alunos assim como nós!
                        O site tem 7 conteúdos relacionados à disciplina de história com um vídeo produzido por nós exemplificando 
                        e aprofundando mais no conteúdo da Guerra de Contestado! Aproveitem! ❤️
                    </p>
                </section>

                <Footer />
            </main>
        </div>
    );
}

export default Pagina8;
