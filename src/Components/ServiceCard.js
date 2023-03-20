import React from "react";
import styled from "styled-components";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const ServiceCard = (props) => {
  return (
    <>
      <Container>
        <Card>
          <BsFillCalendarCheckFill style={{ transform: "scale(2)" }} />
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
        </Card>
      </Container>
    </>
  );
};

export default ServiceCard;
// svg heading para
const Container = styled.div``;
const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  border: 2px solid #873309;
  border-radius: 20px;
  overflow: hidden;
  height: 350px;
  width: 300px;
  h2 {
    font-size: 1.7rem;
    border-bottom: 2px solid #fff;
    padding: 0 0 10px 0;
  }
  p {
    line-height: 1.2;
    text-align: left;
  }
`;
