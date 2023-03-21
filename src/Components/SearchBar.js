import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import data from "./DATA.json";
//https://jsonplaceholder.typicode.com/posts

const SearchBar = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
                    <p>{value.title}</p>
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
  padding: 6rem 4rem;
  background-color: #000;
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
  padding: 3rem 0;
`;
const SearchBarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-left: 5px;
  input {
    width: 40%;
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
`;
const Dropdown = styled.div``;
const DataShow = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
`;
