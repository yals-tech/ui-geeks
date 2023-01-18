import { ReactNode } from 'react';

export interface IMenuItem {
  url: string;
  label: string;
  group?: string;
}

export interface INavigationMenuProps {
  menuList: Array<IMenuItem>;
  menuTitle?: string | ReactNode;
  menuLinks?: Array<any>;
  showMainLinkOnly?: boolean;
  onMenuClick?: (menuItem?: IMenuItem) => void;
}
