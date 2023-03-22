import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";
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
                        <RowOne>
                          <h2>{item.title}</h2>
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <BsStar />
                            <strong style={{ marginLeft: "10px" }}>4.3</strong>
                          </p>
                        </RowOne>
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
    // overflow: hidden;
    border-radius: 20px;
  }
`;
const CardBody = styled.div`
  position: relative;
  // height: 270px;
  height: 380px;
  width: 300px;
  border: 2px solid grey;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    opacity: 0.8;
  }
  .info {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 5%;
    left: 0%;
    p {
      margin: 0 1rem;
    }
  }
`;
const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

/* <div>
        {cards.map((card) => (
          <li>
            {card.location}-{card.rating}
          </li>
        ))}
      </div> */
