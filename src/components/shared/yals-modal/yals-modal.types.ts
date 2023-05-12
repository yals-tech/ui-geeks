import { ReactNode } from 'react';
import { YALSSizeType } from '../yals-button/yals-button.types';

export interface IYALSModalProps {
  show: boolean;
  fullScreen?: boolean | undefined;
  modalHeader: string | ReactNode;
  modalContent: string | ReactNode;
  size?: YALSSizeType;
  onHide: () => void;
}
