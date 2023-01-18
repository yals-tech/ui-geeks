import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import './yals-navigate-btn.scss';
import { IYalsNavigateBtnProps } from './yals-navigate-btn.types';

const YALSNavigateButton = (props: IYalsNavigateBtnProps) => {
  const { to, label, className } = props;

  const navBtnClasses = classNames({
    [`${AppPrefix}-navigate-btn`]: true
  });

  return (
    <span className={navBtnClasses}>
      <Link to={to} className={className}>
        {label}
      </Link>
    </span>
  );
};

export default YALSNavigateButton;
