interface User {
  userId: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: string;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export default Comment;
