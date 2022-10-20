import React from "react";
import { Outlet } from "react-router-dom";
import { footerLinks } from "../data";
import StyledStoreNavbar from "../components/StyledStoreNavbar";

const SharedShopLayout = () => {
  return (
    <>
      <StyledStoreNavbar />
      <Outlet />

      <footer className='bottom-footer'>
        <img src='/images/FLnewLogo.png' className='logo-bottom' alt='' />
        <h1>
          Made with love by <span>Fatima Labade</span> from scratch
        </h1>
        <h2>© 2022 FATIMALABADE - ALL RIGHTS RESERVED</h2>
      </footer>
    </>
  );
};

export default SharedShopLayout;
