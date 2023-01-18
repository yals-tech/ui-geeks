import { ReactNode } from 'react';

export interface ITimeLineItem {
  date: string;
  mileStone: string;
  title: string;
  description?: string | ReactNode;
}
export interface ITimeLineProps {
  timeLineList: Array<ITimeLineItem>;
  heading: string;
}
