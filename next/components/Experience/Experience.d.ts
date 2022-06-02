export interface IExperience {
  period: string;
  title: string;
  company: string;
  icon: string;
}

export interface Props {
  list: IExperience[]
}
