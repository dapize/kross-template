export interface ITestimonial {
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ITestimonials {
  list: ITestimonial[]
}
