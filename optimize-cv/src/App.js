import React from "react";

// import "./styles/Nav.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container p-0">
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand col-md-4 offset-1" href="/">
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
            <div className="navbar-nav col-md-8  offset-2 d-flex justify-content-evenly">
              <a className="nav-link active" aria-current="page" href="/">
                Acceuil
              </a>
              <a className="nav-link" href=":">
                Services
              </a>
              <a className="nav-link" href="/">
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

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
