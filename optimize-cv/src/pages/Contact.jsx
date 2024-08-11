// import ContactBg from "../styles/images/contact-bg.jpg";
import "../styles/Contact.css";
import MapComponent from "./Map";

const Contact = () => {
  return (
    <div className="modal-background">
      {/* <img className="img-fluid" src={ContactBg} alt="" /> */}
      <div className="contact-content">
        <h1>Me contacter</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future
          collaboration,merci de remplie le fomulaire de contact
        </p>
        <div className="service-container__line2"></div>
        <div className="con-form">
          <div className="form-group">
            <form name="form">
              <h2 className="con-h2">formulaire de contact</h2>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                autoComplete="name"
              />

              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                placeholder="Votre adresse email"
                autoComplete="email"
              />

              <label htmlFor="phone"></label>
              <input
                type="tel"
                id="phone"
                placeholder="Votre numéro de téléphone"
                autoComplete="tel"
              />

              <label htmlFor="object"></label>
              <input
                type="text"
                id="object"
                placeholder="sujet"
                autoComplete="off"
              />

              <label htmlFor="message"></label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Votre message"
                autoComplete="off"
              ></textarea>

              <button type="submit">Evoyer</button>
            </form>
          </div>
          <div className="google-map">
            <h2 className="con-h2">Mes coordonnées</h2>
            <MapComponent></MapComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
