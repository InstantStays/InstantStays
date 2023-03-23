import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
// import data from "./DATA.json";
import OpenCardData from "./CARD_OUTER_INFO.json";
//https://jsonplaceholder.typicode.com/posts

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = OpenCardData.filter((value) => {
      return value.location.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <>
      <Container>
        <MainContainer>
          <SearchBarInput>
            <input
              type="text"
              placeholder="Enter place..."
              onChange={handleFilter}
            />
            <BsSearch
              style={{
                color: "#fff",
                transform: "scale(2)",
                cursor: "pointer",
              }}
            />
            <Dropdown></Dropdown>
          </SearchBarInput>
          {filteredData.length != 0 && (
            <DataShow>
              {filteredData.map((value, key) => {
                return (
                  <Link to={value.link} target="_blank">
                    <SearchedCard>
                      {/* <p>{value.title}</p> */}
                      <img src={value.image} alt="" />
                      <Content>
                        <Row>
                          <h3>{value.place_name}</h3>
                          <div
                            style={{
                              display: "flex",
                              gap: "0.75rem",
                              alignItems: "center",
                              fontSize: "1.4rem",
                            }}
                          >
                            <BsFillStarFill
                              style={{ transform: "scale(1.1)" }}
                            />
                            <strong>{value.rating}</strong>
                          </div>
                        </Row>
                        {/* <RowTwo>
                          <strong>{value.rate}</strong>
                        </RowTwo> */}
                      </Content>
                      <Price>
                        <h3>{value.price}</h3>
                      </Price>
                    </SearchedCard>
                  </Link>
                );
              })}
            </DataShow>
          )}
        </MainContainer>
      </Container>
    </>
  );
};

export default SearchBar;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 4rem 6rem 4rem;
  background-color: #000;
  overflow-x: hidden;
  position: fixed;
  @media screen and (max-width: 516px) {
    padding: 2rem 2rem 4rem 2rem;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  /* background: linear-gradient(
    155.82deg, 
    rgba(235, 101, 7, 0.864107) 0%,
    #ff6900 0%,
    #ff6900 0.01%,
    rgba(241, 102, 5, 0.619838) 4.64%,
    rgba(243, 103, 4, 0.499167) 10.83%,
    rgba(246, 104, 3, 0.390893) 29.64%,
    rgba(255, 105, 0, 0) 95.91%
  );*/
  border-radius: 25px;
  // height: 100vh;
  display: block;
  // padding: 3rem 0;
  margin: 3rem 0;
`;
const SearchBarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-left: 5px;
  input {
    width: 80%;
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
  @media screen and (max-width: 881px) {
    input {
      ::placeholder {
        padding-left: 0px;
      }
    }
  }
`;
const Dropdown = styled.div``;
const DataShow = styled.div`
  display: grid;
  margin: 4rem 0;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 4rem 1rem;
  overflow: hidden;
  padding: 2rem 0;
  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease-out;
    :hover {
      transform: scale(1.04);
    }
  }
  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 881px) {
    grid-template-columns: 1fr;
  }
`;
const SearchedCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  width: 350px;
  height: 425px;
  gap: 1rem;
  border-radius: 20px;
  overflow: hidden;
  transition: all 250ms ease;
  img {
    width: 100%;
    height: 100%; 
    object-fit: fill;
  }
  :hover {
    box-shadow: 0 0 20px 5px #fff;
  }
`;
const Content = styled.div`
  margin: 0.75rem 10px;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  h3 {
    font-size: 1.6rem;
  }
  div {
    strong {
      font-size: 1.1rem;
    }
  }
`;
const RowTwo = styled.div`
  strong {
    font-size: 1.4rem;
    letter-spacing: 1.2px;
  }
`;
const Price = styled.div`
  margin: 0.75rem 0;
`;
