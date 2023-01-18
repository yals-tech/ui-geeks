import { ReactNode } from 'react';
import { IMenuItem } from '../navigation-menu/navigation-menu.types';

export interface IHomePageWrapperProps {
  menuLinks: Array<any>;
  menuItems?: Array<IMenuItem>;
  breadcrumbLink?: Array<any>;
  children: ReactNode;
  isCustomHome?: boolean;
  customMenuContent?: ReactNode;
  language: string;
  closeMobileMenuCtr?: number;
}
