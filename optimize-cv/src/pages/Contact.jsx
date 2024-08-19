// import ContactBg from "../styles/images/contact-bg.jpg";
import ContactForm from "./ContactForm";
import "../styles/Contact.css";
import MapComponent from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="modal-background">
      {/* <img className="img-fluid" src={ContactBg} alt="" /> */}
      <div className="contact-content">
        <h1 className="contact-title">
          <span className="contact-title-span">Me</span> contacter
        </h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future{" "}
          <span className="contact-content-span">
            collaboration, merci de remplir le fomulaire de contact.
          </span>
        </p>
        <div className="contact-container__line2"></div>
        <div className="con-form">
          <ContactForm></ContactForm>
          <div className="google-map">
            <h2 className="con-h2">Mes coordonnées</h2>
            <div className="form-line"></div>
            <div className="map-adress-item">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                <span>
                  <a
                    href="https://www.google.fr/maps/place/9+Rue+des+Guyonnes,+78440+Issou/@48.989904,1.7970501,17z/data=!3m1!4b1!4m6!3m5!1s0x47e694fed3a87507:0xacb3a654104b3066!8m2!3d48.9899005!4d1.799625!16s%2Fg%2F11j32tz2v6?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    09 Rue Des Guyonnes 78440 Issou,
                    <br />
                    France
                  </a>
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faMobileScreenButton} />{" "}
                <span>
                  <a className="color-blue" href="tel:+33751914122">
                    6751914122
                  </a>
                </span>
              </div>
            </div>

            <MapComponent></MapComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
