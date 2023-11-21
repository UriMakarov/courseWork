import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/root.jsx";
import { Home } from "../pages/home.jsx";
import { Layout } from "../../Layout.jsx";
// import { About } from '../pages/about.jsx';
import { ROUTE_PATHES } from "./pathes.js";

import { NotFoundPage } from "../pages/notFound.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATHES.home,
        element: <Home />,
      },
      {
        path: ROUTE_PATHES.root,
        element: <Root />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
