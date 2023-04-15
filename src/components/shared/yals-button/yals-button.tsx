import classNames from 'classnames';
import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import { AppPrefix } from '../../../util/app-constants';
import './yals-button.scss';
import { YALSButtonProps, YALSSizeTypes } from './yals-button.types';

const YALSButton = (props: YALSButtonProps) => {
  const {
    children,
    className,
    variant,
    outline,
    size = YALSSizeTypes.Small,
    href,
    title,
    block,
    active,
    disabled,
    noHighlight = false,
    target,
    ariaLabel = href,
    id,
    onClick,
    onMouseMove
  } = props;

  const buttonClasses = classNames({
    [`${AppPrefix}-btn`]: true,
    [`${className}`]: className
  });

  const btnWrapperClasses = classNames({
    ['d-grid gap-2']: block,
    ['btn-no-highlight']: noHighlight
  });

  return (
    <span className={btnWrapperClasses}>
      <Button
        href={href}
        target={target}
        size={size as 'sm'}
        className={buttonClasses}
        variant={`${outline ? 'outline-' : ''}${variant}`}
        onClick={onClick}
        title={title}
        tabIndex={0}
        active={active}
        id={id}
        disabled={disabled}
        onMouseMove={onMouseMove && onMouseMove}
        aria-label={ariaLabel}
      >
        {children}
      </Button>
    </span>
  );
};

export default memo(YALSButton);
