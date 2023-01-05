import React, { useState, useEffect } from "react";
import { skills } from "../data";
import { fullScreenAnimation } from "../animations";
import { lineAnimation } from "../animations";
import Skill from "./Skill";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "../styles/homeStyle.css";
import "swiper/css/keyboard";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper";

SwiperCore.use([EffectCoverflow, Keyboard, Pagination, Navigation]);

const categories = ["all", ...new Set(skills.map((item) => item.category))];
const Skills = () => {
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

  const [menuItems, setMenuItems] = useState(skills);

  const filterItems = (item) => {
    if (item === "all") {
      setMenuItems(skills);
      // console.log(menuItems);
      return;
    }
    const newItems = skills.filter((skill) => skill.category === item);
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
            <h2 className='pageTitle'>Skills</h2>
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
                        id={index}
                        key={index}
                      >
                        {item}
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className='section-center-skills'>
              <Swiper
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
                // pagination={{ clickable: true }}
                className='swiper-slide-skills'
              >
                {menuItems.map((skill) => {
                  return (
                    <SwiperSlide key={skill.id}>
                      <Skill {...skill}></Skill>
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

const Wrapper = styled.div`
  .swiper-slide-skills {
    width: 90%;
    padding: 20px;
  }
  .skillItem {
    color: rgb(28, 7, 7);
    background: #faedcd;
    font-style: normal;
    font-family: "Josefin Slab";

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    padding: 0.5rem;

    min-width: 12rem;
    min-height: 13rem;
  }
`;
export default Skills;
