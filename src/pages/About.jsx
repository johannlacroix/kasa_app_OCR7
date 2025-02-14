import Banner from "../components/Banner/Banner";
// import styles from "../components/Gallery/Gallery.module.scss";
import Collapse from "../components/Collapse/Collapse";

const About = () => {
  return (
    <div className="content-wrapper">
      <Banner image="/about_banner_bg.png" text="" />
      <div className="collapseContainer">
        <Collapse
          title="Fiabilité"
          content="Nos logements sont vérifiés régulièrement pour garantir une qualité optimale."
        />
        <Collapse
          title="Respect"
          content="Le respect est une valeur essentielle pour nous."
        />
        <Collapse
          title="Service"
          content="Nos équipes sont à votre disposition pour toute question."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est notre priorité pour tous nos clients."
        />
      </div>
    </div>
  );
};

export default About;
