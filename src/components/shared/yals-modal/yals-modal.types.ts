import { ReactNode } from 'react';

export interface IYALSModalProps {
  show: boolean;
  fullScreen?: boolean | undefined;
  modalHeader: string | ReactNode;
  modalContent: string | ReactNode;
  onHide: () => void;
}
