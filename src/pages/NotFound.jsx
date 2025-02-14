import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content-wrapper">
      <div className="notFoundCtn">
        <h1 className="notFound">404</h1>
        <p className="notFoundText">
          Oops! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to="/Home" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
