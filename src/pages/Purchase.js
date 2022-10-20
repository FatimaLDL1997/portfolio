import React from "react";
import { useGlobalContext } from "../context";
import { BsCartPlusFill } from "react-icons/bs";
import { hobbies } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/homeStyle.css";

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useState } from "react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Purchase = () => {
  const { cartItems, setCartItems } = useGlobalContext();
  // console.log(data);

  const handlePurchase = (prop) => {
    setCartItems((oldItems) => {
      return [...oldItems, prop];
    });
    console.log(cartItems);
  };

  return (
    <div className='pageContainer'>
      <div className='store-container'>
        {hobbies.map((hobby, index) => {
          const { id, text, img } = hobby;

          return (
            <>
              <div key={index} className='container'>
                <img
                  className='image'
                  src={img}
                  alt={text}
                  onClick={(e) => handlePurchase(e.target.alt)}
                />
                <div className='middle' id={text}>
                  <div className='item-text'>{text}</div>

                  <BsCartPlusFill className='add-icon' />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Purchase;
