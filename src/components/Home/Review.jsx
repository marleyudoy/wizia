import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Section from "../../globalUsesComponetns/Section";
import qute from "../../assets/Home/icon/qute.svg";
import arrow from "../../assets/Home/icon/arrow.svg";
import { image } from "@nextui-org/react";

function Review() {
  const [isActive, setIsActive] = useState(0);

  const testimonials = [
    {
      image: qute,
      quote:
        "i am student of habluprogrammer.my teacher Eshan Ahmmed Ahad and Tutul. they are good Teacher",
      name: "Sayed Rabiul Haque Udoy",
      position: "Student Of Hablu Programmer",
    },
    {
      image: qute,
      quote:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      position: "Chief Strategy Officer @ Company",
    },
    {
      image: qute,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Jane Doe",
      position: "CEO @ Organization",
    },
  ];
  const swiperRef = useRef(null);
  const handleIsActive = (index) => {
    setIsActive(index);
    swiperRef.current.slideTo(index);
  };
  return (
    <Section classNm="bg-primaryColor3">
      <div className="container relative">
        <div className="w-[90%] mx-auto">
          <Swiper
            // onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div className="h-[55px] w-[55px] grid place-items-center bg-gray-300/10 rounded-full">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <p className="text-[24px] md:text-[32px] text-gray-200 text-center py-5 px-4">
                      {item.quote}
                    </p>
                    <div>
                      <h1 className="text-[18px] md:text-[24px] text-center text-secondaryColor1">
                        {item.name}
                      </h1>
                      <p className="normalText text-center mt-3 !text-gray-400">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* bottom rounded arrow  */}
        <div className="flex items-center justify-center mt-5 gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIsActive(index)}
              className={`w-[8px] h-[8px] ${
                isActive === index ? "bg-secondaryColor1" : "bg-gray-400"
              } rounded-full`}
            ></button>
          ))}
        </div>
        {/* arrow  */}
        <div className="absolute top-[50%] w-full">
          <div className="w-[95%] flex justify-between">
            <button className="w-[40px] next-btn cursor-pointer h-[40px] bg-gray-500/10 grid place-items-center rounded-full">
              {" "}
              <img src={arrow} alt="" />{" "}
            </button>
            <button className="w-[40px] cursor-pointer prev-btn h-[40px] bg-gray-500/10 grid place-items-center rounded-full">
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
