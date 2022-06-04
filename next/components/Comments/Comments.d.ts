export interface IComment {
  id: number;
  avatar: string;
  author: string;
  date: string;
  content: string;
}

export interface INewComment extends Omit<IComment, 'id'>{}

export interface IComments {
  list: IComment[];
  onCommentAdded: (data: INewComment) => void;
}
