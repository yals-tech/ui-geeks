import classNames from 'classnames';
import React, { CSSProperties, memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { populateId } from '../../../util/util';
import './heading.scss';

const Heading = (props: any) => {
  const { as = 'h1', children, textAlign } = props;

  const headingClasses = classNames({ [`${AppPrefix}-heading`]: true });

  const style: CSSProperties = {
    textAlign: textAlign
  };

  const id = populateId(children);

  return React.createElement(
    as,
    {
      className: headingClasses,
      style,
      id,
      tabIndex: 0
    },
    [...children]
  );
};

export default memo(Heading);
