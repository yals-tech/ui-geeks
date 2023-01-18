import { ReactNode } from 'react';
import { YALSButtonVariantType } from '../yals-button/yals-button.types';

export interface IYALSBadgeProps {
  content: string | ReactNode;
  bg?: YALSButtonVariantType;
}
