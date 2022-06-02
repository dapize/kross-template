import { StaticImageData } from 'next/image';

export interface IExperience {
  period: string;
  title: string;
  company: string;
  icon: StaticImageData;
}
