import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <RowOne>
            <input type="text" />
            <Btn>
              <button>Register Your Place</button>
            </Btn>
          </RowOne>
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
    rgba(255, 105, 0, 0) 58.91%
  );

  border-radius: 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const RowOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.div``;
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
