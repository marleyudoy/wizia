import React from "react";

function Section({ classNm, children }) {
  return (
    <section
      className={`${classNm && classNm} py-[1rem] md:py-[2rem]`}
    >
      {children}
    </section>
  );
}

export default Section;
