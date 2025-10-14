import logo from "../../assets/Logo Renzo Developer.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contacto" className="container-fluid mt-5 py-5">
      <div className="container d-flex justify-content-around flex-column flex-md-row">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>Contacto</h2>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:renzoGpereira@gmail.com" rel="noopener noreferrer"><i className="bi bi-envelope-at-fill"></i> renzoGpereira@gmail.com</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/wntxzAQ7i1e22aGc7" target="_blank" rel="noopener noreferrer"><i className="bi bi-geo-alt-fill"></i> Canelones, Uruguay</a>
            </li>
            <li>
              <a href="https://github.com/Renzo-Pereira" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i> Renzo Pereira</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/renzo-pereira-832b7724b/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i> Renzo Pereira</a>
            </li>
          </ul>
          </div>
          <motion.img
            src={logo}
            alt="Logo Renzo Developer"
            className="img-fluid"
            style={{ maxWidth: "300px" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
    </footer>
  );
};

export default Footer;
