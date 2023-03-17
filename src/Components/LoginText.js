import React from "react";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const LoginText = (props) => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default LoginText;
const Container = styled.div`
  color: #fff;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  height: 100%;
  width: 80%;
  margin: 4rem auto;
  h2 {
    font-size: 3rem;
    text-align: center;
  }
`;
