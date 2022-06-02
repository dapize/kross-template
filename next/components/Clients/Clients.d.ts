import { StaticImageData } from "next/image";

export interface IClients {
  title?: boolean;
}

export interface ILogo {
  image: StaticImageData,
  width: number;
  height: number;
}
