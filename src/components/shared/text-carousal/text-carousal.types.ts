import { ReactNode } from 'react';

export interface ITextCarousalItemType {
  content: ReactNode | string;
}

export interface ITextCarousalProps {
  contentList: Array<ITextCarousalItemType>;
  uniqueKey: string;
}
