import React from "react";

function Section({ classNm, backgroundUrl,children }) {
  return (
    <section
      className={`${classNm && classNm} py-[1rem] md:py-[2rem] ${
        backgroundImage && `bg-[url(${backgroundImage})] bg-center bg-no-repeat bg-cover`
      }`}
      style={{
        height: "500px",
        width: "100%"
      }}
    >
      {children}
    </section>
  );
}

export default Section;
