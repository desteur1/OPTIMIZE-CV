// ContactForm.js
import React, { useState } from "react";
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    //i tried accessing it with env but it is not working dunno why
    const serviceID = "service_dkhydd5";
    const templateID = "template_1w4ysm9";
    const userID = "NBdtV3uQCrULdbS_S";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitting(false);
        setSuccessMessage("Form submitted successfully!");
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
        setErrorMessage("Failed to submit the form. Please try again.");
        setSuccessMessage("");
      });
  };

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
