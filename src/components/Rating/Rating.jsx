import PropTypes from "prop-types";
import styles from "./Rating.module.scss";

const Rating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = parseInt(rating, 10); // Convertit la note en entier

  return (
    <div className={styles.rating}>
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={index < filledStars ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
    </div>
  );
};

// Validation des props avec PropTypes
Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Rating;
