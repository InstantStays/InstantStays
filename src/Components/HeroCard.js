import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
import data from "./data";

const HeroCard = () => {
  return (
    <>
      <Container id="hero-card">
        <Cards>
          <Card>
            {data.cardData.map((item, index) => {
              return (
                <div id="maindiv">
                  <Link to="/" target="_blank">
                    <CardBody
                      style={{
                        border: "2px solid #fff",
                        borderRadius: "20px",
                      }}
                    >
                      <img src={item.img} alt="" />
                      <div className="info">
                        <RowOne>
                          <h2>{item.title}</h2>
                        </RowOne>
                        <p
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <BsStar />
                          <strong>{item.rating}</strong>
                        </p>
                      </div>
                    </CardBody>
                  </Link>
                </div>
              );
            })}
          </Card>
        </Cards>
      </Container>
    </>
  );
};

export default HeroCard;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 440px) {
    width: 100%;
  }
`;
const Cards = styled.div``;
const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  #maindiv {
    transition: all 250ms ease;
    // border: 2px solid #fff;
    border-radius: 20px;
    position: relative;
    z-index: 9;
    overflow: hidden;
    :hover {
      // box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.7);
      box-shadow: 2px 2px 15px 0px rgba(255, 255, 255, 0.7);
      transform: translate(-4px, -4px);
    }
    /* ::after {
      content: "";
      position: absolute;
      width: 99%;
      height: 99%;
      border: 2px solid rgba(255, 255, 255, 0.7);
      top: 0;
      left: 0;
      border-radius: 10px;
      transition: all 250ms ease;
      z-index: -1;
    }
    :hover::after {
      width: 101%;
      height: 100%;
      top: 2px;
      left: 0px;
    }*/
  }
`;
const CardBody = styled.div`
  position: relative;
  // height: 270px;
  height: 380px;
  width: 300px;
  border: 2px solid transparent;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 75%;
    opacity: 1;
  }
  .info {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 5%;
    left: 0%;
    p {
      margin: 0 1rem;
      gap: 10px;
    }
  }
`;
const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 1rem;
`;

/* <div>
        {cards.map((card) => (
          <li>
            {card.location}-{card.rating}
          </li>
        ))}
      </div> */
