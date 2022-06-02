export interface IFilter {
  title: string;
  value: string;
  active?: boolean;
}

export interface Props {
  list: IFilter[];
  onChange: ( value: string ) => void
}
