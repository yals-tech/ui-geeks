import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './yals-box.scss';
import { IYALSBoxProps } from './yals-box.types';

const YALSBox = (props: IYALSBoxProps) => {
  const { children, themeStyle = '' } = props;
  const shareClasses = classNames({
    [`${AppPrefix}-box`]: true,
    [`theme-${themeStyle}`]: themeStyle
  });

  return <div className={shareClasses}>{children}</div>;
};

export default YALSBox;
