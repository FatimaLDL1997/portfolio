import React, { useState, useEffect } from "react";
import { projects } from "../data";
import Project from "./Project";
import { fullScreenAnimation } from "../animations";
import { motion } from "framer-motion";
import { lineAnimation } from "../animations";

import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const categories = ["all", ...new Set(projects.map((item) => item.category))];
const Projects = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const checkSize = () => {
    if (window.innerWidth < 800) {
      setSmallScreen(true);
    } else if (window.innerWidth >= 800) {
      setSmallScreen(false);
    }
    console.log(" " + smallScreen);

    return () => {
      window.removeEventListener("remove", checkSize);
    };
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  const [menuItems, setMenuItems] = useState(projects);

  const filterItems = (item) => {
    if (item === "all") {
      setMenuItems(projects);
      console.log(menuItems);
      return;
    }
    const newItems = projects.filter((project) => project.category === item);
    setMenuItems(newItems);
  };

  return (
    <motion.section
      variants={fullScreenAnimation}
      initial='hidden'
      animate='show'
      className='pageContainer'
    >
      <div className='titleContainer'>
        <h2 className='pageTitle'>Projects</h2>
      </div>
      <motion.hr
        className='line'
        variants={lineAnimation}
        style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
      ></motion.hr>

      <div className='projectsContainer'>
        <div className={`btns-container `}>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            breakpoints={{
              300: {
                slidesPerView: 2,
                width: 300,
              },
              600: {
                slidesPerView: 3,
                width: 600,
              },
              850: {
                slidesPerView: 6,
                width: 850,
              },
            }}
            onSlideChange={() => console.log("slideChange")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {categories.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <button
                    className={"category-btn"}
                    type='button'
                    onClick={() => filterItems(item)}
                    key={index}
                    id={index}
                  >
                    {item}
                  </button>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className='section-center'>
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              823: {
                slidesPerView: 2,
                width: 823,
              },
              // when window width is >= 768px
              850: {
                slidesPerView: 3,
                width: 850,
              },
            }}
            onSlideChange={() => console.log("slideChange")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {menuItems.map((project) => {
              return (
                <SwiperSlide>
                  <Project key={project.id} {...project}></Project>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
