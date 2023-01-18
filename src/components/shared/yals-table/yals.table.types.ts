import { ReactNode } from 'react';
import { YALSSizeType } from '../yals-button/yals-button.types';

export interface YALSTHType {
  column: string;
  label: string | ReactNode;
  width?: string;
}

export interface YALSTDType {
  [column: string]: string | ReactNode;
}

export interface IYAPSTableProps {
  thList: Array<YALSTHType>;
  tdList: Array<YALSTDType>;
  striped?: string | boolean | undefined;
  bordered?: boolean;
  hover?: boolean;
  size?: YALSSizeType;
}
