import Servicebg from "../styles/images/banner.jpg";
import Seo from "../styles/images/seo-bg.jpeg";
import WebBg from "../styles/images/web-bg.png";
import UX from "../styles/images/ux-bg.png";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="service-container">
      <img src={Servicebg} alt="service background" className="img-fluid" />
      <h1>Mon offres de Services</h1>
      <p className="first-p">
        voici les présentation sur lesquelles je peux intervenir
      </p>
      <div className="service-container__line2"></div>
      <div className="card-group service-container__group">
        {/* first column */}
        <div className="card  border border-3 rounded shadow m-3 service-container__card">
          <img src={UX} className="card-img-top img-S" alt="UX Design" />
          <div className="card-body">
            <h5 className="card-title">UX DESIGN</h5>
            <p className="card-text">
              L'<strong>UX Design</strong> est une méthode de conception centrée
              sur l'utilisateur.Son but est d'offrir une expérience de
              navigation optimale à l'internaute.
            </p>
          </div>
        </div>
        {/* second column */}
        <div className="card  border border-3 rounded shadow m-3 service-container__card">
          <img
            src={WebBg}
            className="card-img-top img-S"
            alt="Web development"
          />
          <div className="card-body">
            <h5 className="card-title">DÉVELEPPEMENT WEB</h5>
            <p className="card-text">
              le <strong>dévlopement de sites web</strong>repose sur
              l'utilisation des langages HTML,CSS,JavaScripte
            </p>
          </div>
        </div>
        {/* Third comumn */}
        <div className="card border border-3 rounded shadow m-3 service-container__card ">
          <img src={Seo} className="card-img-top  img-S" alt="Seo" />
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
