import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const handleScroll = (event) => {
    if (event.deltaY < 0) {
      console.log("up");
    } else {
      console.log("down");
    }
  };
  return (
    <section className='pageContainer' onWheel={handleScroll}>
      <h1 className='home-title'>Fatima Labade</h1>
      <h5 className='subtitle'>Web Developer and Engineer</h5>
      <img src='/images/code-girl.png' className='my-image' alt='' />
      <h5 className='home-discription'>
        I am a Mechatronics Engineer skilled in web development with a very
        strong background in Robotics programming. As a recent graduate, I am
        looking for an entry-level engineering job to jumpstart my career.
      </h5>
    </section>
  );
};

export default Home;
