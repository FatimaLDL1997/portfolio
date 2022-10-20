import React from "react";

import { motion } from "framer-motion";
import { lineAnimation } from "../animations";
import { NavLink } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsCartFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

const StyledStoreNavbar = () => {
  const { cartItems } = useGlobalContext();
  return (
    <>
      <NavLink className='cart-icon' to={"/purchase/checkout"}>
        <BsCartFill />
      </NavLink>

      <h2 className='cart-amount'>{cartItems.length}</h2>

      <NavLink className='back-icon' to={"/purchase"}>
        <TiArrowBackOutline />
      </NavLink>
      <div className='titleContainer'>
        <h2 className='pageTitle'>My Art Shop</h2>
      </div>
      <motion.hr
        className='line'
        variants={lineAnimation}
        style={{ color: "#404f4f", height: " 1px", background: "#d4a373" }}
      ></motion.hr>
    </>
  );
};

export default StyledStoreNavbar;
