import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/index.scss";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/Rating/Rating";
import Button from "../components/Button/Button";
import Layout from "../layout/Layout";

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

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
          navigate("/error");
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
  }, [id, navigate]);

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

  const isSingleImage = logement.pictures.length === 1; // Vérifier si logement a une seule image

  return (
    <Layout>
      <div className="fiche-logement">
        {/* Carrousel d'images */}
        <div className="carousel">
          {!isSingleImage && (
            <>
              <Button
                className="carouselButton leftArrow"
                onClick={prevImage}
                imgSrc="/logos_pictos/VectorL.png"
                imgAlt="Flèche gauche"
              />
              <Button
                className="carouselButton rightArrow"
                onClick={nextImage}
                imgSrc="/logos_pictos/VectorR.png"
                imgAlt="Flèche droite"
              />
            </>
          )}

        {/* Affichage de la numérotation des images */}
        {!isSingleImage && (
          <div className="image-count">
            {currentImageIndex + 1}/{logement.pictures.length}
          </div>
        )}
        
          <img
            className="image-logement"
            src={logement.pictures[currentImageIndex]}
            alt={logement.title}
          />
        </div>

        {/* Infos logement */}
        <div className="logement-info">
          <div className="details">
            <h1 className="title">{logement.title}</h1>
            <h2 className="location">{logement.location}</h2>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Infos sur l'hôte */}
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

        {/* Collapses */}
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
    </Layout>
  );
};

export default FicheLogement;
