import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import './content-loader.scss';

const ContentLoader = () => {
  const contentLoaderClasses = classNames({
    [`${AppPrefix}-content-loader`]: true
  });

  const numArr = Array.from(Array(10).keys());

  return (
    <div className={`${contentLoaderClasses} page-content`}>
      <div className='placeholder-content'>
        {numArr.map((itm) => {
          return <div key={itm} className='placeholder-content_item'></div>;
        })}
      </div>
    </div>
  );
};

export default memo(ContentLoader);
