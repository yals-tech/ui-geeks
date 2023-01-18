import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import Space from '../space/space';
import './word.scss';
import { IWordProps } from './word.types';

const Word = (props: IWordProps) => {
  const { children, bold, italic, underline, highlight } = props;

  const textClasses = classNames({
    [`${AppPrefix}-text`]: true,
    [`${AppPrefix}-text-bold`]: bold,
    [`${AppPrefix}-text-italic`]: italic,
    [`${AppPrefix}-text-underline`]: underline,
    [`${AppPrefix}-text-highlight`]: highlight
  });

  return (
    <>
      {(bold || !italic) && <Space />}
      <span className={textClasses}>{children}</span>
    </>
  );
};

export default memo(Word);
