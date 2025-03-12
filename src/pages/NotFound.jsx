import { Link, useRouteError } from "react-router-dom";
import Layout from "../layout/Layout";

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <Layout>
      <div className="notFoundCtn">
        <h1 className="notFound">404</h1>
        <p className="notFoundText">
        {error?.statusText || error?.message || "Oops! La page que vous demandez n'existe pas."}
        </p>
        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
