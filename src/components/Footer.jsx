import React from "react";
import Section from "../globalUsesComponetns/Section";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <Section classNm="bg-[#07292F]">
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <p className="text-[14px] md:text-[16px] text-gray-400">
            Copyright © 2023 Wizia. All rights reserved.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
