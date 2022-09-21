import React from "react";
import { hobbies } from "../data";
import { BsChevronDoubleDown } from "react-icons/bs";
import { fullScreenAnimation } from "../animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/homeStyle.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Hobbies = () => {
  const [index, setIndex] = useState(1);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);

  let length = hobbies.length;

  const checkIndex = (number) => {
    if (number > length - 1) {
      return 1;
    }
    if (number < 1) {
      return length - 1;
    }
    return number;
  };

  const [scroll, setScroll] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.addEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <>
      <motion.section
        className=''
        variants={fullScreenAnimation}
        initial='hidden'
        animate='show'
      >
        <div className='titleContainer'>
          <h2 className='pageTitle'>Hobbies</h2>
        </div>
        <hr
          className='line'
          style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
        ></hr>
        <h4 className='discription'>
          Painting is the best thing to do as a hobby. To me at least. It is
          like travelling to another world when I lose myself to my colours and
          my brush. Some of my best art and commision work collection is posted
          here.
        </h4>
        <div className={`scroll`}>
          <BsChevronDoubleDown />
        </div>
        <div className='image-carousal'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 20,
              modifier: 4,
              slideShadows: true,
            }}
            keyboard={true}
            navigation
            className='swiper-slide-hobbies'
          >
            {hobbies.map((hobby) => {
              const { id, text, img } = hobby;

              return (
                <SwiperSlide key={id}>
                  <img src={img} alt={text} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.section>
    </>
  );
};

export default Hobbies;
