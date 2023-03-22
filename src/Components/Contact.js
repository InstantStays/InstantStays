import React from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Container>
        <Heading>
          <h1>contact us</h1>
        </Heading>
        <Cont>
          <Left>
            <form action="" method="get">
              <Inputs>
                <InputOne>
                  <label htmlFor="name">Name</label>
                  <input type="text" minLength={4} maxLength={50} required />
                </InputOne>
                <InputOne>
                  <label htmlFor="email">Email</label>
                  <input type="email" minLength={10} maxLength={50} required />
                </InputOne>
                <InputOne>
                  <label htmlFor="Message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </InputOne>
              </Inputs>
            </form>
          </Left>
          <Right>
            <Phnumber>
              <BsFillTelephoneFill />
              <h2>Phone Number</h2>
              <a href="tel:9524755711">+91 9730556126</a>
            </Phnumber>
            <Email>
              <FiMail />
              <h2>Email</h2>
              <a href="mailto: vednande10@gmail.com">instantstays@gmail.com</a>
            </Email>
          </Right>
        </Cont>
        <Btn>
          <button>Submit </button>
        </Btn>
      </Container>
    </>
  );
};

export default Contact;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 2rem;
  color: #fff;
  background-image: linear-gradient(
      90deg,
      rgba(208, 119, 15, 0.96) 0%,
      rgba(210, 126, 27, 0) 100%
    ),
    linear-gradient(rgb(210, 126, 27), rgba(209, 121, 18, 0.51)),
    linear-gradient(to right, rgba(239, 2, 2, 0.2), rgba(239, 2, 2, 0.4)),
    linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
`;
const Heading = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 2.5rem;
  }
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0 4rem 0;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const Left = styled.div`
  border-right: 2px solid #fff;
  padding-right: 4rem;
  width: 55%;
  @media screen and (max-width: 1000px) {
    border-right: none;
    padding: 0 0 4rem 0;
    border-bottom: 2px solid #fff;
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Phnumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
  }
`;
const Email = styled(Phnumber)``;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputOne = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 10px;
  }
  input {
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    height: 31px;
    color: #fff;
    // padding-left: 10px;
    padding: 20px 0 20px 20px;
  }
  textarea {
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    color: #fff;
    padding: 10px 20px;
  }
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    font-size: 1.5rem;
    letter-spacing: 1px;
    border-radius: 20px;
    background-color: #ff7f25;
    border: none;
    font-weight: bold;
    width: 400px;
    padding: 0.9rem 0;
    box-shadow: 0 0 10px #ff7f25;
    transition: all 300ms ease-out;
    :hover {
      background-color: #000;
      box-shadow: 0 0 10px #fff;
      color: #fff;
    }
  }
`;
