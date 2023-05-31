import classNames from 'classnames';
import React, { CSSProperties, memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './para.scss';
import { IParaProps } from './para.types';
const Para = (props: IParaProps) => {
  const { children, textAlign, marginBottom = '0.8rem' } = props;

  const paraClasses = classNames({ [`${AppPrefix}-para`]: true });

  const style: CSSProperties = {
    textAlign: textAlign as 'left',
    marginBottom: marginBottom
  };

  return (
    <div className={paraClasses} style={{ ...style }}>
      {children}
    </div>
  );
};

export default memo(Para);
