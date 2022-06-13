import { IComment } from "@components/Comments";
import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  id: string;
}
