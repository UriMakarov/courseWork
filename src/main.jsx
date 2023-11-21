import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { router } from "./router/index";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

