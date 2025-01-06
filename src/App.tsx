import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/blog/Home.tsx";
import "./index.css";
import Add from "./components/blog/Add.tsx";
import Blog from "./components/blog/Blog.tsx";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/dodaj" element={<Add />} />
    </Routes>
  </BrowserRouter>
);

export default App;
