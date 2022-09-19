import React from "react";
import { motion } from "framer-motion";
import { topSkills, topProjects } from "../data";
import {
  fadeIn,
  fadeInZoom,
  animateSkill,
  animateSkillItem,
  animateAbout,
  animateAboutItem,
  lineAnimation,
} from "../animations";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "../styles/homeStyle.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Home = () => {
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
  });

  return (
    <section className='homepages-contianer'>
      <motion.div
        className='container-home'
        whileInView='show'
        variants={animateAbout}
        initial='hidden'
        style={{ height: "100vh" }}
      >
        <motion.div variants={fadeInZoom} className='hello'>
          HELLO
        </motion.div>
        <motion.h5 variants={fadeIn} className='subtitle'>
          I am Fatima Labade.
        </motion.h5>
        <motion.h5 variants={fadeIn} className='home-prefession'>
          A Web Developer
          {" &"} Engineer
        </motion.h5>
        <div className='pageContainer'>
          <img src='/images/bg-img.png' className='my-image' alt='' />
        </div>
      </motion.div>

      <motion.div
        className='container-home'
        whileInView='show'
        variants={animateAbout}
        initial='hidden'
        style={{ height: "100vh", background: "#404f4f" }}
      >
        <h1 className='subpage-title'>About Me</h1>
        <motion.hr className='line' variants={lineAnimation}></motion.hr>
        <motion.p variants={animateAboutItem} className='home-discription'>
          I am a Web Developer {"&"} a Mechatronics Engineer. I am skilled in
          Web Developement and Design as well as in Robotics and Embedded
          Engineering. As a recent graduate, I am looking for a job in either
          field to jumpstart my career.
        </motion.p>
      </motion.div>

      <motion.div
        className='container-home'
        variants={animateSkill}
        whileInView='show'
        initial='hidden'
        style={{ height: "100vh", background: "#D4A373", bottom: "0" }}
      >
        <motion.h1
          style={{ color: "#404f4f", fontWeight: "900" }}
          variants={animateSkillItem}
          className='subpage-title'
        >
          Top Skills
        </motion.h1>
        <motion.hr
          className='line'
          style={{ color: "#404f4f", height: " 1px", background: "#404f4f" }}
          variants={lineAnimation}
        ></motion.hr>
        <div className='skillContainer'>
          <motion.ul
            variants={animateSkill}
            whileInView='show'
            initial='hidden'
            className='topSkillContainer'
          >
            {topSkills.map((skill) => {
              const { text, id } = skill;
              return (
                <motion.li
                  key={id}
                  variants={animateSkillItem}
                  className='topSkillItem'
                  style={{ color: "#404f4f", fontWeight: "900" }}
                >
                  {text}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div
        className='container-home'
        whileInView='show'
        variants={animateAbout}
        initial='hidden'
        style={{ height: "100vh", background: "#404f4f" }}
      >
        <h1 className='subpage-title'>Top Projects</h1>
        <motion.hr className='line' variants={lineAnimation}></motion.hr>

        <div variants={animateAboutItem} className='top-project-container'>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 6,
              slideShadows: true,
            }}
          >
            {topProjects.map((project) => {
              const { text, id, icon, category } = project;
              return (
                <SwiperSlide key={id}>
                  <a href='' className='topProjectItem'>
                    <div className='image'>{icon}</div>
                    <h1 className='topProjectText'>{text}</h1>
                    <h2 className='topProjectCtgry'>{category}</h2>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
