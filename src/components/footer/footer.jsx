import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import logo from "../../assets/Logo Renzo Developer.png";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqsiu1r",  // reemplaza con tu Service ID de EmailJS
        "template_20iwz3e", // reemplaza con tu Template ID
        form.current,
        "-ee6RkGGLv3eUDiZf"   // reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente!");
          e.target.reset(); // limpia el formulario
        },
        (error) => {
          console.log(error.text);
          alert("Error al enviar el mensaje");
        }
      );
  };

  return (
    <footer id="contacto" className="container-fluid mt-5 py-5">
      <div className="container d-flex justify-content-around flex-column flex-md-row">
        <div style={{ maxWidth: "300px" }} className="d-flex flex-column align-items-center">
          <h2>Contacto</h2>
          <ul className="list-unstyled">
            <li>
              <a className="a-footer" href="mailto:renzoGpereira@gmail.com" rel="noopener noreferrer">
                <i className="icono-footer bi bi-envelope-at-fill"></i> renzoGpereira@gmail.com
              </a>
            </li>
            <li>
              <a className="a-footer" href="https://maps.app.goo.gl/wntxzAQ7i1e22aGc7" target="_blank" rel="noopener noreferrer">
                <i className="icono-footer bi bi-geo-alt-fill"></i> Canelones, Uruguay
              </a>
            </li>
            <li>
              <a className="a-footer" href="https://github.com/Renzo-Pereira" target="_blank" rel="noopener noreferrer">
                <i className="icono-footer bi bi-github"></i> Renzo Pereira
              </a>
            </li>
            <li>
              <a className="a-footer" href="https://www.linkedin.com/in/renzo-pereira-832b7724b/" target="_blank" rel="noopener noreferrer">
                <i className="icono-footer bi bi-linkedin"></i> Renzo Pereira
              </a>
            </li>
          </ul>
          <motion.img
            src={logo}
            alt="Logo Renzo Developer"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>

        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-2">
          <label className="form-label">Nombre</label>
          <input placeholder="Nombre" name="nombre" type="text" className="form-control" required />
          
          <label className="form-label">Email</label>
          <input placeholder="Email" name="email" type="email" className="form-control" required />
          
          <label className="form-label">Mensaje</label>
          <textarea placeholder="Mensaje" name="mensaje" className="form-control" cols="30" rows="10" required></textarea>
          
          <button type="submit" className="btn btn-primary m-0 mt-2">Enviar</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
