export interface IComment {
  id: number;
  avatar: string;
  author: string;
  date: string;
  content: string;
}

export interface IComments {
  postId: number;
}
