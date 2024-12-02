import React from "react";

function TextCard({ classNm, title, description }) {
  return (
    <div>
      {title && <h1 className="heading2 pb-4 text-secondaryColor1 font-bold">{title}</h1>}
      {description && <p className="normalText">{description}</p>}
    </div>
  );
}

export default TextCard;
