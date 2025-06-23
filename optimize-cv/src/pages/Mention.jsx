import "../styles/Mention.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreenButton,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
const Mention = () => {
  return (
    <div className="mention-container">
      <h1 className="mention-title">MENTION LÉGALES</h1>
      <div className="service-container__line2 mention-line"></div>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>Desteur Fall</h3>
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />{" "}
                  <span>
                    <a
                      href="https://www.google.fr/maps/place/9+Rue+des+Guyonnes,+78440+Issou/@48.989904,1.7970501,17z/data=!3m1!4b1!4m6!3m5!1s0x47e694fed3a87507:0xacb3a654104b3066!8m2!3d48.9899005!4d1.799625!16s%2Fg%2F11j32tz2v6?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      09 Rue Des Guyonnes <br />
                      78440 Issou,France
                    </a>
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
                  <span>
                    <a className="color-blue" href="tel:+33659033829">
                      659033829
                    </a>
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <span>
                    <a
                      className="color-blue"
                      href="mailto:desteurfall@gmail.com"
                    >
                      desteurfall@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>Always data</h3>
                <div className="pb-3">
                  <a
                    href="https://www.google.fr/maps/place/91+Rue+du+Faubourg+Saint-Honor%C3%A9,+75008+Paris/@48.8696733,2.3144526,15.27z/data=!4m6!3m5!1s0x47e66fcf4c694ca9:0xd23a8f4eafdf2d3a!8m2!3d48.8718755!4d2.313111!16s%2Fg%2F11c28bh0vk?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    91 Rue du Faubourg Saint-Honoré <br /> 75008 Paris
                  </a>
                </div>
                <div>
                  <FontAwesomeIcon icon={faGlobe} />{" "}
                  <a
                    className="color-blue"
                    href="https://www.alwaysdata.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.alwaysdata.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>Crédits</h3>
                <p>Site développé par Desteur Fall, étudiant du CEF.</p>
                <p>
                  Les images libres de droit sont issues du site{" "}
                  <span>
                    <a
                      className="color-blue"
                      href="https://pixabay.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>
                    .
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mention;
