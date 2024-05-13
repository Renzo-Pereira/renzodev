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
    <header>
      <img src={logo} alt="logo" />
      <button id="abrir" className="abrir-menu">
        <i className="bi bi-list"></i>
      </button>
      <nav id="nav" className="nav">
        <button id="cerrar" className="cerrar-menu">
          <i className="bi bi-x-lg"></i>
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Proyects</li>
          <li>Contact</li>
          <li>
            <i className="bi bi-linkedin"></i>
          </li>
          <li>
            <i className="bi bi-github"></i>
          </li>
          <li>
            <i className="bi bi-moon-stars-fill"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
