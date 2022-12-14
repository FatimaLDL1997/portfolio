import React, { useState, useEffect } from "react";
import { projects } from "../data";
import Project from "./Project";
import { motion } from "framer-motion";
import { lineAnimation, fullScreenAnimation } from "../animations";

import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styled from "styled-components";

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
    <Wrapper>
      <motion.div
        variants={fullScreenAnimation}
        initial='hidden'
        animate='show'
        className='projects'
      >
        <section initial='hidden' animate='show' className='pageContainer'>
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
                slidesPerView={window.innerWidth < 300 ? 1 : "auto"}
                navigation
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
                className='swiper-slider-container'
                effect={"coverflow"}
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={"auto"}
                watchOverflow={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 10,
                  stretch: 0,
                  depth: 5,
                  modifier: 5,
                  slideShadows: true,
                }}
                keyboard={true}
                navigation
                pagination={{ clickable: true }}
              >
                {menuItems.map((project) => {
                  return (
                    <SwiperSlide key={project.id}>
                      <Project {...project}></Project>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
      </motion.div>
    </Wrapper>
  );
};

export default Projects;
const Wrapper = styled.div`
  .swiper-slider-container {
    width: 90%;
    padding: 20px;
  }
  .project-Item {
    color: rgb(28, 7, 7);
    background: #faedcd;
    font-style: normal;
    font-family: "Josefin Slab";

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // flex-wrap: wrap;

    margin: 0 auto;
    padding: 0.5rem;

    min-width: 12rem;
    min-height: 14rem;
  }
`;
