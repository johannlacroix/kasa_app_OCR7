import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

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
      <Banner />

      {/* Grid contenant toutes les Cards */}
      <div className={styles.gallery}>
        {annonces.map((annonce) => (
          <Card key={annonce.id} annonce={annonce} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
