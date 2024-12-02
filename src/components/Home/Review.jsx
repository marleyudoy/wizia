import React, { useState } from "react";
import Section from "../../globalUsesComponetns/Section";
import qute from "../../assets/Home/icon/qute.svg";
import arrow from "../../assets/Home/icon/arrow.svg";

function Review() {
  const [isActive, setIsActive] = useState(0);

  const handleIsActive = (value) => {
    setIsActive(value);
  };
  return (
    <Section classNm="bg-primaryColor3">
      <div className="container relative">
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <div className="h-[55px] w-[55px] grid place-items-center bg-gray-300/10 rounded-full">
            <img src={qute} alt="" />
          </div>
          <div>
            <p className="text-[24px] md:text-[32px] text-gray-200 text-center py-5 px-4">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc{" "}
              <br />
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div>
              <h1 className="text-[18px] md:text-[24px] text-center text-secondaryColor1">
                Jhon Doe
              </h1>
              <p className="normalText text-center mt-3 !text-gray-400">
                John Doe Chief Strategy Officer @ Company
              </p>
            </div>
          </div>
        </div>
        {/* bottom rounded arrow  */}
        <div className="flex items-center justify-center mt-5 gap-4">
          <button
            onClick={() => {
              handleIsActive(0);
            }}
            className={`w-[8px] h-[8px] ${
              isActive === 0 ? "bg-secondaryColor1" : "bg-gray-400"
            } rounded-full`}
          ></button>
          <button
            onClick={() => {
              handleIsActive(1);
            }}
            className={`w-[8px] h-[8px] ${
              isActive === 1 ? "bg-secondaryColor1" : "bg-gray-400"
            } rounded-full`}
          ></button>
          <button
            onClick={() => {
              handleIsActive(2);
            }}
            className={`w-[8px] h-[8px] ${
              isActive === 2 ? "bg-secondaryColor1" : "bg-gray-400"
            } rounded-full`}
          ></button>
        </div>
        {/* arrow  */}
        <div className="absolute top-[50%] w-full">
          <div className="w-[95%] flex justify-between">
            <button className="w-[40px] h-[40px] bg-gray-500/10 grid place-items-center rounded-full">
              {" "}
              <img src={arrow} alt="" />{" "}
            </button>
            <button className="w-[40px] h-[40px] bg-gray-500/10 grid place-items-center rounded-full">
              {" "}
              <img src={arrow} className="rotate-[180deg]" alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Review;
