import { ReactNode } from 'react';

export interface IWordProps {
  children: ReactNode | string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
}
