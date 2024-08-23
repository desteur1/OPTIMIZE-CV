// ContactForm.js
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isServiceAvailable, setisServiceAvailable] = useState(null);

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  useEffect(() => {
    const checkEmailJsAvailable = async () => {
      try {
        await emailjs.send(serviceID, templateID, {}, userID); //The code is checking if the EmailJS service is available by attempting to send a "test" email with no content.
        //templateParams(the empty braket) Is Required: Even if you don’t have dynamic data to pass, you must include an empty object ({}) as the templateParams to fulfill the function’s requirements.
        setisServiceAvailable(true);
      } catch (error) {
        setisServiceAvailable(false);
        setErrorMessage("Service indisponible.Veillez réessayer plus tard.");
      }
    };
    checkEmailJsAvailable();
  }, [serviceID, templateID, userID]); //you’re telling React Re-run this useEffect every time one of these variables (serviceID, templateID, userID) changes.

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitting(false);
        setSuccessMessage("Formulaire soumis avec succès !");
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setIsSubmitting(false);
        setErrorMessage("Echec de l'envoi du formulaire. Veuillez réessayer.");
        setSuccessMessage("");
      });
  };
  if (isServiceAvailable === null) {
    return <p>Vérification de la disponibilité du service...</p>;
  }

  return (
    <form className="form" name="form" onSubmit={handleSubmit}>
      <h2 className="con-h2">Formulaire de contact</h2>
      <div className="form-line"></div>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        placeholder="Votre nom"
        autoComplete="name"
        required
        value={formData.name}
        onChange={handleChange}
        disabled={!isServiceAvailable}
      />

      <label htmlFor="email"></label>
      <input
        type="text"
        id="email"
        placeholder="Votre adresse email"
        autoComplete="email"
        required
        value={formData.email}
        onChange={handleChange}
        disabled={!isServiceAvailable}
      />

      <label htmlFor="phone"></label>
      <input
        type="tel"
        id="phone"
        placeholder="Votre numéro de téléphone"
        autoComplete="tel"
        required
        value={formData.phone}
        onChange={handleChange}
        disabled={!isServiceAvailable}
      />

      <label htmlFor="subject"></label>
      <input
        type="text"
        id="subject"
        placeholder="Sujet"
        autoComplete="off"
        required
        value={formData.subject}
        onChange={handleChange}
        disabled={!isServiceAvailable}
      />

      <label htmlFor="message"></label>
      <textarea
        name="message"
        id="message"
        rows="8"
        placeholder="Votre message"
        autoComplete="off"
        required
        value={formData.message}
        onChange={handleChange}
        disabled={!isServiceAvailable}
      ></textarea>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
