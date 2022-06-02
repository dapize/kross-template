import { StaticImageData } from 'next/image';

export interface IIcon {
  image: StaticImageData;
  width: number;
  height: number;
}

export interface IProcess {
  title: string;
  description: string;
  icon: IIcon
}
