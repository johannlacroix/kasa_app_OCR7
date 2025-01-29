import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

const Card = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch("/annonces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => setAnnonces(data))
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, []);

  return (
    <div className={styles.container}>
      {annonces.map((annonce) => (
        <div key={annonce.id} className={styles.card}>
          <img src={annonce.cover} alt={annonce.title} />
          <h3>{annonce.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
