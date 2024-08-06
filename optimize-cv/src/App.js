import React from "react";

import "./styles/Nav.css";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Réalisation from "./pages/Réalisation";
import Services from "./pages/Services";
// Footer import
import twitter from "./styles/images/twitter-icon-2.png";
import linkedin from "./styles/images/linkedin-logo.png";
import github from "./styles/images/github-logo.png";
import "./styles/Footer.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
          <a className="navbar-brand col-md-3 text-center " href="/">
            Desteur Fall
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav col-md-4 offset-lg-5  w-100 grid gap-0 column-gap-4">
              <a className="nav-link active" aria-current="page" href="/">
                Acceuil
              </a>
              <a className="nav-link" href="/Services">
                Services
              </a>
              <a className="nav-link" href="/Réalisation">
                Réalisation
              </a>
              <a className="nav-link" href=":">
                Blog
              </a>
              <a className="nav-link" href="/">
                Me Contacter
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/Réalisation" element={<Réalisation />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>

      {/* footer */}
      <div className="container-fluid mt-5  text-center">
        <div className="row align-items-start pt-5 footer-container">
          <div className="col-lg-3 col-12 col-md-6  mb-md-4">
            <address>
              <p className="my-name">
                <strong>Desteur Fall</strong>
              </p>
              <p>
                09 rue des guyonne <br />
                78440 issou, France
              </p>
              <p>
                Téléphone: <a href="tel:+33751914122">0751914122</a>
              </p>
              <div className="media-container">
                <a
                  href="https://github.com/desteur1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="social-media"
                    src={github}
                    alt="Github logo"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/piepenche-fall-desteur-3715032ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="social-media"
                    src={linkedin}
                    alt="Linkedin logo"
                  />
                </a>
                <a
                  href="https://x.com/falldesteur"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="social-media"
                    src={twitter}
                    alt="Twitter logo"
                  />
                </a>
              </div>
            </address>
          </div>
          {/* second column */}
          <div className="col-lg-3 col-12 col-md-6 mb-md-4  mb-s-2">
            <p className="my-name link-item">
              <strong>Liens utiles</strong>
            </p>
            <ul className="custom-list">
              <li>
                <a href="#/">Acceuil</a>
              </li>
              <li>
                <a href="#/">À propos</a>
              </li>
              <li>
                <a href="#/">Services</a>
              </li>
              <li>
                <a href="#/">Me contacter</a>
              </li>
              <li>
                <a href="#/">Mentions légales</a>
              </li>
            </ul>
          </div>
          {/* third column */}
          <div className="col-lg-3 col-12 col-md-6  mb-md-4  mb-s-2">
            <p className="my-name link-item">
              <strong>Mes dernières réalisations</strong>
            </p>
            <ul className="custom-list">
              <li>
                <a href="#/">Home space</a>
              </li>
              <li>
                <a href="#/">Commentaire dynamique</a>
              </li>
              <li>
                <a href="#/">porfolio</a>
              </li>
            </ul>
          </div>
          {/* forth column */}
          <div className="col-lg-3 col-12 col-md-6 mb-md-4 mb-s-2">
            <p className="my-name link-item">
              <strong>Mes dernières articles</strong>
            </p>
            <ul className="custom-list">
              <li>
                <a href="#/">Home space</a>
              </li>
              <li>
                <a href="#/">Commentaire dynamique</a>
              </li>
              <li>
                <a href="#/">porfolio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
