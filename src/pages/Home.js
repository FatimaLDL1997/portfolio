import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fullScreenAnimation } from "../data";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";

const Home = () => {
  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      // console.log("up");
    } else {
      // console.log("down");
    }
  };
  const topDown = {
    hidden: {
      opacity: 0,
      y: -2000,
      transition: {
        when: "afterChildren",
      },
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  const downUp = {
    hidden: {
      opacity: 0,
      y: 2000,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      opacity: [0, 1],
      y: [0, 2],
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  const leftToRight = {
    hidden: {
      opacity: 0,
      x: "10vw",
      transition: {
        when: "afterChildren",
      },
    },

    show: {
      opacity: 1,
      x: "10vw",
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  const fadeInZoom = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      scale: [0.5, 1],
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  const animateSkill = {
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const animateSkillItem = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },

    show: {
      opacity: 1,
    },
  };
  return (
    <section
      // variants={fullScreenAnimation}
      // initial='hidden'
      style={{ display: "inline-block", margin: "0", wordSpacing: "0" }}
      onWheel={handleScroll}
    >
      <motion.div
        className='page1'
        style={{
          position: "relative",
          marginTop: "0",
          paddingTop: "0",
          // width: "100vw",
          height: "100vh",
        }}
      >
        <motion.div
          variants={fadeInZoom}
          whileInView='show'
          className='home-title'
        >
          HELLO
        </motion.div>
        <motion.h5 variants={downUp} whileInView='show' className='subtitle'>
          I am Fatima Labade.
        </motion.h5>
        <motion.h5
          variants={leftToRight}
          whileInView='show'
          className='home-prefession'
        >
          - A Web Developer {"&"} Engineer
        </motion.h5>
        <div className='pageContainer'>
          <img src='/images/bg-img.png' className='my-image' alt='' />
        </div>
      </motion.div>
      <motion.div
        className='container-home'
        style={{ height: "100vh", width: "100vw", background: "#404f4f" }}
      >
        <motion.h1
          variants={fadeInZoom}
          whileInView='show'
          className='home-title'
          style={{
            paddingBottom: "3rem",
            paddingTop: "0",
            textDecoration: "underline",
          }}
        >
          About Me
        </motion.h1>

        <motion.p
          variants={downUp}
          whileInView='show'
          className='home-discription'
          style={{ textAlign: "justify", color: "wheat" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quis
          inventore, eveniet voluptatem praesentium repellendus iusto, quos
          deleniti reiciendis aut enim veritatis possimus, voluptate
          repudiandae. Illo harum numquam reiciendis laboriosam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Et explicabo repellendus
          rem at maxime consectetur blanditiis qui, accusamus ex delectus
          necessitatibus deleniti! Doloribus reprehenderit dolorum a labore
          atque inventore ea!
        </motion.p>
      </motion.div>
      <motion.div
        className='container-home'
        style={{ height: "100vh", width: "100vw", background: "grey" }}
      >
        <motion.h1
          variants={fadeInZoom}
          whileInView='show'
          className='home-title'
          style={{
            top: "0",
            position: "relative",
            textDecoration: "underline",
          }}
        >
          Top Skills
        </motion.h1>
        <div className='skillContainer'>
          <motion.ul
            whileInView='show'
            variants={animateSkill}
            initial='hidden'
            style={{
              listStyleType: "none",
              textAlign: "center",
              padding: "0",
              marginLeft: "0",
            }}
          >
            <motion.li
              whileInView='show'
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              React
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              JS
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              HTML
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              CSS
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              C language
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              C++ language
            </motion.li>
            <motion.li
              variants={animateSkillItem}
              style={{ padding: "0", marginLeft: "0" }}
            >
              Arduino
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
