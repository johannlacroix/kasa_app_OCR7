import styles from "./Button.module.scss";

function Button({ label, onClick, imgSrc, imgAlt, className }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {imgSrc ? (
        <img src={imgSrc} alt={imgAlt} className={styles.buttonImage} />
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
