import React, { useState } from "react";
import styled from "styled-components";
import Topbar from "./Topbar.tsx";
// import { Link } from "react-router-dom";
import { ContentContainer, MainContainer } from "./StyledComponents.ts";

const Add: React.FC = () => {
  const AddNewArticle = () => {
    const article = { title, body };
    const articles = localStorage.getItem("articles");
    const articleArray = articles ? JSON.parse(articles) : [];
    localStorage.setItem(
      "articles",
      JSON.stringify([...articleArray, article])
    );
  };
  const setDisabled = () => {
    return title.length === 0 || body.length === 0;
  };
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  return (
    <>
      <MainContainer>
        <Topbar />
        <ContentContainer>
          <form>
            <label htmlFor="title">Tytuł</label>
            <br />
            <input
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
            ></input>
            <br />
            <label htmlFor="body">Treść</label>
            <br />
            <textarea
              onChange={(e) => setBody(e.target.value)}
              id="body"
              name="body"
            ></textarea>
            <br />
            <button disabled={setDisabled()} onClick={AddNewArticle}>
              Wyślij
            </button>
          </form>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Add;
