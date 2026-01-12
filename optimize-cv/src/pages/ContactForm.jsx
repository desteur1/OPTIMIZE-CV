// ContactForm.js
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const ContactForm = () => {
  // stock les valeurs des champs du formulaire(chaque input est relié à une propriété de formData)
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

  //efface les messages de succès ou d'erreur après 4 secondes
  useEffect(() => {
    if (!successMessage && !errorMessage) return;

    const timer = setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  //met à jour formData lorsque l'utilisateur saisit des données dans les champs du formulaire(chaque frappe clavier , recupère l'id {email,name etc} et la valeur de l'input modifié)
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  //empêche le comportement par défaut du formulaire(l'actualisation de la page) et active l'état "envoi en cours..."
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log({
      service: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      user: process.env.REACT_APP_EMAILJS_USER_ID,
    });

    //utilise emailjs pour envoyer les données du formulaire
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Desteur",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      //si l'envoi est réussi, réinitialise le formulaire et affiche un message de succès
      .then(() => {
        // setIsSubmitting(false);
        setSuccessMessage("Message envoyé avec succès !");
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      //si l'envoi échoue, affiche un message d'erreur
      .catch((err) => {
        console.error("EmailJS error:", err);
        setErrorMessage("Echec de l'envoi du formulaire. Veuillez réessayer.");
        setSuccessMessage("");
      })
      //quel que soit le résultat, désactive l'état "envoi en cours..."
      .finally(() => {
        setIsSubmitting(false);
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
