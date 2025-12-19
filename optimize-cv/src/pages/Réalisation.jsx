import "../styles/Réalisation.css";
import portfolio from "../styles/images/portfolio1.jpg";
import commentD from "../styles/images/commen-D.jpg";
import homespace from "../styles/images/homespace.jpg";
import Servicebg from "../styles/images/banner.jpg";
import artisan from "../styles/images/artisan.jpg";
import figurine from "../styles/images/figurine-fare.jpg";
import spacex from "../styles/images/spacex.jpeg";
import Api from "../styles/images/api.jpeg";

const Realisation = () => {
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
            <div className="card border réalisation-container__card rounded-top mb-4">
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
            <div className="card border réalisation-container__card rounded-top mb-4">
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
            <div className="card border réalisation-container__card rounded-top mb-4">
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
          {/* fourth Card  */}
          <div className="col-lg-4 col-md-6 last-child" id="home-space">
            <div className="card border réalisation-container__card rounded-top mb-4">
              <img
                src={artisan}
                className="card-img-top img-fluid rounded-top img-p"
                alt="HomeSpace"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">
                  Trouve Ton Artisan
                </h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site web pour <br /> trouver un artisan
                </p>
                <div className="button-container">
                  <a
                    href="https://desteurs-artisan-site.netlify.app/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted"> Site réalisé avec Angular</small>
              </div>
            </div>
          </div>
          {/* fifth Card  */}
          <div className="col-lg-4 col-md-6 last-child" id="home-space">
            <div className="card border réalisation-container__card rounded-top mb-4">
              <img
                src={figurine}
                className="card-img-top img-fluid rounded-top img-p"
                alt="HomeSpace"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">Petit Village</h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site web Figurine
                </p>
                <div className="button-container">
                  <a
                    href="https://petit-village.netlify.app/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted"> Site réalisé avec Angular</small>
              </div>
            </div>
          </div>
          {/* sixth Card  */}
          <div className="col-lg-4 col-md-6 last-child" id="home-space">
            <div className="card border réalisation-container__card rounded-top mb-4">
              <img
                src={spacex}
                className="card-img-top img-fluid rounded-top img-p"
                alt="HomeSpace"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">
                  Space X Launches
                </h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site d'information sur les lancements de
                  Space X
                </p>
                <div className="button-container">
                  <a
                    href="https://space-x-launchess.netlify.app/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted"> Site réalisé avec Vue.js</small>
              </div>
            </div>
          </div>
          {/* First Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border réalisation-container__card rounded-top mb-4">
              <img
                src={Api}
                className="card-img-top img-fluid rounded-top img-p"
                alt="Mon API"
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">
                  Creation d'une API
                </h5>
                <p className="card-text réalisation-text">
                  Réalisation d'un site personnel <br />
                  <span className="center-span">"API"</span>
                </p>
                <div className="button-container">
                  <a
                    href="https://port-russell-api-42po.onrender.com/"
                    className="btn btn-outline-primary btn-sm"
                  >
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Site réalisé avec avec Express et mongoDB
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisation;
