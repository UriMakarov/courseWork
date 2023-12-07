import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/pages/root.jsx";
import { Home } from "../src/pages/home.jsx";
import { Layout } from "../src/Layout.jsx";
// import { About } from '../pages/about.jsx';
import { ROUTE_PATHES } from "./pathes.js";

import { NotFoundPage } from "../src/pages/notFound.jsx";

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
