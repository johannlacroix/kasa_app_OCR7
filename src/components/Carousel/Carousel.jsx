import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./Carousel.module.scss";

const Carousel = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isSingleImage = pictures.length === 1;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
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
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Carousel;
