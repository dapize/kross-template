import { IComment } from "@components/Comments";
import { IPost as IPostSingle } from "@components/Post";
import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  id: string;
}
