import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/index.scss";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/Rating/Rating";
import Button from "../components/Button/Button";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch("/annonces.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((data) => {
        const foundLogement = data.find((logement) => logement.id === id);
        if (!foundLogement) {
          setError("Logement non trouvé");
          setLoading(false);
        } else {
          setLogement(foundLogement);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Chargement...</p>;
  if (error) return <p className="error">{error}</p>;

  // Gestion du carrousel
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fiche-logement">
      {/* Carrousel d'images */}
      <div className="carousel">
        <Button
          className="carouselButton leftArrow"
          onClick={prevImage}
          imgSrc="/logos_pictos/VectorL.png"
          imgAlt="Flèche gauche"
        />

        <img
          className="image-logement"
          src={logement.pictures[currentImageIndex]}
          alt={logement.title}
        />
        <Button
          className="carouselButton rightArrow"
          onClick={nextImage}
          imgSrc="/logos_pictos/VectorR.png"
          imgAlt="Flèche droite"
        />
      </div>

      {/* Informations principales */}
      <div className="logement-info">
        <div className="details">
          <h1 className="titre">{logement.title}</h1>
          <h2 className="location">{logement.location}</h2>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Informations de l'hôte */}
        <div className="host-section">
          <div className="host-info">
            <span>{logement.host.name}</span>
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Sections déroulantes */}
      <div className="collapse-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={logement.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        />
      </div>
    </div>
  );
};

export default FicheLogement;
