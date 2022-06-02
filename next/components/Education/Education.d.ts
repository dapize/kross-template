export interface ILearning {
  title: string;
  year: number;
  institution: string;
}

export interface IEducation {
  list: ILearning[]
}
