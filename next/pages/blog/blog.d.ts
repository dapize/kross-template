import { ILogo } from "@components/Clients";
import { IPost } from "@components/Posts";

export interface IBlog {
  clientLogos: ILogo[];
  posts: IPost[];
}
