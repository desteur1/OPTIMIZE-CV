import "../styles/AboutMe.css";
import Profile from "../styles/images/about-bg.jpg";

const About = () => {
  return (
    <div
      className="container wrapper pt-5 pb-4 px-2 mt-5 mb-5 border border-3 rounded shadow"
      id="about"
    >
      <div className="wrapper-first-item">
        <h2 className="my-h2">À propos</h2>
        <div className="line-1"></div>
        <article className="first-p">
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
            au CEF, où j'ai acquis des compétences solides en{" "}
            <strong>développement web et en programmation</strong>, tant côté
            front-end que back-end. Cette expérience m'a permis de maîtriser des
            langages et frameworks modernes, tout en développant une
            méthodologie rigoureuse pour produire un code propre, sécurisé et
            conforme aux bonnes pratiques du secteur.
          </p>

          <p>
            Aujourd'hui, je souhaite orienter ma carrière vers la{" "}
            <strong>cybersécurité</strong>, un domaine qui me passionne
            particulièrement et où je souhaite mettre mes compétences techniques
            au service de la protection des systèmes d'information et des
            données sensibles. Je suis motivé par les défis liés à la sécurité
            informatique, tels que la prévention des attaques, la gestion des
            vulnérabilités, la mise en place de solutions de sécurité et le
            respect des normes et réglementations.
          </p>

          <p>
            Je suis à la recherche d'une{" "}
            <strong>alternance en cybersécurité</strong> à Paris ou en région
            parisienne, qui me permettra de mettre en pratique mes
            connaissances, de continuer à apprendre aux côtés de professionnels
            expérimentés et de contribuer activement à la sécurité et à la
            fiabilité des infrastructures informatiques d'une entreprise
            innovante
          </p>
          <p>
            Curieux, rigoureux et déterminé, je m'investis pleinement dans tout
            projet que j'entreprends et je suis particulièrement attentif à la
            qualité du code, à la sécurité des systèmes et aux bonnes pratiques
            du développement et de la cybersécurité. Mon objectif est de devenir
            un professionnel capable de sécuriser efficacement les
            environnements numériques et de participer activement à la
            transformation digitale des entreprises.
          </p>
        </article>
      </div>

      <div className="wrapper-second-item pe-5 ">
        <div className="custom-img-container">
          <img className="img-fluid custom-img" src={Profile} alt="profile" />
        </div>
        <h2>Mes Competences</h2>
        <div className="line-1"></div>
        {/* <article className="second">
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
            <dt>JAVASCRIPT 65%</dt>
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
                  className="progress-bar bg-primary"
                  style={{ width: "65%" }}
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
            <dt>ANGULAR 70%</dt>
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
                  className="progress-bar bg-success"
                  style={{ width: "70%" }}
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
                  className="progress-bar bg-warning"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </dd>
            <dt>BOOTSTRAP 80%</dt>
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
                  style={{ width: "80%" }}
                ></div>
              </div>
            </dd>
            <dt>TAILWIND CSS 65%</dt>
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
                  className="progress-bar bg-info"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </dd>
            <dt>WORDPRESS 80%</dt>
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
                  className="progress-bar bg-warning"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </dd>
            <dt>MY SQL 55%</dt>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
            </dd>
            <dt>POSTGRE SQL 60%</dt>
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
                  style={{ width: "60%" }}
                ></div>
              </div>
            </dd>
            <dt>PYTHON 65%</dt>
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
                  style={{ width: "65%" }}
                ></div>
              </div>
            </dd>
            <dt>DJANGO 70%</dt>
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
                  style={{ width: "70%" }}
                ></div>
              </div>
            </dd>
            <dt>EXPRESS 60%</dt>
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
                  style={{ width: "60%" }}
                ></div>
              </div>
            </dd>
            <dt>DOCKER 50%</dt>
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
            <dt>N8N 50%</dt>
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
          </dl>
        </article> */}
        <h3>Développement Frontend</h3>
        <ul className="skills-list">
          <li className="skill-badge">HTML5</li>
          <li className="skill-badge">CSS3</li>
          <li className="skill-badge">JavaScript (ES6+)</li>
          <li className="skill-badge">Next.js</li>
          <li className="skill-badge">Typescript</li>
          <li className="skill-badge">React</li>
          <li className="skill-badge">Vue</li>
          <li className="skill-badge">Angular</li>

          <li className="skill-badge">Bootstrap</li>
          <li className="skill-badge">Tailwind CSS</li>
          <li className="skill-badge">Figma</li>
        </ul>

        <h3>Développement Backend</h3>
        <ul className="skills-list">
          <li className="skill-badge">Node.js</li>
          <li className="skill-badge">Express</li>
          <li className="skill-badge">Python</li>
          <li className="skill-badge">Django</li>
          <li className="skill-badge">MySQL</li>
          <li className="skill-badge">PostgreSQL</li>
          <li className="skill-badge">MongoDB</li>
        </ul>

        <h3>DevOps & Outils</h3>
        <ul className="skills-list">
          <li className="skill-badge">Docker</li>
          <li className="skill-badge">Git / GitHub</li>
          <li className="skill-badge">n8n</li>
        </ul>

        <h3>CMS</h3>
        <ul className="skills-list">
          <li className="skill-badge">WordPress</li>
        </ul>
      </div>
    </div>
  );
};
export default About;
