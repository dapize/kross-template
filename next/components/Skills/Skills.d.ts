import { InferGetStaticPropsType } from 'next'

export interface ISkill {
  title: string;
  percentage: number;
  color: string;
}

export interface ISkillsProps {
  list: ISkill[]
}
