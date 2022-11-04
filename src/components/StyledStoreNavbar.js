import React from "react";

import { motion } from "framer-motion";
import { lineAnimation } from "../animations";
import { BsCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { useGlobalContext } from "../context";
import { useAuth0 } from "@auth0/auth0-react";

const StyledStoreNavbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;
  console.log(isUser);

  const { cartItems } = useGlobalContext();
  return (
    <>
      <div className='log-btn-container'>
        {isUser && user.picture && (
          <img src={user.picture} className='login-img' alt={user.name} />
        )}

        {isUser && user.name && (
          <h4 className='login-text'>
            welcome, <strong>{user.name}!</strong>
          </h4>
        )}
      </div>
      <div className='login-user-info'>
        {isUser ? (
          <button
            className='logout'
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            logout
          </button>
        ) : (
          <button className='login' onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
      <NavLink className='cart-icon' to={"/purchase/checkout"}>
        <BsCartFill />
      </NavLink>

      <h2 className='cart-amount'>{cartItems.length}</h2>

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
