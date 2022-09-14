import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { links } from "../data";
import React from "react";

let count = 0;

const Navbar = () => {
  const [pressed, setPressed] = useState(false);

  const menuRef = useRef(null);
  useEffect(() => {
    if (!pressed && count >= 1) {
      //count prevents adding anything at first render
      menuRef.current.classList.add("menu-fadeOut");
      menuRef.current.classList.remove("menu-fadeIn");
    } else if (pressed) {
      count++; //only increments after first click
      menuRef.current.classList.add("menu-fadeIn");
      menuRef.current.classList.remove("menu-fadeOut");
    }
  }, [pressed]);

  const handleMenuLink = () => {
    //allow to toggle
    setPressed(!pressed);
    if (!pressed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };
  const animateNav = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
        staggerChildren: 0.35,
      },
    },
    hidden: {
      y: -200,
      opacity: 0,
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 10,
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
    exit: {
      opacity: 0,
      x: 200,
    },
  };
  return (
    <>
      <motion.nav
        variants={animateNav}
        initial='hidden'
        animate='show'
        className='navbar'
      >
        {links.map((link) => {
          const { id, url, text } = link;

          return (
            <NavLink className='links' key={id} to={url}>
              {text}
            </NavLink>
          );
        })}
      </motion.nav>
      <div className='menuIcon'>
        <AiOutlineMenu onClick={() => handleMenuLink()} />
      </div>

      <div className='menuContainer'>
        <div ref={menuRef} className='menu'>
          <ul className='links'>
            {pressed &&
              links.map((link) => {
                const { id, url, text } = link;

                return (
                  <NavLink
                    className='menu-links'
                    key={id}
                    id={id}
                    to={url}
                    onClick={() => {
                      handleMenuLink();
                    }}
                  >
                    {text}
                  </NavLink>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
