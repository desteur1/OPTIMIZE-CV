import React, { useRef } from "react";
import "../styles/Home.css";
import herBg from "../styles/images/hero-bg.jpg";
import About from "./AboutMe";

const Home = () => {
  //creating a reference that starts with null, and will later be attached to the dom in this case the about component
  const aboutRef = useRef(null);
  //useRef returns an object with a current property. The current property will be set to the DOM element to which the ref is attached.
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      //Initially, aboutRef.current is null. After the About component is rendered, aboutRef.current will point to the actual DOM element of the About component.
    }
  };
  return (
    <div>
      <div className="home-container">
        <img
          className="hero-bg img-fluid"
          src={herBg}
          alt="presentation background"
        />
        <div className="text-container w-100">
          <h1 className="display-4">Bonjour, Je suis Piepenche Fall Desteur</h1>
          <h2>Développeur Fullstack</h2>
          <button
            type="button"
            className="btn btn-primary btn-sm px-3"
            onClick={scrollToAbout}
          >
            En savoir plus
          </button>
        </div>
      </div>
      {
        //The aboutRef is passed to the ref attribute of a DOM element (in this case, the div
        <div ref={aboutRef}>
          <About></About>
        </div>
      }{" "}
    </div>
  );
};

export default Home;
