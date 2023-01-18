import classNames from 'classnames';
import React from 'react';
import { Badge } from 'react-bootstrap';
import { AppPrefix } from '../../../util/app-constants';
import './yals-badge.scss';
import { IYALSBadgeProps } from './yals-badge.types';

const YALSBadge = (props: IYALSBadgeProps) => {
  const { content, bg } = props;

  const badgeClasses = classNames({
    [`${AppPrefix}-badge`]: true
  });

  return (
    <Badge className={badgeClasses} bg={bg}>
      {content}
    </Badge>
  );
};

export default YALSBadge;
