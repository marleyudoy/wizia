import React from "react";
import Section from "../../globalUsesComponetns/Section";
import { home } from "../../constant";
import ServicesCard from "../../globalUsesComponetns/ServicesCard";

function Services() {
  const services = home.services;
  return (
    <Section classNm="bg-primaryColor3">
      <div className="container py-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {services.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default Services;
