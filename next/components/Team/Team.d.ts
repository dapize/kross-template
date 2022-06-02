import { StaticImageData } from 'next/image';

export interface IMember {
  name: string;
  role: string;
  image: StaticImageData;
}
