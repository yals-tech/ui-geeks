export interface IconsProps {
  width?: number;
  height?: number;
  fillColor?: string;
  viewBox?: string;
}

export interface IBaseIconsProps extends IconsProps {
  d: string;
  d2?: string;
}
