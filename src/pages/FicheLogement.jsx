import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Affiche plus d'infos ici */}
    </div>
  );
};

export default FicheLogement;
