import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { links } from "../data";
import React from "react";

let count = 0;

const Navbar = () => {
  const [pressed, setPressed] = useState(false);
  const [resumeOn, setResumeOn] = useState(false);

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
      <div className='navbar-wrapper'>
        <nav className='navbar'>
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <NavLink className='links' key={id} to={url}>
                {text}
              </NavLink>
            );
          })}
        </nav>
      </div>
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
