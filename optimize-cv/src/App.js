import React from "react";
import "./styles/Nav.css";
import { Route, Routes, NavLink, Link } from "react-router-dom";

import Home from "./pages/Home";
import Réalisation from "./pages/Réalisation";
import Services from "./pages/Services";
// Footer import
import twitter from "./styles/images/twitter-icon-2.png";
import linkedin from "./styles/images/linkedin-logo.png";
import github from "./styles/images/github-logo.png";
import "./styles/Footer.css";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Mention from "./pages/Mention";
import Profile from "./pages/Profile";
import Copy from "./pages/Copyright";

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0" id="home-img">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
          <NavLink className="navbar-brand col-md-3 text-center " href="/">
            Desteur Fall
          </NavLink>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/Réalisation"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Réalisations
              </NavLink>
              <NavLink
                to="/Blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Me Contacter
              </NavLink>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Réalisation" element={<Réalisation />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Mention" element={<Mention />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>

      {/* footer */}
      <div className="container-fluid text-center footer">
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
                <Link to="Profile" target="_blank" rel="nofollow noreferrer">
                  {" "}
                  <img
                    className="social-media"
                    src={github}
                    alt="Github logo"
                  />
                </Link>
                <a
                  href="https://www.linkedin.com/in/piepenche-fall-desteur-3715032ab/"
                  target="_blank"
                  rel="nofollow noreferrer"
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
                  rel="nofollow noreferrer"
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
                <Link to="/#navbarNavAltMarkup">Accueil</Link>
              </li>
              <li>
                <Link to="/#about">À propos</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                <Link to="/Contact">Me contacter</Link>
              </li>
              <li>
                <Link to="/Mention">Mentions légales</Link>
              </li>
            </ul>
          </div>
          {/* third column */}
          <div className="col-lg-3 col-12 col-md-6  mb-md-4  mb-s-2">
            <p className="my-name link-item adjust-self">
              <strong>Mes dernièrs réalisations</strong>
            </p>
            <ul className="custom-list">
              <li>
                <Link to="/Réalisation/#home-space">Home space</Link>
              </li>
              <li>
                <Link to="/Réalisation/#home-space">Commentaire dynamique</Link>
              </li>
              <li>
                <Link to="/Réalisation/#home-space">porfolio</Link>
              </li>
            </ul>
          </div>
          {/* forth column */}
          <div className="col-lg-3 col-12 col-md-6 mb-md-4 mb-s-2">
            <p className="my-name link-item">
              <strong>Mes dernièrs articles</strong>
            </p>
            <ul className="custom-list">
              <li>
                <Link to="/Blog/#blog-article">Coder son site en HTML/CSS</Link>
              </li>
              <li>
                <Link to="/blog/#blog-article">
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link to="/blog/#blog-article">Se positionner sur Google</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copy></Copy>
    </div>
  );
}

export default App;
