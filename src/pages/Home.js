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
      <h1 className='home-title'>Welcome to My Page!</h1>
      <img src='/images/code-girl.png' className='my-image' alt='' />
      <h5 className='home-discription'>
        I'm a Mechatronics Engineer skilled in web development with a very
        strong background in Robotics programming. I recently graduated in April
        2021 and I am looking for an entry-level engineering job to begin my
        career journey.
      </h5>
      <h5 className='home-discription'>
        I am currently focused on improving my web development skills through
        projects like this website and online courses. My long-term career goal
        is to become a Web Developer, or to work on the design, development and
        programming of sensors and robotics.
      </h5>
    </section>
  );
};

export default Home;
