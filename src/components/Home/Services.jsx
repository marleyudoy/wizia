import React from "react";
import Section from "../../globalUsesComponetns/Section";
import { home } from "../../constant";

function Services() {
  const services = home.services;
  return (
    <Section classNm="bg-primaryColor3">
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.id}>hello</div>
        ))}
      </div>
    </Section>
  );
}

export default Services;
