import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About-Us/About.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import Customer from "./components/Customer/Customer.jsx";
import Solution from "./components/Solution/Solution.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About Us",
        element: <About />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/Customers",
        element: <Customer />,
      },
      {
        path: "/Solution",
        element: <Solution />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
