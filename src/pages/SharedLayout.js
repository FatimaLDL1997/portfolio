import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
import { footerLinks } from "../data";
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <footer className='footer'>
        {footerLinks.map((footerItem) => {
          const { id, url, icon } = footerItem;
          return (
            <a
              key={id}
              className='footer-links'
              href={url}
              rel='noreferrer'
              target='_blank'
            >
              {icon}
            </a>
          );
        })}
      </footer>
    </>
  );
};

export default Home;
