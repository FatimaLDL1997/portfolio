import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { topSkills } from "../data";
import {
  topDown,
  fadeIn,
  leftToRight,
  fadeInZoom,
  animateSkill,
  animateSkillItem,
  fullScreenAnimation,
  animateAbout,
  animateAboutItem,
  lineAnimation,
} from "../animations";
const Home = () => {
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
        <motion.h5 variants={leftToRight} className='home-prefession'>
          A Web Developer {"&"} Engineer
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
          I am a Web Developer {"&"} a Mechatronics Engineer. I have strong
          skills in Web Developement and Design as well as in Robotics and
          Embedded Engineering. As a recent graduate, I am looking for a job in
          either field to jumpstart my career.
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
    </section>
  );
};

export default Home;
