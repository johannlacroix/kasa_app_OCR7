import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ annonce }) => {
  return (
    <div className={styles.card}>
      {/* Conteneur de l'image avec le dégradé */}
      <div className={styles.imageContainer}>
        <img src={annonce.cover} alt={annonce.title} />
      </div>
      <h3>{annonce.title}</h3>
    </div>
  );
};

// Validation des props
Card.propTypes = {
  annonce: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
