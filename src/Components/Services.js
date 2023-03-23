import React from "react";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";

const Services = () => {
  return (
    <>
      <Container>
        <Heading>
          <h1>our core services</h1>
        </Heading>
        <Desc>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </Desc>
        <Cards>
          <ServiceCard
            icon="<BsFillCalendarCheckFill/>"
            heading="Anytime Booking"
            para="InstantStays provides anytime booking service which is a convenient way to reserve services or products at any time, without being limited to specific hours or days."
          />
          <ServiceCard
            heading="Accommodation at Minimal Cost"
            para="Free lodging service is a fantastic option for those who want to travel or need a temporary place to stay without breaking the bank."
          />
          <ServiceCard
            heading="Deterring Scams"
            para="InstantStays is a reputable and established hotel website. We have legitimate reviews by users which make it possible to reserve a suitable hotel. "
          />
          <ServiceCard
            heading="Exposure to unexplored rest houses"
            para="InstantStays provides an exposure to unexplored rest houses. We have the information of hotels that are located in remote and rural areas."
          />
          <ServiceCard
            heading="Commercial Exposure"
            para="InstantStays provides a commercial exposure to the user."
          />
        </Cards>
      </Container>
    </>
  );
};

export default Services;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-image: linear-gradient(
      152deg,
      rgba(208, 119, 15, 0.96) 0%,
      rgba(210, 126, 27, 0) 100%
    ),
    linear-gradient(to bottom, rgb(239, 2, 2), rgba(239, 2, 2, 0.7));
  display: flex;
  flex-direction: column;
  color: #fff;
`;
const Heading = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 2.5rem;
  }
`;
const Desc = styled.div`
  margin: 1rem 0;
  p {
    text-align: center;
    font-size: 1.6rem;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;
// rgb(239, 2, 2)
// background: linear-gradient(152deg, rgba(208,119,15,0.96) 0%, rgba(210,126,27,0) 100%);
