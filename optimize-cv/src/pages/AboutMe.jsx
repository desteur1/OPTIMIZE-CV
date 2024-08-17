import "../styles/AboutMe.css";
import Profile from "../styles/images/about-bg.jpg";

const About = () => {
  return (
    <div
      className="container wrapper pt-5 pb-4 px-2 mt-5 mb-5 border border-3 rounded shadow"
      id="about"
    >
      <div className="wrapper-first-item">
        <h3>À propos</h3>
        <div className="line-1"></div>
        <article className="first-p">
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
            au CEF. Au cours de cette formation, j'ai pu acquérir des bases
            solides pour travailler dans le domaine du{" "}
            <strong>développeur web</strong>.
          </p>

          <p>
            Basé à Paris, je suis en recherche d'un stage au sein d'une agence
            digitale pour consolider ma formation de{" "}
            <strong>développeur web Full stack</strong>.
          </p>

          <p>
            J'accorde une attention particulière à la qualité du code que
            j'écris et je respecte les bonnes pratiques du web.
          </p>
        </article>
      </div>

      <div className="wrapper-second-item pe-5 ">
        <div className="custom-img-container">
          <img className="img-fluid custom-img" src={Profile} alt="profile" />
        </div>
        <h2>Mes Competences</h2>
        <article className="second">
          <dl>
            <dt>HTML 90%</dt>
            <dd>
              {" "}
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </dd>
            <dt>CSS 80%</dt>
            <dd>
              <div
                className="progress"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </dd>
            <dt>REACT.JS 50%</dt>
            <dd>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </dd>
            <dt>VUE.JS 65%</dt>
            <dd>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </dd>
            <dt>NEXT.JS 50%</dt>
            <dd>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </dd>
          </dl>
        </article>
      </div>
    </div>
  );
};
export default About;
