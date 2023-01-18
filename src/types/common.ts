import { ReactNode } from 'react';

export type ValueOf<T> = T[keyof T];

export const TextAlignTypes = {
  Left: 'left',
  Right: 'right',
  Center: 'center',
  Justify: 'justify',
  Start: 'start'
};

export type TextAlignType = ValueOf<typeof TextAlignTypes>;

export interface IScriptTagProps {
  children?: ReactNode | string;
  closing?: boolean;
}

export interface IIndentProps {
  children?: ReactNode | string;
  indent?: number;
}

export interface IOrderedListItemType {
  label: ReactNode | string;
  items?: Array<IOrderedListItemType>;
}

export interface IOrderedListProps {
  items: Array<IOrderedListItemType>;
  unOrdered?: boolean;
  expanded?: boolean;
}

export interface ILabelURLType {
  url: string;
  label: string | ReactNode;
}

export interface IMenuTreeItemType {
  label: string;
  children: Array<ILabelURLType>;
}

export interface ILinkTreeType {
  label: string;
  link: string;
  tags: Array<string>;
  children?: Array<ILabelURLType>;
}
