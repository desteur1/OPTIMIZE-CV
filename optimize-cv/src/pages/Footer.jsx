import twitter from "../styles/images/twitter-icon-2.png";
import linkedin from "../styles/images/linkedin-logo.png";
import github from "../styles/images/github-logo.png";
import "../styles/Footer.css";

const Footer = () => {
  // first column
  return (
    <div className="container-fluid mt-5  text-center">
      <div className="row align-items-start pt-5 footer-container">
        <div className="col-lg-3 col-12 col-md-6 ">
          <address>
            <p className="my-name">
              <strong>Desteur Fall</strong>
            </p>
            <p>
              09 rue des guyonne <br />
              78440 issou, France
            </p>
            <p>
              Téléphone: <a href="tel:+33751914122">0751914122</a>
            </p>
            <div className="media-container">
              <a
                href="https://github.com/desteur1"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img className="social-media" src={github} alt="Github logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/piepenche-fall-desteur-3715032ab/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="social-media"
                  src={linkedin}
                  alt="Linkedin logo"
                />
              </a>
              <a
                href="https://x.com/falldesteur"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  className="social-media"
                  src={twitter}
                  alt="Twitter logo"
                />
              </a>
            </div>
          </address>
        </div>
        {/* second column */}
        <div className="col-lg-3 col-12 col-md-6 ">
          <p className="my-name link-item">
            <strong>Liens utiles</strong>
          </p>
          <ul className="custom-list">
            <li>
              <a href="#/">Acceuil</a>
            </li>
            <li>
              <a href="#/">À propos</a>
            </li>
            <li>
              <a href="#/">Services</a>
            </li>
            <li>
              <a href="#/">Me contacter</a>
            </li>
            <li>
              <a href="#/">Mentions légales</a>
            </li>
          </ul>
        </div>
        {/* third column */}
        <div className="col-lg-3 col-12 col-md-6 ">
          <p className="my-name link-item">
            <strong>Mes dernières réalisations</strong>
          </p>
          <ul className="custom-list">
            <li>
              <a href="#/">Home space</a>
            </li>
            <li>
              <a href="#/">Commentaire dynamique</a>
            </li>
            <li>
              <a href="#/">porfolio</a>
            </li>
          </ul>
        </div>
        {/* forth column */}
        <div className="col-lg-3 col-12 col-md-6 ">
          <p className="my-name link-item">
            <strong>Mes dernières articles</strong>
          </p>
          <ul className="custom-list">
            <li>
              <a href="#/">Home space</a>
            </li>
            <li>
              <a href="#/">Commentaire dynamique</a>
            </li>
            <li>
              <a href="#/">porfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
