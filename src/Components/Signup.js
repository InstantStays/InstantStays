import React from "react";
import LoginText from "./SignupText";
import styled from "styled-components";

const Signup = () => {
  return (
    <>
      <SignupScreen>
        <SignupCard>
          <SignupLeft>
            <img src="/Images/signup.webp" alt="" />
          </SignupLeft>
          <SignupRight>
            <LoginText
              heading="Sign Up"
              text="Enter your details below"
              signUpText="Sign up via Google"
              signupfb="Sign up via Facebook"
            />
            <SignupBtn>Sign up!</SignupBtn>
          </SignupRight>
        </SignupCard>
      </SignupScreen>
    </>
  );
};

export default Signup;
const SignupScreen = styled.div`
  // padding: 4rem;
  overflow-x: none;
`;
const SignupCard = styled.div`
  width: 100%;
  // border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  background-image: linear-gradient(to bottom right, #ffdbac, #b69e7e);
  overflow-x: hidden;
  // height: 100vh;
  gap: 1.5rem;
`;
const SignupLeft = styled.div`
  height: 70vh;
  @media screen and (max-width: 515px) {
    height: 60vh;
  }
`;
const SignupRight = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 0.5rem;
  width: 50%;
  // background-image: linear-gradient(to bottom right, #ffdbac, #b69e7e);
  padding: 2rem;
  @media screen and (max-width: 892px) {
    width: 75%;
  }
  @media screen and (max-width: 515px) {
    width: 100%;
  }
`;
const SignupBtn = styled.button`
  cursor: pointer;
  width: 100%;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 0;
  margin: 1rem 0;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.2px;
  font-size: 1rem;
  transition: all 0.3s ease;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;
