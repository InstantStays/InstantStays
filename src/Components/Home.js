import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";
import HeroCard from "./HeroCard";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Container>
        <MainContainer>
          <RowOne>
            <Link to="/searchbar">
              <input
                id="searchInput"
                type="text"
                placeholder="Search destination..."
              />
            </Link>
            <Link
              to="/register"
              style={{ width: "100%", display: "flex", textDecoration: "none" }}
            >
              <Btn>
                <button>
                  <BsHouseDoorFill />
                  Register Place
                </button>
              </Btn>
            </Link>
          </RowOne>
          {isAuthenticated ? (
            <RowTwo>
              <h2>Hello {user.name}</h2>
            </RowTwo>
          ) : (
            <RowTwo>
              <h2>Hello Guest</h2>
            </RowTwo>
          )}
          {/*<RowTwo>
            <h2>Hello </h2>
          </RowTwo>*/}
          <RowThree>
            <HeroCard />
          </RowThree>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #000;
`;
const MainContainer = styled.div`
  width: 100%;
  /* background: linear-gradient(
    152deg,
    rgba(255, 105, 0) 0%,
    rgba(241, 102, 5) 10%,
    rgba(255, 106, 0) 25%,
    rgba(246, 104, 3) 25%, 
    rgba(255, 105, 0) 25%,
    rgb(0, 0, 0) 80%
  );*/
  background: linear-gradient(
    155.82deg,
    rgba(235, 101, 7, 0.864107) 0%,
    #ff6900 0%,
    #ff6900 0.01%,
    rgba(241, 102, 5, 0.619838) 4.64%,
    rgba(243, 103, 4, 0.499167) 10.83%,
    rgba(246, 104, 3, 0.390893) 29.64%,
    rgba(255, 105, 0, 0) 95.91%
  );
  border-radius: 25px;
  // height: 100vh;
  display: block;
  padding: 3rem 0;
  // display: flex;
  // flex-direction: column;
`;
const RowOne = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 9fr 3fr;
  grid-gap: 4rem;
  :first-child {
    justify-items: flex-end;
  }
  :nth-child(2) {
    justify-items: flex-start;
  }
  a {
    width: 80%;
    height: fit-content;
    input {
      width: 100%;
      border-radius: 20px;
      outline: none;
      border: none;
      padding: 1rem;
      font-weight: bold;
      letter-spacing: 1.2px;
      ::placeholder {
        color: #000;
        padding-left: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    jusitfy-content: center;
    gap: 0.5rem;
    grid-template-columns: 8fr 6fr;
    margin: 0 10px;
    :first-child {
      justify-items: flex-start;
    }
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    grid-template-columns: 8fr 6fr;
    margin: 0 10px;
    :first-child {
      justify-items: center;
    }
    a {
      margin: 10px 0;
    }
  }
`;
const Btn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.5);
    height: 60px;
    width: 200px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: bold;
  }
`;
const RowTwo = styled.div`
  padding-left: 4rem;
  margin: 2rem 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  h2 {
    letter-spacing: 2.5px;
  }
`;

const RowThree = styled.div``;

/* 
  Main content me jaega background-image: linear-gradient(
    to bottom right, 
    rgba(255, 105, 0, 1) 2%,
    rgba(241, 102, 5, 0.61),
    rgba(243, 103, 4, 0.49),
    rgba(246, 104, 3, 0.39),
    rgba(0, 0, 0, 1)
  );
  // rgba(255, 105, 0, 0)
  */
