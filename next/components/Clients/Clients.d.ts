export interface ILogo {
  image: string,
  width: number;
  height: number;
}

export interface Props {
  title?: boolean;
  logos: ILogo[];
}
