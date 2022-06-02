export interface IService {
  title: string;
  description: string;
  classIcon: string;
  active?: boolean;
}

export interface IServices {
  list: IService[]
}
