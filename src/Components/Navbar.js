import React from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <NavbarMenu>
        <NavbarLogo>
          <Link to="/">
            <img src="/Images/FinalLogoLight.png" alt="" />
          </Link>
        </NavbarLogo>
        <NavbarLinks id="navbarLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </NavbarLinks>
        <AiFillCloseCircle
          style={{ color: "#000", transform: "scale(2)", display: "none" }}
        ></AiFillCloseCircle>
        <LoginSignUp>
          <Link to="/login" id="login">
            <Login>Login Test</Login>
          </Link>
          <Link to="/signup" id="signup">
            <Signup>Sign Up Test</Signup>
          </Link>
        </LoginSignUp>
      </NavbarMenu>
    </>
  );
};

export default Navbar;
const NavbarMenu = styled.div`
  position: relative;
  height: 80px;
  overflow: hidden;
  // background-color: rgba(255, 255, 255, 0.8);
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0.8));
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.75rem 0;
  color: #fff;
  z-index: 9;
  box-shadow: 0 2px 35px 0px grey;
  @media screen and (max-width: 750px) {
    justify-content: space-between;
    padding: 0.75rem;
  }
  @media screen and (max-width: 525px) {
    #navbarLinks {
      display: none;
    }
  }
`;
const NavbarLogo = styled.div`
  img {
    width: 80px;
    scale: 3;
  }
`;
const NavbarLinks = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding: 0 10px;
      ::marker {
        display: none;
      }
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;
const LoginSignUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
`;
const Signup = styled.div``;
const Login = styled.div``;
