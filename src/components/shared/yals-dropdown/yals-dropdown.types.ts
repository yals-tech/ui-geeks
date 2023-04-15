import { ReactNode } from 'react';

export interface IYALSDropdownItemType {
  text: string;
  value: string | number;
  hint?: string;
}
export interface IYALSDropdownProps {
  id: string;
  label?: string;
  value?: string;
  placeHolder?: string;
  icon?: ReactNode;
  options: Array<IYALSDropdownItemType>;
  onChange?: (evt: any) => void;
}
