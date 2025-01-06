import React from "react";
import styled from "styled-components";
import Topbar from "./Topbar.tsx";
// import { Link } from "react-router-dom";
import { ContentContainer, MainContainer } from "./StyledComponents.ts";

const Home: React.FC = () => (
  <>
    <MainContainer>
      <Topbar />
      <ContentContainer>
        <h1>Witaj na stronie!</h1>
      </ContentContainer>
    </MainContainer>
  </>
);

export default Home;
