import "./footerSemFonte.css";

function FooterSemFonte() {
  return (
    <>
      <footer className="Footer">
        <div className="Bloco3">
          <div className="BlocoSobreNos">
        
            <div className="footer_social">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>

            <p>Nós somos o grupo 5</p>
          </div>

          <div className="BlocoReclamacoes">
            <p>Numero para reclamações: (19) 9891-24968 / 0800-9875</p>
            <p>Numero para feedbacks e dúvidas: (19) 9891-24968 / 0800-9875</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSemFonte;
