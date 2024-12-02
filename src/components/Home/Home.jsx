import React from "react";
import Hero from "./Hero";
import BrandLogo from "./BrandLogo";
import Services from "./Services";
import Trains from "./Trains";
import Review from "./Review";

function Home() {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Trains />
      <Review />
    </>
  );
}

export default Home;
