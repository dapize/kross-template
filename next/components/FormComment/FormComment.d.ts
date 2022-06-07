import { IComment } from '@components/Comments';

export interface ICommentRaw {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
}

export interface IFormComment {
  onCommentAdded: ( comment: IComment ) => void
}
