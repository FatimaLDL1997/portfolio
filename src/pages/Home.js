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

import { HiOutlineExternalLink } from "react-icons/hi";
import { GrFormNextLink } from "react-icons/gr";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "../styles/homeStyle.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import styled from "styled-components";

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
    <Wrapper>
      <section className='homepages-contianer'>
        <motion.div
          className='container-home'
          whileInView='show'
          variants={animateAbout}
          initial='hidden'
          style={{ height: "100vh" }}
        >
          <motion.hr
            className='line'
            variants={lineAnimation}
            style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
          ></motion.hr>
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
              <motion.a
                variants={animateSkillItem}
                className='go-to-skills'
                href='/skills'
              >
                {"->"} See More {"<-"}
              </motion.a>
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
              spaceBetween={30}
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
              className='top-projects-container'
            >
              {topProjects.map((project) => {
                const { text, id, icon, category } = project;
                return (
                  <SwiperSlide key={id}>
                    <div key={id} className='top-project-item'>
                      <div className='projectText'>
                        <div className='projectImgContainer'>
                          <i className='projectImg'>{icon}</i>
                        </div>
                        {text}
                      </div>
                      <a className='go-to' href={`/projects/${id}`}>
                        <HiOutlineExternalLink />
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .top-projects-container {
    width: 90%;
    padding: 20px;
  }
  .top-project-item {
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
export default Home;
