import React from "react";
import Hero from "./Hero";
import BrandLogo from "./BrandLogo";
import Services from "./Services";
import Trains from "./Trains";
import Review from "./Review";
import Effort from "./Effort";
import GetStarted from "./GetStarted";

function Home() {
  return (
    <>
      <Hero />
      <BrandLogo />
      <Services />
      <Trains />
      <Review />
      <Effort />
      <GetStarted />
    </>
  );
}

export default Home;
