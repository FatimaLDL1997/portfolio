import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { BsCartPlusFill } from "react-icons/bs";
import { hobbies } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth0 } from "@auth0/auth0-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/homeStyle.css";

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

const categories = ["all", ...new Set(hobbies.map((item) => item.category))];

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Purchase = () => {
  const { cartItems, setCartItems } = useGlobalContext();

  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;

  const handlePurchase = (prop) => {
    setCartItems((oldItems) => {
      return [...oldItems, prop];
    });
    console.log(cartItems);
  };
  const [menuItems, setMenuItems] = useState(hobbies);

  const filterItems = (item) => {
    if (item === "all") {
      setMenuItems(hobbies);
      console.log(menuItems);
      return;
    }
    const newItems = hobbies.filter((hobby) => hobby.category === item);
    setMenuItems(newItems);
  };

  return (
    <div className='pageContainer'>
      <div
        className='btn-container'
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: "3rem",
        }}
      >
        {categories.map((item, index) => {
          return (
            <button
              className='hobby-ctgry-btn'
              style={{ flexDirection: "row" }}
              key={index}
              onClick={() => {
                filterItems(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className='store-container'>
        {menuItems.map((hobby, index) => {
          const { id, text, img } = hobby;

          return (
            <div key={index} className='store-img-container'>
              <img className='image' src={img} alt={text} />
              <div
                className='middle'
                id={text}
                onClick={(e) => handlePurchase(e.target.parentElement.id)}
              >
                +<h1 className='item-text'>+</h1>
              </div>
            </div>
          );
        })}
      </div>
      <p className='form-question'>Have a question?</p>
      <form
        className='form'
        action='https://formspree.io/f/myyvnpwj'
        method='POST'
      >
        <div className='form-container'>
          <div className='email-container'>
            <input
              type='email'
              placeholder='name@mail.com'
              className='form-input'
              name='_replyto'
            />
          </div>
          <small className='form-text'>
            your email will not be shared with anyone else
          </small>
          <textarea
            name='message'
            className='form-text-area'
            placeholder='Hey there! I have a question about...'
          ></textarea>
          <div className='submit-btn-container'>
            <button type='submit' className='submit-btn'>
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Purchase;
