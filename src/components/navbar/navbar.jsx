import { useEffect } from "react";
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
      <nav className="row align-items-center" id="nav">
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center justify-content-md-start">
          <a href="#inicio"><img className="img-fluid" src={logo} alt="logo" style={{ maxWidth: "80px", height: "auto" }} /></a>
        </div>
        <ul className="col-12 col-md-10 nav-list list-unstyled d-flex gap-3 justify-content-end text-center">
          <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
          <li className="nav-item"><a className="nav-link" href="#info">Sobre mí</a></li>
          <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          <li className="nav-item">
            <i className="bi bi-linkedin"></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-github"></i>
          </li>
          <li className="nav-item">
            <i className="bi bi-moon-stars-fill"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
