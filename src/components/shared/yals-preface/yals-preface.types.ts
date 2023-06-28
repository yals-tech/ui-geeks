export interface IDescriptionType {
  topic: string;
  description: string;
}

export interface IYalsPrefaceProps {
  label?: string;
  list: Array<IDescriptionType>;
}
