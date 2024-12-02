import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/About Us",
        element: <div>about us</div>,
      },
      {
        path: "/Pricing",
        element: <div>pricing section</div>,
      },
      { 
        path: "/Customers", 
        element: <div>Customer section</div> 
      },
      {
        path: "/Solution",
        element: <div>solution section</div>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
