import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextUIProvider } from "@nextui-org/react";
function App() {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </NextUIProvider>
    </>
  );
}

export default App;
