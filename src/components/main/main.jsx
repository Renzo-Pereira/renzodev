import foto from "../../assets/Foto perfil.jpg";
import proyectoA from "../../assets/legion.png";
import proyectoB from "../../assets/elubosa.png";
import proyectoC from "../../assets/umapetshop.png";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Sass from "../../assets/Sass.svg";
import React from "../../assets/React.svg";
import Figma from "../../assets/Figma.svg";

const Main = () => {
  return (
    <main>
      <section className="home">
        <div>
          <h2>Hi, I'm Renzo</h2>
          <h1>Frontend Developer</h1>
          <h2>that loves creating web apps</h2>
          <a href="https://www.linkedin.com/in/renzo-pereira-832b7724b/">
            <button>
              <i className="bi bi-linkedin"></i> LinkedIn
            </button>
          </a>
          <a href="https://github.com/Renzo-Pereira">
            <button>
              <i className="bi bi-github"></i> GitHub
            </button>
          </a>
          <button>
            <i className="bi bi-filetype-pdf"></i> Download CV
          </button>
        </div>
        <img src={foto} alt="Foto personal" />
      </section>

      <section className="proyectos">
        <h2>Proyects</h2>
        <div>
          <article>
            <img src={proyectoA} alt="Proyecto para Legión" />
            <div className="proyecto-descripcion">
              <h3>Web Catalog</h3>
              <p>
                Un sitio web para poder ver los articulos, las ofertas y ultimas
                noticias de esta conocida tienda de ropa.
              </p>
              <p className="lenguajes">
                <span>React Js</span>
                <span>Scss</span>
                <span>JavaScript</span>
                <span>HTML</span>
              </p>
            </div>
          </article>
          <article>
            <img src={proyectoB} alt="Proyecto para Elubo SA" />
            <div className="proyecto-descripcion">
              <h3>Catalog and Inquiry Management System</h3>
              <p>
                Creado para trabajar en conjunto a
                "https://legionuy.vercel.app/". Su función es la de administrar
                el catalogo online y ver las consultas realizadas por los
                clientes.
              </p>
              <p className="lenguajes">
                <span>React Js</span>
                <span>Scss</span>
                <span>JavaScript</span>
                <span>HTML</span>
              </p>
            </div>
          </article>
          <article>
            <img src={proyectoC} alt="Proyecto para Umapetshop" />
            <div className="proyecto-descripcion">
              <h3>Ecommerce</h3>
              <p>
                Dedicado a todos los amantes de las mascotas, he creado este
                ecommerce para lucir los articulos a la vente y poder realizar
                pedidos!
              </p>
              <p className="lenguajes">
                <span>React Js</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>HTML</span>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about">
        <h2>
          About<span>.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quaerat
          libero possimus quas amet ab rem maxime quis. Quidem, dolorum animi
          vitae alias velit iusto, sapiente earum error assumenda mollitia ea
          quis voluptatibus itaque dolore laudantium! Mollitia eligendi nostrum
          nesciunt enim saepe nam atque facere sit culpa quod ad, facilis dicta
          pariatur, numquam excepturi delectus eum! Doloribus cumque corrupti
          pariatur dolore, sed similique nihil magni perferendis incidunt
          distinctio nobis. Illo consectetur est dignissimos qui. Iste ex
          officia unde dicta, debitis veritatis facere sapiente nam autem
          deleniti, possimus, sint accusamus quasi aperiam temporibus inventore
          tenetur atque nesciunt. Optio obcaecati in perspiciatis?
        </p>
      </section>

      <div className="education">
        <section>
          <h3>Education</h3>
          <article>
            <h4>Web Development</h4>
            <h5>CoderHouse</h5>
            <p>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>Frameworks CSS</span>
              <span>Git</span>
            </p>
          </article>
          <article>
            <h4>JavaScript</h4>
            <h5>CoderHouse</h5>
            <p>
              <span>JavaScript</span>
            </p>
          </article>
          <article>
            <h4>ReactJS</h4>
            <h5>CoderHouse</h5>
            <p>
              <span>React Js</span>
            </p>
          </article>
        </section>

        <section className="technologies">
          <h3>Tech Stack</h3>
          <div className="technologies-icons">
            <img src={HTML} alt="HTML logo" />
            <img src={CSS} alt="CSS logo" />
            <img src={Sass} alt="Figma logo" />
            <img src={React} alt="React logo" />
            <img src={Figma} alt="Figma logo" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
