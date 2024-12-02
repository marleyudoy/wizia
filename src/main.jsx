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
        path: "/aboutus",
        element: <div>about us</div>,
      },
      {
        path: "/price",
        element: <div>pricing section</div>,
      },
      { 
        path: "/customer", 
        element: <div>Customer section</div> 
      },
      {
        path: "/solution",
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
