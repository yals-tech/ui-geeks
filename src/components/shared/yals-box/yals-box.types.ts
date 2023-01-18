import { ReactNode } from 'react';

export const YALSBoxThemeStyle = {
  GREEN: 'green',
  ORANGE: 'orange',
  BLUE: 'blue',
  YELLOW: 'yellow'
};
export interface IYALSBoxProps {
  children: ReactNode;
  themeStyle?: string;
}
