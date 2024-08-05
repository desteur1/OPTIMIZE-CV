import Servicebg from "../styles/images/banner.jpg";
import Seo from "../styles/images/seo-bg.jpeg";
import WebBg from "../styles/images/web-bg.png";
import UX from "../styles/images/ux-bg.png";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <img src={Servicebg} alt="service baground" className="img-fluid" />
      <h1>Mon offres de Services</h1>
      <p className="first-p">
        voici les présentation sur lesquelles je peux intervenir
      </p>
      <div className="line-2"></div>
      <div className="card-group">
        <div className="card border border-3 rounded shadow m-3">
          <img src={UX} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">UX DESIGN</h5>
            <p className="card-text">
              L'<strong>UX Design</strong> est une méthode de conception centrée
              sur l'utilisateur.Son but est d'offrir une expérience de
              navigation optimale à l'internaute.
            </p>
          </div>
        </div>
        <div className="card border border-3 rounded shadow m-3">
          <img src={WebBg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">DÉVELEPPEMENT WEB</h5>
            <p className="card-text">
              le <strong>dévlopement de sites web</strong>repose sur
              l'utilisation des langages HTML,CSS,JavaScripte
            </p>
          </div>
        </div>
        <div className="card border border-3 rounded shadow m-3">
          <img src={Seo} className="card-img-top last-child" alt="me" />
          <div className="card-body">
            <h5 className="card-title">RÉFÉRENCEMENT</h5>
            <p className="card-text">
              le <strong>référencement naturel d'un site,</strong> aussi appelé
              SEO, consiste à mettre des techniques en ouvre pour améliorer sa
              position dans les résultats des moteurs de recherche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
