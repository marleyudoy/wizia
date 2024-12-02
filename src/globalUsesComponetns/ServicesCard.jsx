import React from "react";

function ServicesCard({ image, title, description }) {
  return (
    <div className="group hover:shadow-xl transition duration-400 hover:shadow-primaryColor2 hover:outline hover:outline-[0.2px] hover:outline-secondaryColor1/10 rounded-md p-5">
        <img src={image} alt=""  className="group-hover:rotate-[180deg] transition duration-700" />

      <h1 className="text-[24px] md:text-[28px] text-white py-4">{title}</h1>
      <p className="text-[18px] md:text-[22px] text-gray-400 pb-4">
        {description}
      </p>
    </div>
  );
}

export default ServicesCard;
