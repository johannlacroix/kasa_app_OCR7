import { useEffect, useState } from "react";
import styles from "./Gallery.module.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Gallery = () => {
  console.log("Gallery est monté !");
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetch("/annonces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        setAnnonces(data);
      })
      .catch((error) =>
        console.error("Erreur de chargement des données :", error)
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {annonces.length === 0 ? (
          <p>Aucune annonce disponible.</p>
        ) : (
          annonces.map((annonce) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/logement/${annonce.id}`}
              key={annonce.id}
            >
              <Card annonce={annonce} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
