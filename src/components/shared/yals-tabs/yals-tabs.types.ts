import { ReactNode } from 'react';

export interface IYalsTabType {
  id: string | number;
  label: string | ReactNode;
  content: string | ReactNode;
  disabled?: boolean;
}
export interface IYalsTabsProps {
  id: string;
  tabs: Array<IYalsTabType>;
  activeTab?: string | number;
  stretch?: boolean;
  fillEvenly?: boolean;
}
