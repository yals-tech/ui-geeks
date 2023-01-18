import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './container.scss';

const Container = (props: any) => {
  const { children } = props;

  const containerClasses = classNames({ [`${AppPrefix}-container`]: true });

  return <div className={containerClasses}>{children}</div>;
};

export default memo(Container);
