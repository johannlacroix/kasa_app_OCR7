import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="aboutContainer">
      <Banner image="/about_banner_bg.png" text="" />
      <div className="aboutCollapseContainer">
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
    </Layout>
  );
};

export default About;
