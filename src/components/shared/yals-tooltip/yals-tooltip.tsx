import classNames from 'classnames';
import React, { memo } from 'react';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { AppPrefix } from '../../../util/app-constants';
import './yals-tooltip.scss';
import { IYALSTooltipProps } from './yals-tooltip.types';

const YALSTooltip = (props: IYALSTooltipProps) => {
  const { children, content, placement = 'top', trigger = 'hover' } = props;

  const tooltipClasses = classNames({
    [`${AppPrefix}-tooltip`]: true
  });

  const renderTooltip = (props: any) => <Tooltip {...props}>{content}</Tooltip>;

  return (
    <span>
      <OverlayTrigger
        trigger={trigger}
        placement={placement}
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <span className={tooltipClasses}>{children}</span>
      </OverlayTrigger>
    </span>
  );
};

export default memo(YALSTooltip);
