import React from "react";
import "./Nav.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand col-md-4" href="#">
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav col-md-8">
              <a className="nav-link active" aria-current="page" href="#">
                Acceuil
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Réalisation
              </a>
              <a className="nav-link" href="#">
                Blog
              </a>
              <a className="nav-link" href="#">
                Me Contacter
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
