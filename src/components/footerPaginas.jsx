import './footerPaginas.css';

function FooterPaginas() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <ul>
            <li>
            <h3> <b>Fontes Bibliograficas:</b></h3>
              <a href="https://brasilescola.uol.com.br/historiab/guerra-contestado.htm" target="_blank" rel="noreferrer">
                Brasil Escola
              </a>
            </li>
            <li>
              <a href="https://www.todamateria.com.br/guerra-do-contestado/" target="_blank" rel="noreferrer">
                Toda Matéria
              </a>
            </li>
            <li>
              <a href="https://mundoeducacao.uol.com.br/historiadobrasil/guerra-contestado-messianismo.htm" target="_blank" rel="noreferrer">
                Mundo Educação
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <strong>Email:</strong> contato@exemplo.com
          </div>
          <div className="contact-item">
            <strong>Telefone:</strong> (11) 99999-9999
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterPaginas;
