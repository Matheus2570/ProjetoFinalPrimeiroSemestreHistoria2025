import './footerPaginas.css';

function FooterPaginas({ link1, nome1, link2, nome2, link3, nome3 }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <ul>
            <li>
              <h3><b>Fontes Bibliográficas:</b></h3>
            </li>
            <li>
              <a href={link1} target="_blank" rel="noreferrer">{nome1}</a>
            </li>
            <li>
              <a href={link2} target="_blank" rel="noreferrer">{nome2}</a>
            </li>
            <li>
              <a href={link3} target="_blank" rel="noreferrer">{nome3}</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="contact-item">
            <strong>Email:</strong> tupi_leandro@gmail.com
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
