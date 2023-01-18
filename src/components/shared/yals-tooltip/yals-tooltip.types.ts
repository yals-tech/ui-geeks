import { ReactNode } from 'react';
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';
import { Placement } from 'react-bootstrap/esm/types';

export interface IYALSTooltipProps {
  children: ReactNode | string;
  content: ReactNode | string;
  placement?: Placement;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
}
