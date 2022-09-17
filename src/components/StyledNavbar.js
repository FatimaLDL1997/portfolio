import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { links } from "../data";
import { animateNav, animateNavItems } from "../animations";

let count = 0;

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      let navbar = document.querySelector(".navbar");
      let links = document.querySelectorAll(".links");

      if (latest > 100) {
        console.log("here");
        navbar.classList.add("animate-navbar");
        for (const link of links) {
          link.classList.add("animate-links");
        }
      } else {
        navbar.classList.remove("animate-navbar");
        for (const link of links) {
          link.classList.remove("animate-links");
        }
      }
      // console.log("Page scroll: ", latest);
    });
  });

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

  return (
    <>
      <div className='icon-container'>
        <img className='icon' src='/images/FLnewLogo.png' alt='' />
      </div>
      <motion.nav
        className='navbar'
        variants={animateNav}
        initial='hidden'
        whileInView='show'
      >
        {links.map((link) => {
          const { id, url, text } = link;

          return (
            <motion.div key={id} variants={animateNavItems}>
              <NavLink className='links' to={url}>
                {text}
              </NavLink>
            </motion.div>
          );
        })}
      </motion.nav>

      <div className='menuIcon'>
        <AiOutlineMenu onClick={() => handleMenuLink()} />
      </div>
      <motion.div
        className='menuContainer'
        variants={animateNav}
        initial='hidden'
        animate='show'
      >
        <div ref={menuRef} className='menu'>
          <ul className='links'>
            {pressed &&
              links.map((link) => {
                const { id, url, text } = link;

                return (
                  <motion.div key={id} variants={animateNavItems}>
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
                  </motion.div>
                );
              })}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
