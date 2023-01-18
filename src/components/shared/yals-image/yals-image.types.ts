import { FlexJustifyContentType } from '../yals-flex/yals-flex.types';

export interface IYALSImageProps {
  imagePath: string;
  alt: string;
  height?: string;
  width?: string;
  imageTitle?: string;
  imageAlign?: FlexJustifyContentType;
}
