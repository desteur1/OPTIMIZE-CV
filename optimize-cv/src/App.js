import React from "react";

// import "./styles/Nav.css";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Footer from "./pages/Footer";

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
            <div className="navbar-nav col-md-4 offset-md-5  w-100 grid gap-0 column-gap-4">
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
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
