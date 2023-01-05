import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { GiCrossedAirFlows, GiMagnifyingGlass } from "react-icons/gi";
import { lineAnimation, fullScreenAnimation } from "../animations";
import { motion, wrapHandler } from "framer-motion";
import { useEffect, useState } from "react";

import { hobbies } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/homeStyle.css";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Hobbies = () => {
  const [scroll, setScroll] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  // const [hovered, setHovered] = useState(false);

  const [modalContent, setModalContent] = useState(null);

  const handleExpand = (e) => {
    let image = e.currentTarget.parentElement.parentElement.children[1].src;
    setModalOpen(!modalOpen);
    setModalContent(image);
    // console.log(modalContent);
  };
  const handleHover = (e) => {
    e.currentTarget.children[0].classList.add("cover-text-show");
    e.currentTarget.classList.add("item-img-blur");
    // console.log(e.currentTarget);
  };
  const handleOutHover = (e) => {
    e.currentTarget.children[0].classList.remove("cover-text-show");
    e.currentTarget.classList.remove("item-img-blur");
    // console.log(e.currentTarget);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.addEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <>
      <Wrapper>
        <motion.section
          // className=''
          variants={fullScreenAnimation}
          initial='hidden'
          animate='show'
        >
          <div className='titleContainer'>
            <h2 className='pageTitle'>Hobbies</h2>
          </div>
          <motion.hr
            className='line'
            variants={lineAnimation}
            style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
          ></motion.hr>
          <h4 className='discription'>
            Painting is the best thing to do as a hobby. To me at least. It is
            like travelling to another world when I lose myself to my colours
            and my brush. Some of my best art and commision work collection is
            posted here.
          </h4>
          <div className={`scroll`}>
            <BsChevronDoubleDown />
          </div>
          <div className='image-carousal'>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              spaceBetween={100}
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
              className='swiper-slide-hobbies'
            >
              {hobbies.map((hobby) => {
                const { id, text, img } = hobby;

                return (
                  <SwiperSlide key={id} className='item'>
                    <div
                      onMouseLeave={(e) => handleOutHover(e)}
                      onMouseEnter={(e) => {
                        handleHover(e);
                      }}
                    >
                      <h1 className='cover-text'>
                        <GiMagnifyingGlass
                          onClick={(e) => {
                            handleExpand(e);
                          }}
                        />
                      </h1>

                      <img className='item-img' src={img} alt={text} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {modalOpen ? (
              <div className='modal'>
                <div className='exit-icon-container'>
                  <div className='exit-icon'>
                    <GiCrossedAirFlows
                      onClick={() => setModalOpen(!modalOpen)}
                    />
                  </div>
                </div>
                <img
                  className='modal-img'
                  src={modalContent != null ? modalContent : ""}
                  alt=''
                />
              </div>
            ) : (
              <h1></h1>
            )}
            <div className='purchase-btn-container'>
              <a
                className='purchase-btn'
                href={"https://art-store-fatima.netlify.app"}
              >
                Buy a Print/Original
              </a>
            </div>
          </div>
        </motion.section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .swiper-slide-hobbies {
    width: 90%;
    padding: 20px;
  }
  .exit-icon-container {
    display: flex;
    justify-content: flex-end;
    width: 60vw;
  }
  .exit-icon {
    font-size: 2rem;
    position: relative;
    cursor: pointer;
    color: #faedcd;
  }
  .exit-icon:hover {
    color: #e0c98f;
  }
  .modal-container {
    width: 100vw;
    height: 100vh;

    top: 0;
    // background: red;
    position: absolute;
    // z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    width: 100vw;
    height: 100vh;

    // background: green;
    top: 0;

    position: fixed;
    z-index: 11;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #506363b3;
  }
  .modal-img {
    height: 70vh;
    width: auto;
  }
  .item {
    background: #faedcd;
    margin: 0 auto;

    width: 30vw;

    height: 100%;
    min-height: 14rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .cover-text {
    position: absolute;
    z-index: 10 !important;

    font-size: 4rem;
    color: black;
    top: 26%;
    width: 100%;
    height: fit-content;

    opacity: 0;
    text-align: center;
  }

  .cover-text-show {
    opacity: 1;
    cursor: pointer;
    color: #faedcd;
  }
  .cover-text-show:hover {
    color: #e0c98f;
  }

  .item-img-blur {
    // cursor: pointer;
    // webkit-filter: blur(4px); /* Chrome, Safari, Opera */
    // filter: blur(4px);
    opacity: 0.8;
  }
`;
export default Hobbies;
