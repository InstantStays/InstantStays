import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
// import { useAuth0 } from "@auth0/auth0-react";
import { app } from "..//firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);

const Navbar = () => {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <></>;
  // }

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
        console.log("You are logged in");
      } else {
        // user logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

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
          {user === null ? (
            <div>
              <Link to="/login" id="login">
                <Login>Login</Login>
              </Link>
              <Link to="/signup" id="signup">
                <Signup>Sign Up</Signup>
              </Link>
            </div>
          ) : (
            <button onClick={() => signOut(auth)} id="logout">
              Log me out
            </button>
          )}
          {/* {isAuthenticated && (
            <>
              <Info>
                <img src={user.picture} alt={user.name} />
                <p style={{ color: "#000" }}>{user.name}</p>
              </Info>
            </>
          )}
          {isAuthenticated ? (
            <button
              id="logout"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button id="login" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )} */}

          {/* <Link to="/login" id="login">
            <Login>Login</Login>
          </Link>
          <Link to="/signup" id="signup">
            <Signup>Sign Up</Signup>
          </Link> */}
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
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8)
  );
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
    transition: all 250ms ease;
    :hover {
      scale: 4;
    }
  }
`;
const NavbarLinks = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding: 5px 10px;
      position: relative;
      transition: all 200ms ease;
      ::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #000;
        width: 0%;
        height: 2px;
      }
      :hover::after {
        width: 100%;
      }
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;
const LoginSignUp = styled.div`
div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
}
  }
  #logout {
    cursor: pointer;
    padding: 10px 1.4rem;
    border: 2px solid #000;
    border-radius: 20px;
    transition: all 0.2s linear;
    font-weight: bold;
    background-color: transparent;
    width: 120px;
    :focus {
      border: 2px solid #fff;
    }
    :hover {
      background-color: red;
      border: 2px solid red;
      color: #fff;
      box-shadow: 0 1px 5px 0 red;
    }
  }
  
`;
const Login = styled.div`
  border: 2px solid #000;
  padding: 4px 10px;
  border-radius: 10px;
`;
const Signup = styled(Login)``;
const Info = styled.div`
  border: 2px solid #7d7d7d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
  img {
    width: 25px;
  }
`;
