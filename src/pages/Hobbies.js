import React, { useState, useRef, useEffect } from "react";
import { hobbies } from "../data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { fullScreenAnimation } from "../animations";
import { motion } from "framer-motion";

const Hobbies = () => {
  const [index, setIndex] = useState(1);
  const [clickedLeft, setClickedLeft] = useState(false);
  const [clickedRight, setClickedRight] = useState(false);

  let length = hobbies.length;

  const checkIndex = (number) => {
    if (number > length - 1) {
      return 1;
    }
    if (number < 1) {
      return length - 1;
    }
    return number;
  };

  const nextImage = (e) => {
    e.preventDefault();
    setClickedLeft(false);
    setClickedRight(true);

    setIndex((index) => {
      let newIndex = index + 1;

      return checkIndex(newIndex);
    });
  };

  const prevImage = (e) => {
    e.preventDefault();
    setClickedRight(false);
    setClickedLeft(true);

    setIndex((index) => {
      let newIndex = index - 1;

      return checkIndex(newIndex);
    });
  };
  const [scroll, setScroll] = useState(1);
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 250;
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.addEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <>
      <motion.section
        className=''
        variants={fullScreenAnimation}
        initial='hidden'
        animate='show'
      >
        <div className='titleContainer'>
          <h2 className='pageTitle'>Hobbies</h2>
        </div>
        <h4 className='discription'>
          Painting is the best thing to do as a hobby. To me at least. It is
          like travelling to another world when I lose myself to my colours and
          my brush. Some of my best art and commision work collection is posted
          here.
        </h4>
        <div className={`scroll`}>
          <BsChevronDoubleDown />
        </div>
        <div className='image-carousal'>
          {hobbies.map((hobby) => {
            const { id, text, img } = hobby;
            return (
              <div key={id}>
                {index == id && (
                  <div className='hobbiesContainer'>
                    <h2 className='hobbiesTitle'>{text}</h2>
                    <img
                      className={`hobbiesImg  ${
                        clickedRight
                          ? "animateRight"
                          : clickedLeft
                          ? "animateLeft"
                          : ""
                      }`}
                      src={img}
                      alt=''
                    />
                  </div>
                )}
              </div>
            );
          })}
          <div className={`arrows-show ${scroll ? "" : "arrows-hide"}`}>
            <AiOutlineLeft className='left' onClick={(e) => nextImage(e)} />
            <AiOutlineRight className='right' onClick={(e) => prevImage(e)} />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hobbies;
