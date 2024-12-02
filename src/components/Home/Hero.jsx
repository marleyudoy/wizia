import React from "react";
import heroimage from "../../assets/Home/hero.png";

function Hero() {
  return (
    <>
      <section className="bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${heroimage})`
      }}>
        <div className="container py-[3rem]">
        <div>
          <h3 className=" heading3 text-center sm:text-start">AI SDRs (aiDRs)</h3>
          <h1 className="heading1 text-white text-center sm:text-start"> <span className="font-bold">More</span> leads, <br /> <span className="font-bold">less</span> people.</h1>
          <p className=" normalText md:w-2/5 pb-5 text-center sm:text-start">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <button className=" btn bg-secondaryColor1 text-[13px] block mx-auto md:mx-0 relative">Sign Up for the Beta</button>
        </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
