import { ReactNode } from 'react';

export interface ILinkType {
  label: string | ReactNode;
  link?: string;
}
export interface IYALSBreadcrumbProps {
  items: Array<ILinkType>;
  currentMenuItem?: any;
}
