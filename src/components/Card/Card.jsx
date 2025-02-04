import PropTypes from "prop-types";
import styles from "./Card.module.scss";

const Card = ({ annonce }) => {
  if (!annonce) {
    console.error("Erreur: annonce est undefined !");
    return null;
  }
  return (
    <div className={styles.card}>
      <div className={styles.background}></div>

      <div className={styles.imageContainer}>
        <img src={annonce.cover} alt={annonce.title} />
      </div>

      <h2>{annonce.title}</h2>
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
