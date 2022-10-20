import React from "react";
import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import { hobbies } from "../data";
import { useState } from "react";
import { useEffect } from "react";

const Checkout = () => {
  const { cartItems, setCartItems } = useGlobalContext();
  const [count, setCount] = useState([]);
  console.log(cartItems);
  // console.log(hobbies);

  const filteredHobbies = hobbies.filter((hobby) =>
    cartItems.includes(hobby.text)
  );
  cartItems.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  // console.log(filteredHobbies[0].text);
  console.log(count);
  useEffect(() => {
    setCount(count);
  }, [cartItems]);
  filteredHobbies.forEach((filteredHobby) => {
    console.log(filteredHobby.text);
  });
  let total = [];
  let sum = 0;
  const getTotal = () => {
    filteredHobbies.map((item, index) => {
      const { id, text, img, price } = item;

      total.push(count[text] * price);
    });
    for (let i = 0; i < total.length; i++) {
      sum += total[i];
      console.log(total);
    }
    return sum;
  };

  return (
    <>
      <div className='checkout-container'>
        {filteredHobbies.map((item, index) => {
          const { id, text, img, price } = item;

          return (
            <>
              <div className='item-container' key={id}>
                <div className='info-container'>
                  <img className='item-img' src={img} alt='' />

                  <div className='item-info'>
                    <h2 className='item-text' key={index}>
                      {text} x{count[text]}
                    </h2>
                    <h4 className='item-details'>
                      {text} ${price}/peice
                    </h4>
                  </div>
                </div>
                <div className='item-price'>${price * count[text]}</div>
              </div>
            </>
          );
        })}
      </div>

      {cartItems.length > 0 && (
        <>
          <div className='total-container'>
            <div className='total-title'>Total</div>
            <div className='total-amount'>${getTotal()}</div>
          </div>
          <div className='purchase-btn-container'>
            <NavLink className='purchase-btn' to={"/payment"}>
              Pay Now
            </NavLink>
          </div>
        </>
      )}
      {cartItems.length == 0 && (
        <h1 className='empty-cart'>Your Cart is Empty!</h1>
      )}
    </>
  );
};

export default Checkout;
