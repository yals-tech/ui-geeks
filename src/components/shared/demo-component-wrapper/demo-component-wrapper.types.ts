import { ReactNode } from 'react';
import { IYalsTabType } from '../yals-tabs/yals-tabs.types';

export interface IDemComponentItemType {
  id: number;
  label?: string | ReactNode;
  codeLanguage?: string;
  tabs: Array<IYalsTabType>;
  moreDetail?: {
    label: string;
    link: string;
  };
}
export interface IDemoWrapperProps {
  demoComponentList: Array<IDemComponentItemType>;
  homePage?: string;
  homePageLabel?: string;
  language: string;
}

export const DemoViewType = {
  VIEW: 'view',
  CODE: 'code'
};
