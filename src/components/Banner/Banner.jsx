import PropTypes from "prop-types";
import styles from "./Banner.module.scss";

const Banner = ({ image, text }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div> {/* Overlay sombre */}
      <img src={image} alt="Bannière" className={styles.bg} />
      <div className={styles.textOverlay}>{text}</div>
    </div>
  );
};

// Définition des types des props
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
