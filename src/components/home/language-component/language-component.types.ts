import { ReactNode } from 'react';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';

export interface ILanguageCarousalItemType {
  content: ReactNode | string;
}

export interface ILanguageProp {
  title: ReactNode | string;
  tag: ReactNode | string;
  contentList: Array<ILanguageCarousalItemType>;
  imagePath?: string;
  homePagePath: string;
  theme: string;
  demoComponent?: ReactNode;
  demoLink?: IMenuItem;
}
