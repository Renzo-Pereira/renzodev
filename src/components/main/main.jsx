import foto from "../../assets/perfil.jpeg";
import proyectoA from "../../assets/lucialamoda.png";
import proyectoB from "../../assets/magui.png";
import proyectoC from "../../assets/legion.png";
import proyectoD from "../../assets/elubosa.png";
import proyectoE from "../../assets/umapetshop.png";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Sass from "../../assets/Sass.svg";
import ReactJS from "../../assets/React.svg";
import Figma from "../../assets/Figma.svg";
import git from "../../assets/git-svgrepo-com.svg";
import GitHub from "../../assets/github-142-svgrepo-com.svg";
import firebase from "../../assets/firebase-svgrepo-com.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import coderhouse from "../../assets/coderhouse.jpg";
import ort from "../../assets/ort.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const proyectos = [
  { id: 1, img: proyectoA, titulo: "Luci a la moda | Catalogo Web", desc: "Catalogo de productos de moda, administrada con una web paralela", lenguaje: "React JS, Firebase, Scss" },
  { id: 2, img: proyectoB, titulo: "Magui Estilista | Web Corporativa", desc: "Un sitio web para una estilista que ofrece sus servicios y trabajos realizados.", lenguaje: "JavaScript, CSS, HTML" },
  { id: 3, img: proyectoC, titulo: "Elubo SA | Catalogo Web", desc: "Un sitio web para poder ver los articulos, las ofertas y ultimas noticias de esta conocida tienda de ropa.", lenguaje: "React Js, Scss, JavaScript, HTML" },
  { id: 4, img: proyectoD, titulo: "Elubo SA | Web Administrativa", desc: "Su función es la de administrar el catalogo online y ver las consultas realizadas por los clientes.", lenguaje: "React Js, Scss, JavaScript, HTML" },
  { id: 5, img: proyectoE, titulo: "Umapetshop | Ecommerce", desc: "Dedicado a todos los amantes de las mascotas, he creado este ecommerce para lucir los articulos a la vente y poder realizar pedidos!", lenguaje: "React Js, Scss, JavaScript, HTML" },
];

const Main = () => {
  return (
    <main className="container-fluid">
      <section id="inicio" className="container">
        <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-md-around gap-5">
          <div>
            <h1>
              <TypeAnimation
                sequence={[
                  "¡Hola! Soy Renzo\nDesarrollador Frontend\ny me encanta crear sitios webs.",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                className="typing-effect"
              />
            </h1>
            <div className="d-flex flex-column flex-md-row gap-2 mt-4">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/renzo-pereira-832b7724b/" target="_blank">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a className="btn btn-primary" href="https://github.com/Renzo-Pereira" target="_blank">
                <i className="bi bi-github"></i> GitHub
              </a>
              <a className="btn btn-primary" href="/cv.pdf" download target="_blank">
                <i className="bi bi-filetype-pdf"></i> Download CV
              </a>
            </div>
          </div>
          <img className="img-fluid" src={foto} alt="Foto personal" id="foto-personal" />
        </div>
      </section>

      <section id="proyectos" className="container">
        <h2 className="my-3">Proyectos</h2>
        <Swiper
          className="carrusel p-2"
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {proyectos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card m-1">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.titulo}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text flex-grow-1">{item.desc}</p>
                  <ul className="mt-2">
                    {item.lenguaje.split(", ").map((lang) => (
                      <li
                        key={lang}
                        className="badge bg-primary me-1"
                      >
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </section>

      <section id="info" className="container">
        <div className="row">
          <div className="col-12 my-3">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sobre Mí<span>.</span>
            </motion.h2>

            <p>
              Me llamo Renzo Pereira, soy un joven de 22 años, estudiante de la carrera de Analista en Tecnologías de la Información en la Universidad de ORT Uruguay, actualmente estoy cursando mi segundo semestre. Estoy buscando mi primera experiencia en el rubro tecnológico para seguir aprendiendo, aportar mis conocimientos y comenzar a construir mi independencia mientras financio mis estudios universitarios.
            </p>
          </div>
          <div className="col-12 col-md-10 d-flex flex-column gap-3 my-3">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Educación
            </motion.h3>
            <article>
              <div>
                <h4>ORT Uruguay</h4>
                <h5>Analista en Tecnologías de la información</h5>
                <p>Cursando actualmente segundo semestre</p>
              </div>
              <img src={ort} alt="Logo de ORT Uruguay" />
            </article>
            <article>
              <div>
                <h4>CoderHouse</h4>
                <h5>Desarrollo Web</h5>
                <ul className="list-inline gap-1 d-flex flex-wrap">
                  <li className="badge bg-primary">HTML</li>
                  <li className="badge bg-primary">CSS</li>
                  <li className="badge bg-primary">Sass</li>
                  <li className="badge bg-primary">Frameworks</li>
                  <li className="badge bg-primary">Git</li>
                  <li className="badge bg-primary">GitHub</li>
                </ul>
              </div>
              <img src={coderhouse} alt="Logo de CoderHouse" />
            </article>
            <article>
              <div>
                <h4>CoderHouse</h4>
                <h5>JavaScript</h5>
                <p className="badge bg-primary">JavaScript</p>
              </div>
              <img src={coderhouse} alt="Logo de CoderHouse" />
            </article>
            <article>
              <div>
                <h4>CoderHouse</h4>
                <h5>ReactJS</h5>
                <p className="badge bg-primary">ReactJS</p>
              </div>
              <img src={coderhouse} alt="Logo de CoderHouse" />
            </article>
          </div>
          <div id="stack-tecnologico" className="col-12 col-md-2 d-flex flex-column align-items-center text-center my-3 gap-3">
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Mi stack tecnológico
            </motion.h3>
            <ul className="list-unstyled d-flex gap-2 flex-wrap justify-content-center">
              <li><img className="img-fluid" src={HTML} alt="HTML logo" /></li>
              <li><img className="img-fluid" src={CSS} alt="CSS logo" /></li>
              <li><img className="img-fluid" src={Sass} alt="Sass logo" /></li>
              <li><img className="img-fluid" src={ReactJS} alt="React logo" /></li>
              <li><img className="img-fluid" src={Figma} alt="Figma logo" /></li>
              <li><img className="img-fluid" src={firebase} alt="Firebase logo" /></li>
              <li><img src={git} alt="Git logo" /></li>
              <li><img src={GitHub} alt="GitHub logo" /></li>
            </ul>
          </div>
        </div>
      </section >
    </main >
  );
};

export default Main;
