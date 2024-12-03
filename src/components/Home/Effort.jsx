import React from "react";
import Section from "../../globalUsesComponetns/Section";
import TextCard from "../../globalUsesComponetns/TextCard";

function Effort() {
  return (
    <div className="bg-primaryColor3 py-5">
      <section
        className="bg-cover bg-center bg-no-repeat mx-10 rounded-[20px] py-5"
        style={{
          backgroundImage: `url('./BG2.png')`,
        }}
      >
        <div className="container ">
          <div className="px-2 md:px-5">
            <h1 className="text-[28px] md:text-[32px] text-white max-w-[450px]">
              Allocate effort where your reps make an inpact.
            </h1>
            <h1 className="text-[24px] md:text-[28px] text-secondaryColor1 pb-4 italic">
              Let us handle the rest.
            </h1>
            <p className="normalText max-w-[550px]">
              Keep your reps “in the air” -- out in the field and on the phone
              where they can build relationships.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 mt-8 md:mt-16 max-w-[600px] px-2 md:px-5">
            <TextCard title="32%" description="Improvement in Open Rates" />
            <TextCard title="32%" description="Improvement in Open Rates" />
            <TextCard title="32%" description="Improvement in Open Rates" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Effort;
