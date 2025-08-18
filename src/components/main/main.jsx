import foto from "../../assets/perfil.png";
import proyectoA from "../../assets/coetc.png";
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

const proyectos = [
  { id: 3, img: proyectoA, titulo: "COETC | Web Corporativa", desc: "Re-diseño de la compañia nacional COETC", lenguaje: "JavaScript, CSS, HTML" },
  { id: 3, img: proyectoB, titulo: "Magui Estilista | Web Corporativa", desc: "Un sitio web para una estilista que ofrece sus servicios y trabajos realizados.", lenguaje: "JavaScript, CSS, HTML" },
  { id: 1, img: proyectoC, titulo: "Elubo SA | Catalogo Web", desc: "Un sitio web para poder ver los articulos, las ofertas y ultimas noticias de esta conocida tienda de ropa.", lenguaje: "React Js, Scss, JavaScript, HTML" },
  { id: 2, img: proyectoD, titulo: "Elubo SA | Web Administrativa", desc: "Creado para trabajar en conjunto a 'https://legionuy.vercel.app'. Su función es la de administrar el catalogo online y ver las consultas realizadas por los clientes.", lenguaje: "React Js, Scss, JavaScript, HTML" },
  { id: 3, img: proyectoE, titulo: "Umapetshop | Ecommerce", desc: "Dedicado a todos los amantes de las mascotas, he creado este ecommerce para lucir los articulos a la vente y poder realizar pedidos!", lenguaje: "React Js, Scss, JavaScript, HTML" },
];

const Main = () => {
  return (
    <main className="container-fluid">
      <section id="inicio" className="container">
        <div className="d-flex flex-column-reverse flex-md-row justify-content-md-around gap-5">
          <div>
            <h1>
              <span className="linea1">Hi, I'm Renzo</span><br />
              <span className="linea2">Frontend Developer</span><br />
              <span className="linea3">that loves creating web apps</span>
            </h1>
            <div className="d-flex flex-column flex-md-row gap-2 mt-4">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/renzo-pereira-832b7724b/">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a className="btn btn-primary" href="https://github.com/Renzo-Pereira">
                <i className="bi bi-github"></i> GitHub
              </a>
              <a className="btn btn-primary" href="">
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
              slidesPerView: 1, // móvil
            },
            768: {
              slidesPerView: 2, // tablet
            },
            1024: {
              slidesPerView: 4, // desktop
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
            <h2>
              Sobre Mí<span>.</span>
            </h2>
            <p>
              Me llamo Renzo Pereira, soy un joven de 22 años, estudiante de la carrera de Analista en Tecnologías de la Información en la Universidad de ORT Uruguay, actualmente estoy cursando mi segundo semestre. Estoy buscando mi primera experiencia en el rubro tecnológico para seguir aprendiendo, aportar mis conocimientos y comenzar a construir mi independencia mientras financio mis estudios universitarios.
            </p>
          </div>
          <div className="col-12 col-md-10 d-flex flex-column gap-3 my-3">
            <h3>Educación</h3>
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
            <h3>Mi stack tecnológico</h3>
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
