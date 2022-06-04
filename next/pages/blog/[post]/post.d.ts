import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  id: string;
}

export interface IPost {
  title: string;
  image: string;
  date: string;
  author: string;
  category: string;
  content: string;
}
