import { ReactNode } from 'react';
import { ValueOf } from '../../../types/common';

export const YALSCheckRadioTypes = {
  Radio: 'radio',
  Checkbox: 'checkbox'
};

export type YALSCheckRadioType = ValueOf<typeof YALSCheckRadioTypes>;

export interface IYALSCheckRadioProps {
  type: YALSCheckRadioType | undefined;
  label: string | ReactNode;
  id: string;
  name?: string;
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?: (evt?: any) => void;
}
