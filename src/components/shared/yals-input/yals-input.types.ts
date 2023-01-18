import { ReactNode } from 'react';

export interface IYALSInputProps {
  id: string;
  label?: string;
  value?: string | number;
  placeHolder?: string;
  icon?: ReactNode;
  type?: string;
  size?: 'sm' | 'lg';
  onChange?: (evt: any) => void;
  onKeyUp?: (evt: any) => void;
}
