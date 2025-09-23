import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/Logo Renzo Developer.png";

const NavBar = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    if (abrir) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });
    }

    if (cerrar) {
      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }
  });

  return (
    <header id="header" className="container-fluid">
      <motion.nav
        id="nav"
        className="row align-items-center justify-content-between"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center justify-content-md-start">
          <a href="#inicio">
            <img
              className="img-fluid"
              src={logo}
              alt="logo"
              style={{ maxWidth: "80px", height: "auto" }}
            />
          </a>
        </div>
        <ul className="col-12 col-md-9 nav-list list-unstyled d-flex gap-3 justify-content-center justify-content-md-end text-center m-0 p-0 me-md-3">
          <li className="nav-item d-none d-md-block"><a className="nav-link" href="#inicio">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
          <li className="nav-item"><a className="nav-link" href="#info">Sobre mí</a></li>
          <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/renzo-pereira-832b7724b/" target="_blank" className="text-reset text-decoration-none">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/Renzo-Pereira" target="_blank" className="text-reset text-decoration-none">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default NavBar;
