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

export default Card;
