import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Topbar from "./Topbar.tsx";
// import { Link } from "react-router-dom";
import { ContentContainer, MainContainer } from "./StyledComponents.ts";
import Article from "./Article.ts";

const Blog: React.FC = () => {
  const [articlesArray, setArticlesArray] = useState<Array<Article>>([]);
  useEffect(() => {
    const articles = localStorage.getItem("articles");
    setArticlesArray(articles ? JSON.parse(articles) : []);
  }, []);
  return (
    <>
      <MainContainer>
        <Topbar />
        <ContentContainer>
          {articlesArray.map((article, index) => {
            return (
              <div key={`${article.title} ${index}`}>
                <h1>{article.title}</h1>
                <h2>{article.body}</h2>
              </div>
            );
          })}
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Blog;
