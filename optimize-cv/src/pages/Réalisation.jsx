import "../styles/Réalisation.css";
import portfolio from "../styles/images/portfolio1.jpg";
import commentD from "../styles/images/commen-D.jpg";
import homespace from "../styles/images/homespace.jpg";

import Servicebg from "../styles/images/banner.jpg";

const Réalisation = () => {
  return (
    <div className="réalisation-container">
      <img src={Servicebg} alt="service background" className="img-fluid" />
      <h1>Mon Portfolio</h1>
      <p className="first-p">Voici quelques-unes de mes réalisations.</p>
      <div className="service-container__line2"></div>
      <div className="container my-5">
        <div className="row">
          {/* First Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border réalisation-container__card">
              <img
                src={portfolio}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">Card title</h5>
                <p className="card-text réalisation-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div className="button-container">
                  <a href="/" className="btn btn-outline-primary btn-sm">
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          {/* Middle Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border réalisation-container__card rounded-top">
              <img
                src={commentD}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">Card title</h5>
                <p className="card-text réalisation-text">
                  This card has supporting text below as a natural.
                </p>
                <div className="button-container">
                  <a href="/" className="btn btn-outline-primary btn-sm">
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          {/* Third Card  */}
          <div className="col-lg-4 col-md-6 last-child">
            <div className="card border réalisation-container__card rounded-top">
              <img
                src={homespace}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body réalisation-body">
                <h5 className="card-title réalisation-title">Card title</h5>
                <p className="card-text réalisation-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional.
                </p>
                <div className="button-container">
                  <a href="/" className="btn btn-outline-primary btn-sm">
                    voir
                  </a>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Réalisation;
