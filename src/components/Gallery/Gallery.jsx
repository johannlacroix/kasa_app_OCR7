import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";

const Gallery = () => {
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
      <div className={styles.galTitleBg}>
        <div className={styles.overlay}></div> {/* Overlay sombre */}
        <img src="/gallery_title_bg.png" alt="Logo" className={styles.bg} />
        <div className={styles.textOverlay}>Chez vous, partout et ailleurs</div>
      </div>
      <div className={styles.gallery}>
        {annonces.map((annonce) => (
          <div key={annonce.id} className={styles.card}>
            <img src={annonce.cover} alt={annonce.title} />
            <h3>{annonce.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
