import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import styled from "styled-components";
import loginImg from "../../src/login.png";

const Login = () => {
  return (
    // <Wrapper>
    <div className='container'>
      <img src={loginImg} style={{ width: "11rem" }} alt='' />
    </div>
    // </Wrapper>
  );
};

export default Login;
