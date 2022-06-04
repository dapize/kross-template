import { ReactNode } from "react";
import { IComment as ICommentBase  } from './Comments.d'

interface IComment extends Omit<ICommentBase, 'content'> {
  children: ReactNode;
  last?: boolean;
}
