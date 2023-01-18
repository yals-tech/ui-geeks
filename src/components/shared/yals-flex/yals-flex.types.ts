import { ReactNode } from 'react';
import { ValueOf } from '../../../types/common';

export const FlexDirectionTypes = {
  Column: 'column',
  Row: 'row'
};

export const FlexJustifyContentTypes = {
  Left: 'left',
  Right: 'right',
  Center: 'center',
  Start: 'start',
  End: 'end',
  SpaceBetween: 'space-between',
  SpaceAround: 'space-around',
  SpaceEvenly: 'space-evenly',
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end'
};

export const FlexAlignItemsTypes = {
  FlexStart: 'flex-start',
  FlexEnd: 'flex-end',
  Center: 'center',
  Start: 'stretch'
};

export type FlexDirectionType = ValueOf<typeof FlexDirectionTypes>;
export type FlexJustifyContentType = ValueOf<typeof FlexJustifyContentTypes>;
export type FlexAlignItemsType = ValueOf<typeof FlexAlignItemsTypes>;

export interface IYALSFlexProps {
  children: ReactNode | string;
  flexDirection?: FlexDirectionType;
  justifyContent?: FlexJustifyContentType;
  alignItems?: FlexAlignItemsType;
  width?: string;
  className?: string;
  bgColor?: string;
  height?: string;
}
