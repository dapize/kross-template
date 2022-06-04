export interface IPost {
  image: string;
  title: string;
  description: string;
  url: string;
}

export interface IPosts {
  list: IPost[]
}
