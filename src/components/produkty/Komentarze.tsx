import React, { useState, useEffect } from "react";
import Comment from "./Comment.ts";
import Komentarz from "./Komentarz.tsx";

function Komentarze() {
  const [comments, setComments] = useState<Array<Comment>>([]);
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((res) => {
        setComments(res.comments);
      });
  }, []);

  return (
    <>
      <div>
        {comments.map((comment: Comment) => {
          return <Komentarz comment={comment} key={comment.id} />;
        })}
      </div>
    </>
  );
}

export default Komentarze;
