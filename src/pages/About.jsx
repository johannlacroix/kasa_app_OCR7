import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
const About = () => {
  return (
    <div>
      <Banner image="/about_banner_bg.png" />
      <div>
        <div>
          <Collapse
            title="Fiabilité"
            content="Nos logements sont vérifiés régulièrement pour garantir une qualité optimale."
          />
          <Collapse
            title="Respect"
            content="Le respect est une valeur fondamentale de notre plateforme."
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
