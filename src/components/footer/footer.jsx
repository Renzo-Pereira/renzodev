const Footer = () => {
  return (
    <footer>
      <div className="footer-contain">
        <div>
          <h2>Contact</h2>
          <ul className="footer-list">
            <li><i class="bi bi-envelope-at-fill"></i> renzoGpereira@gmail.com</li>
            <li><i class="bi bi-geo-alt-fill"></i> Canelones, Uruguay</li>
            <li>
              <a href="https://github.com/Renzo-Pereira"><i class="bi bi-github"></i> Renzo Pereira</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/renzo-pereira-832b7724b/"><i class="bi bi-linkedin"></i> Renzo Pereira</a>
            </li>
          </ul>
        </div>
        <form>
          <label>Name</label>
          <input placeholder="Name" type="text" />
          <label>Email</label>
          <input placeholder="Email" type="email" />
          <label>Message</label>
          <textarea
            placeholder="Message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" />
        </form>
      </div>
    </footer>
  );
};

export default Footer;
