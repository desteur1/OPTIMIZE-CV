import React from "react";
import "../styles/Home.css";
import herBg from "../styles/images/hero-bg.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <img
        className="hero-bg img-fluid"
        src={herBg}
        alt="presentation background"
      />
      <div className="text-container w-100">
        <h1 className="display-4">Bonjour, Je suis Piepenche Fall Desteur</h1>
        <h2>Développeur Fullstack</h2>
        <button type="button" className="btn btn-primary btn-sm">
          En savoir plus!
        </button>
      </div>
    </div>
  );
};

export default Home;
