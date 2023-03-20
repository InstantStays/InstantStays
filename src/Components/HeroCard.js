import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "./data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const HeroCard = (props) => {
  return (
    <>
      <Container>
        <Cards>
          <Card>
            {data.cardData.map((item, index) => {
              return (
                <div id="maindiv">
                  <Link to="/" target="_blank">
                    <CardBody>
                      <img src={item.img} alt="" />
                      <div className="info">
                        <h3>{item.title}</h3>
                        <p>Card Description</p>
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
    overflow: hidden;
  }
`;
const CardBody = styled.div`
  position: relative;
  height: 270px;
  width: 300px;
  border: 2px solid grey;
  img {
    width: 100%;
    opacity: 0.8;
  }
  .info {
    position: absolute;
    color: grey;
    bottom: 5%;
    left: 10%;
  }
`;

/* <div>
        {cards.map((card) => (
          <li>
            {card.location}-{card.rating}
          </li>
        ))}
      </div> */
