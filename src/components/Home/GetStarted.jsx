import React from "react";
import Section from "../../globalUsesComponetns/Section";
import vectorarr from "../../assets/Home/icon/vector.png";

function GetStarted() {
  return (
    <Section classNm="bg-primaryColor3">
      <div className="container grid place-items-center pb-4 md:pb-6">
        <h3 className="uppercase normalText text-center !text-secondaryColor1">GET STARTED</h3>
        <h1 className="text-[30px] md:text-[36px] text-center text-white py-4">Embrace the new era of outbound.</h1>
        <p className="max-w-[500px] text-center text-gray-400">
          Wizia lets you train, activate, and optimize aiDRs. Take your outbound
          to new levels of performance and efficiency.
        </p>
        <div>
          <button className="btn bg-secondaryColor1 mt-4 md:mt-6 mx-auto block">
            Sign Up for the Beta
            <img src={vectorarr} className="inline-block ml-1" alt="" />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default GetStarted;
