import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/logement/:id",
    element: <FicheLogement />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/redirect-to-about", 
    element: <Navigate to="/about" />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
