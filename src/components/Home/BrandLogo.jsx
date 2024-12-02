import React from "react";
import Section from "../../globalUsesComponetns/Section";
import BackHub from "../../assets/Home/BackHub.svg";
import CableLabs from "../../assets/Home/CableLabs.svg";
import DBS from "../../assets/Home/DBS.svg";
import EasyEuro from "../../assets/Home/EasyEuro.svg";
import AMD from "../../assets/Home/AMD.svg";

function BrandLogo() {
  return (
    <Section classNm="bg-primaryColor2">
      <div className="container grid place-items-center">
        <h1 className="text-secondaryColor1 uppercase text-[16px]">
          our trusted partners
        </h1>
        <div className="grid grid-cols-2 gap-[32px] md:grid-cols-5 mt-5">
          <div className="inline-block">
            <img src={BackHub} alt="" />
          </div>
          <div className="inline-block">
            <img src={CableLabs} alt="" />
          </div>
          <div className="inline-block">
            <img src={DBS} alt="" />
          </div>
          <div className="inline-block">
            <img src={EasyEuro} alt="" />
          </div>
          <div>
            <img src={AMD} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default BrandLogo;
