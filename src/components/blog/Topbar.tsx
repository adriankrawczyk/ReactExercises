import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  height: 10vh;
  gap: 10vw;
  border-bottom: 3px solid black;
  padding-left: 1vw;
  padding-right: 1vw;
  background-color: #ccc;
`;

function Topbar() {
  return (
    <>
      <TopbarContainer>
        <Link to={"/"}>Witaj</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/dodaj"}>Dodaj</Link>
      </TopbarContainer>
    </>
  );
}

export default Topbar;
