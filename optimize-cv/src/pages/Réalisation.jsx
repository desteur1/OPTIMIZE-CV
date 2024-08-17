import "../styles/Réalisation.css";
import portfolio from "../styles/images/portfolio1.jpg";
import commentD from "../styles/images/commen-D.jpg";
import homespace from "../styles/images/homespace.jpg";

import Servicebg from "../styles/images/banner.jpg";

const Réalisation = () => {
  return (
    <div className="réalisation-container">
      <img src={Servicebg} alt="service background" className="img-fluid" />
      <h1> Portfolio</h1>
      <p className="first-pp">Voici quelques-unes de mes réalisations.</p>
      <div className="service-container__line2"></div>
      <div className="container my-5 ">
        <div className="row">
          {/* First Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border réalisation-container__card">
              <img
                src={portfolio}
                className="card-img-top img-fluid rounded-top img-p"
                alt="Mon Porfolio"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">Mon Portfolio</h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site personnel <br />
                  <span className="center-span">"CV digital"</span>
                </p>
                <div className="button-container">
                  <a
                    href="https://desteur1.github.io/rethinked-porfolio/#contact"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec HTML/CSS/JAVASCRIPT
                </small>
              </div>
            </div>
          </div>

          {/* Middle Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border réalisation-container__card rounded-top">
              <img
                src={commentD}
                className="card-img-top img-fluid rounded-top img-p"
                alt="Commentaire Dynamique"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">
                  Commentaire dynamique
                </h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site web
                </p>
                <div className="button-container">
                  <a
                    href="https://desteur1.github.io/commentaire_dynamique/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec HTML/CSS/JAVASCRIPT
                </small>
              </div>
            </div>
          </div>

          {/* Third Card  */}
          <div className="col-lg-4 col-md-6 last-child" id="home-space">
            <div className="card border réalisation-container__card rounded-top">
              <img
                src={homespace}
                className="card-img-top img-fluid rounded-top img-p"
                alt="HomeSpace"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">My Home Space</h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site vitrine <br />{" "}
                  <span className="center-span">"Home-Space"</span>
                </p>
                <div className="button-container">
                  <a
                    href="https://desteur1.github.io/my-home-space/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {" "}
                  Site réalisé avec HTML/CSS
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Réalisation;
