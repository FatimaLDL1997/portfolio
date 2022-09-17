import React from "react";
import { motion } from "framer-motion";
import { topSkills, topProjects } from "../data";
import {
  BsArrowDown,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import {
  fadeIn,
  fadeInZoom,
  animateSkill,
  animateSkillItem,
  animateAbout,
  animateAboutItem,
  lineAnimation,
} from "../animations";

const Home = () => {
  const handleLeftScroll = () => {
    let container = document.querySelector(".top-project-container");
    console.log(container);
    container.scrollBy(100, 0);
  };
  const handleRighttScroll = () => {
    let container = document.querySelector(".top-project-container");
    console.log(container);
    container.scrollBy(-100, 0);
  };
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
        <div className='scroll-down'>
          <BsArrowDown />
        </div>
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
          <div className='scroll-container'>
            <div className='left-scroll' onClick={() => handleLeftScroll()}>
              <div className='fixed-container'>
                <BsArrowRightCircleFill />
              </div>
            </div>
            <div className='right-scroll' onClick={() => handleRighttScroll()}>
              <div className='fixed-container'>
                <BsArrowLeftCircleFill />
              </div>
            </div>
          </div>

          {topProjects.map((project) => {
            const { text, id, icon, category } = project;
            return (
              <a
                key={id}
                variants={animateSkillItem}
                className='topProjectItem'
                href={`/projects/${id}`}
              >
                <div className='image'>{icon}</div>
                <h1 className='topProjectText'>{text}</h1>
                <h2 className='topProjectCtgry'>{category}</h2>
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
