import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginText from "./LoginText";

const Login = () => {
  return (
    <>
      <Container>
        <RectOne></RectOne>
        {/* <RectTwo></RectTwo> */}
        <RectThree></RectThree>
        <LoginImg>
          <img src="Images/login.webp" alt="" />
        </LoginImg>
        <LoginCard>
          <LoginText
            heading="Login"
            username="Username"
            password="Password"
            forgotPass="Forgot Password?"
          ></LoginText>
        </LoginCard>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  background-color: #7d7b86;
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;
const RectOne = styled.div`
  position: absolute;
  width: 372px;
  height: 407px;
  background-color: rgb(255, 127, 37);
  top: -6%;
  left: 0;
  transform: translate(-14rem) rotateZ(45deg);
`;
const RectTwo = styled.div`
  position: absolute;
  width: 372px;
  height: 407px;
  background-color: #dd4b39;
  bottom: -22%;
  transform: rotate(-30deg);
  left: 40%;
`;
const RectThree = styled.div`
  position: absolute;
  width: 372px;
  height: 550px;
  background-color: rgba(243, 103, 4, 0.5);
  transform: translate(4rem) rotate(-30deg);
  right: -10%;
  top: 7%;
`;
const LoginImg = styled.div`
  position: absolute;
  opacity: 0.4;
`;
const LoginCard = styled.div``;
