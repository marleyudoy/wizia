import React from "react";
import Section from "../../globalUsesComponetns/Section";
import trainsbg from "../../assets/Home/BG.png";
import check from "../../assets/Home/icon/check.png";

function CheckList({ img, title }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <img src={img} alt="" />
        <p className="text-[16px] md:text-[22px] text-secondaryColor1">
          {title}
        </p>
      </div>
    </>
  );
}

function Trains() {
  return (
    <div className="bg-primaryColor3 py-5">
      <section
        className="bg-no-repeat bg-center bg- py-10 rounded-xl mx-10"
        style={{
          backgroundImage: `url(${trainsbg})`,
        }}
      >
        <div className="container py-5">
          <div className="ml-0 md:ml-[10rem] lg:ml-[14rem]">
            <div>
              <h1 className=" heading2 text-white py-5">
                Train your aiDR on your... <br />
                <span className="text-secondaryColor1">prefered email st|</span>
              </h1>
              <p className=" normalText pb-5 md:pb-8 max-w-[450px]">
                You’re in control. Train your aiDR on elements of your Marketing
                strategy.
              </p>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:max-w-[750px] gap-5 sm:gap-8">
              <CheckList img={check} title="Quick to ramp" />
              <CheckList img={check} title="Easy to optimize" />
              <CheckList img={check} title="Quick to scale up" />
              <CheckList
                img={check}
                title="Works with all your existing tools"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trains;
