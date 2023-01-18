import { ReactNode } from 'react';
import { IOrderedListItemType } from '../../../types/common';

export interface IYalsSummaryProps {
  label?: string | ReactNode;
  items: Array<IOrderedListItemType>;
}
