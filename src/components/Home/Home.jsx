import React from "react";
import Hero from "./Hero";
import BrandLogo from "./BrandLogo";
import Services from "./Services";
import Trains from "./Trains";
import Review from "./Review";
import Effort from "./Effort";

function Home() {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Trains />
      <Review />
      <Effort />
    </>
  );
}

export default Home;
