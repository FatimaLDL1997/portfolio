import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h2> Page Not Found</h2>
      <a href='/'>
        <button className='back-home-btn'>HOMEPAGE</button>
      </a>
    </div>
  );
};

export default Error;
