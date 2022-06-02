import { IFilter } from './Filters.d';

export interface IProject {
  image: string;
  groups?: string[];
}

export interface IPortfolio {
  title?: boolean;
  filters?: boolean | IFilter[];
  projects: IProject[]
}
