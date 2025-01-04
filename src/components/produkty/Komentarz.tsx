import React, { useEffect, useState } from "react";
import Comment from "./Comment.ts";
import styled from "styled-components";
const CommentBlock = styled.div`
  border: 2px solid black;
  margin: 50px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
  font-family: Georgia, serif;
`;

const Id = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
`;
const Body = styled.div`
  font-size: 32px;
`;

const Likes = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 24px;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const UserBox = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
`;

const Like = styled.div<{ $rotated?: boolean; $active?: boolean }>`
  border: 2px solid black;
  border-radius: 10%;
  font-size: 24px;
  width: 32px;
  height: 32px;
  text-align: center;
  vertical-align: middle;
  line-height: 32px;
  background-color: ${({ $active }) =>
    $active ? "rgb(200,255,255)" : "rgb(64,255,255)"};
  transform: rotate(${({ $rotated }) => ($rotated ? "180deg" : "0deg")});
`;
const LikeCounter = styled.div`
  text-align: center;
  vertical-align: middle;
  line-height: 24px;
  height: 32px;
`;
function Komentarz({ comment }: { comment: Comment }) {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);
  const {
    id,
    body,
    postId,
    likes,
    user: { userId, username, fullName },
  } = comment;

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  const like = () => {
    if (!liked) {
      let toAdd = 1;
      if (disliked) {
        toAdd++;
        setDisliked(false);
      }
      setLikeCount((l) => l + toAdd);
      setLiked(true);
    } else {
      setLikeCount((l) => l - 1);
      setLiked(false);
    }
  };

  const dislike = () => {
    if (!disliked) {
      let toSubstract = 1;
      if (liked) {
        toSubstract++;
        setLiked(false);
      }
      setLikeCount((l) => l - toSubstract);
      setDisliked(true);
    } else {
      setLikeCount((l) => l + 1);
      setDisliked(false);
    }
  };

  return (
    <>
      <CommentBlock>
        <UserBox>{username}</UserBox>
        <Id>{id}</Id>
        <Body>{body}</Body>

        <Likes>
          <Like onClick={like} $rotated={false} $active={liked}>
            👍
          </Like>
          <LikeCounter>{likeCount}</LikeCounter>
          <Like onClick={dislike} $rotated={true} $active={disliked}>
            👍
          </Like>
        </Likes>
      </CommentBlock>
    </>
  );
}

export default Komentarz;
