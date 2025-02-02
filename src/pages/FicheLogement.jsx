import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/index.scss"; // Import des styles globaux pour tester

const FicheLogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="fiche-logement">
      <h1 className="titre">{logement.title}</h1>
      <img
        className="image-logement"
        src={logement.cover}
        alt={logement.title}
      />
      <p className="description">{logement.description}</p>
    </div>
  );
};

export default FicheLogement;
