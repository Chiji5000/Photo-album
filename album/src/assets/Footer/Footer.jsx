import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Chiji's Photo Album</h3>
          <p>
            Showcasing creativity through stunning visuals and memorable
            moments.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/iruke-chijindu-415431332/"
              className="social-icon"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Chiji5000" className="social-icon">
              Github
            </a>
            <a href="https://wa.me/2347067583021" className="social-icon">
              Whatsapp
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: cjiruke@gmail.com</p>
          <p>Phone: +234-7067-583-021</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear}Chiji's Photo Album. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
