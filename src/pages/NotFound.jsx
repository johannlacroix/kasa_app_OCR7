import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="notFoundCtn">
        <h1 className="notFound">404</h1>
        <p className="notFoundText">
          Oops! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to="/Home" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
