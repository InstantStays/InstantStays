import React from "react";
import LoginText from "./SignupText";
import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("SUccess!")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <SignupScreen>
        <SignupCard>
          <SignupLeft>
            <img src="/Images/signup.webp" alt="" />
          </SignupLeft>
          <SignupRight>
            <h1>Sign Up!</h1>
            <p style={{ marginBottom: "1rem" }}>Enter your details below</p>
            <SignUpGoogle onClick={signupWithGoogle}>
              <BsGoogle />
              <h4>Sign up via Google</h4>
            </SignUpGoogle>
            <SignUpFacebook>
              <BsFacebook />
              <h4>Sign up via Facebook</h4>
            </SignUpFacebook>
            <hr
              style={{
                border: "2px solid #808080",
                margin: "8px 0",
                // backgroundColor: "#808080",
              }}
            />
            <InputText>
              <input type="text" placeholder="Enter first name..." />
              <input type="text" placeholder="Enter last name..." />
              <input
                type="email"
                placeholder="Enter email..."
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                id="passowrd"
                placeholder="Enter password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </InputText>
            <AlreadyMemberLogin>
              <p>
                Already a member
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </AlreadyMemberLogin>

            <SignupBtn onClick={createUser}>Sign up!</SignupBtn>
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
    box-shadow: 0 1px 10px 1px #000;
    transform: translateY(-5px);
  }
`;
const SignUpGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #dd4b39;
  color: #dd4b39;
  padding: 10px;
  border-radius: 15px;
  gap: 0.75rem;
  width: 14rem;
  transition: all 300ms ease-in;
  cursor: pointer;
  :hover {
    background-color: #dd4b39;
    color: #fff;
  }
`;
const SignUpFacebook = styled(SignUpGoogle)`
  border: 2px solid #3b5998;
  color: #3b5998;
  margin-bottom: 1rem;
  :hover {
    background-color: #3b5998;
    color: #fff;
  }
`;
const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 1rem 0;
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 12px 10px;
    border: 2px solid white;
    border-radius: 15px;
    transition: all 300ms;
    outline: none;
    width: 100%;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(128, 128, 128, 0.8);
      // font-weight: bold;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(128, 128, 128, 0.7);
      // font-weight: bold;
      opacity: 1;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(128, 128, 128, 0.7);
      // font-weight: bold;
      opacity: 1;
    }
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    // border: 2px solid #ff7f25;
    border: 2px solid #000;
  }
`;

const AlreadyMemberLogin = styled.div`
  p {
    text-align: center;
    span {
      margin-left: 6px;
      text-decoration: underline;
      a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
      }
    }
  }
`;
