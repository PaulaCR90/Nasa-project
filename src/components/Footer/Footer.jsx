import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h6>
        Created by PaulaCR for
        <a href="{https://www.thepowermba.com/es//}"> RockTheCode! 🚀</a>
      </h6>
      <figure className="img-container">
        <a href="https://github.com/PaulaCR90">
          <img src="../public/assets/github.png" alt="Enlace a Github" />
        </a>
        <a href="https://www.linkedin.com/in/alejandra-castro-rodr%C3%ADguez-a671b3208/">
          <img src="../public/assets/linkedin.png" alt="Enlace a Linkedin" />
        </a>
        <a href="mailto:p.a.castrorodriguez@gmail.com">
          <img src="../public/assets/correo-electronico.png" alt="Enlace a e-mail" />
        </a>
      </figure>
    </footer>
  );
};

export default Footer;
