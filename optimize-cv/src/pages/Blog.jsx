import "../styles/Blog.css";
import Blogbg from "../styles/images/banner.jpg";
import Coder from "../styles/images/coder.jpg";
import Croissance from "../styles/images/croissance.jpg";
import Google from "../styles/images/google.jpg";
import Screens from "../styles/images/screens.jpg";
import Seo from "../styles/images/seo.jpg";
import Technos from "../styles/images/technos.png";

const Blog = () => {
  return (
    <div className="blog-container mb-5">
      <img src={Blogbg} alt="Blog background" className="img-fluid" />
      <h1>Blog</h1>
      <p className="first-p">Voici quelques-unes de mes réalisations.</p>
      <div className="blog-container__line1"></div>
      <div className="container my-5">
        <div className="row">
          {/* First Card  */}
          <div className="col-lg-4 col-md-6">
            <div className="card border f-4">
              <img
                src={Coder}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title  blog-title">
                  Coder son site en HTML/CSS
                </h5>
                <p className="card-text blog-text">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://codi-one.fr/Blog/Exemple-de-site-web-html/63"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          {/* second Card  */}
          <div className="col-lg-4 col-md-6">
            <div className="card border f-4">
              <img
                src={Croissance}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title  blog-title">
                  Vendre ses produits sur le web
                </h5>
                <p className="card-text blog-text">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://www.leboncoin.fr/"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          {/* Third Card  */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border f-4 ">
              <img
                src={Google}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title  blog-title">
                  Se positionner sur Google
                </h5>
                <p className="card-text blog-text">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://www.google.fr/"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          {/* forth column */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border f-4">
              <img
                src={Screens}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title  blog-title">
                  Coder en responsive design
                </h5>
                <p className="card-text blog-text">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://www.squarespace.com/website-design/?channel=pnb&subchannel=go&campaign=pnb-go-fr-en-core_website-e&subcampaign=(general-en_responsive-website-design_e)&gad_source=1&gclid=CjwKCAjw2dG1BhB4EiwA998cqCipp95UtIuHnOFDkuL_IDcgZVzIXSj9el_Tnjt4TCMQ0QaNrp4nchoCgQgQAvD_BwE&gclsrc=aw.ds"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          {/* fifth column */}
          <div className="col-lg-4 col-md-6 ">
            <div className="card border ">
              <img
                src={Seo}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title  blog-title">
                  Techniques de référencement
                </h5>
                <p className="card-text blog-text">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://semji.com/fr/guide/techniques-seo-le-guide-complet/"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          {/* sixth column */}
          <div className="col-lg-4 col-md-6">
            <div className="card border">
              <img
                src={Technos}
                className="card-img-top img-fluid rounded-top img-p"
                alt="..."
              />
              <div className="card-body  blog-body">
                <h5 className="card-title blog-title ">Apprendre à coder</h5>
                <p className="card-text blog-text last-one">
                  some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://dyma.fr/?campaignId=18785604935&device=c&utm_source=google&gad_source=1&gclid=CjwKCAjw2dG1BhB4EiwA998cqPC3R67r6pVnbitr8fRpPmMtbhmSbnJaWviQPBM8rwR8t9MSS5lvARoC51wQAvD_BwE"
                  className="btn btn-primary text-light"
                >
                  Lire la suite
                </a>
              </div>
              <div className="card-footer foot-blog">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
