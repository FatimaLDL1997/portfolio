import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fullScreenAnimation } from "../data";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";

const Home = () => {
  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      console.log("up");
    } else {
      console.log("down");
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
    show: {
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
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };
  const leftToRight = {
    hidden: {
      opacity: 0,
      x: -2000,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      x: 0,
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
  return (
    <motion.section
      variants={fullScreenAnimation}
      initial='hidden'
      animate='show'
      className='pageContainer'
      onWheel={handleScroll}
    >
      <motion.h1 variants={topDown} className='home-title'>
        HELLO
      </motion.h1>
      <motion.h5 variants={downUp} className='subtitle'>
        I am Fatima Labade.
      </motion.h5>
      <motion.h5 variants={leftToRight} className='home-prefession'>
        A Web Developer {"&"} Engineer
      </motion.h5>
      <img src='/images/bg-img.png' className='my-image' alt='' />
      <motion.p variants={fadeInZoom} className='home-discription'></motion.p>
    </motion.section>
  );
};

export default Home;
