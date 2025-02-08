import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Collapse.module.scss";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icônes de flèche

const Collapse = ({ title, content, size = "large" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.collapse} ${styles[size]} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>{title}</h3>
        {isOpen ? (
          <ChevronDown size={24} color="white" />
        ) : (
          <ChevronUp size={24} color="white" />
        )}
      </button>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
};

// Définition des types de props
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "small"]),
};

export default Collapse;

ChevronUp;

ChevronDown;
