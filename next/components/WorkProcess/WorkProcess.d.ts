export interface IIcon {
  image: string;
  width: number;
  height: number;
}

export interface IProcess {
  title: string;
  description: string;
  icon: IIcon
}

export interface Props {
  list: IProcess[]
}
