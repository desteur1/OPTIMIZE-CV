import "../styles/Home.css";
import herBg from "../styles/images/hero-bg.jpg";

const Home = () => {
  return (
    <div className="">
      <div className="home-container">
        <img
          className="hero-bg img-fluid"
          src={herBg}
          alt="presentation background"
        />
      </div>
      <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
        /<h1>Bonjour, Je suis Piepenche Fall Desteur</h1>
        <h2 className="py-3">Développeur Fullstack</h2>
        <button type="button" className="btn btn-primary btn-sm">
          En savoir plus!
        </button>
      </div>
    </div>
  );
};

export default Home;
