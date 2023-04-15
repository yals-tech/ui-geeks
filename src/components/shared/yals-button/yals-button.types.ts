import { ReactNode } from 'react';
import { ValueOf } from '../../../types/common';

export const YALSButtonVariantTypes = {
  Primary: 'primary',
  Secondary: 'secondary',
  Link: 'link',
  Clear: 'clear',
  Light: 'light',
  Dark: 'dark',
  Info: 'info',
  Warning: 'warning',
  Danger: 'danger',
  Success: 'success'
};

export const YALSSizeTypes = {
  Small: 'sm',
  Large: 'lg'
};

export type YALSButtonVariantType = ValueOf<typeof YALSButtonVariantTypes>;
export type YALSSizeType = ValueOf<typeof YALSSizeTypes>;

export interface YALSButtonProps {
  children?: ReactNode | string;
  text?: ReactNode | string;
  className?: string;
  variant?: YALSButtonVariantType;
  outline?: boolean;
  size?: YALSSizeType;
  href?: string;
  title?: string;
  block?: boolean;
  active?: boolean;
  disabled?: boolean;
  noHighlight?: boolean;
  target?: string;
  ariaLabel?: string;
  id?: string;
  onClick?: (evt?: any) => void;
  onMouseMove?: (evt?: any) => void;
}
