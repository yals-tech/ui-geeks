import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import './text-carousal.scss';
import { ITextCarousalProps } from './text-carousal.types';

const RenderCarousalPager = (props: any) => {
  const { index, totalItems, setContentIndex, uniqueKey } = props;

  const numArr = Array.from(Array(totalItems).keys());

  const onHandleClick = (ind: number) => {
    setContentIndex(() => ind);
  };

  return (
    <YalsFlex
      className='carousal-pager'
      justifyContent={FlexJustifyContentTypes.Center}
      alignItems={FlexAlignItemsTypes.Center}
    >
      {numArr.map((itm: number) => {
        return (
          <div
            key={`${uniqueKey}-${itm}`}
            onClick={onHandleClick.bind(this, itm)}
            className={`circle ${itm === index ? 'circle-current' : ''}`}
          ></div>
        );
      })}
    </YalsFlex>
  );
};
const TextCarousal = (props: ITextCarousalProps) => {
  const { contentList, uniqueKey = '' } = props;

  const textCarousalClasses = classNames({
    [`${AppPrefix}-text-carousal`]: true
  });

  const [contentIndex, setContentIndex] = useState(0);
  const [intervalRef, setIntervalRef] = useState(0);

  const incrementIndex = () => {
    setContentIndex((prev: number) => {
      let index = prev;
      if (index === contentList.length - 1) {
        index = -1;
      }
      return index + 1;
    });
  };

  useEffect(() => {
    const timerRef = window.setInterval(() => {
      incrementIndex();
    }, 5000);

    setIntervalRef(timerRef);

    return () => {
      if (intervalRef) {
        window.clearInterval(intervalRef);
      }
    };
  }, []);

  return (
    <YalsFlex
      className={textCarousalClasses}
      justifyContent={FlexJustifyContentTypes.SpaceBetween}
      flexDirection={FlexDirectionTypes.Column}
    >
      <div key={`item-${contentIndex}`}>
        {contentList[contentIndex].content}
      </div>

      <RenderCarousalPager
        index={contentIndex}
        totalItems={contentList.length}
        uniqueKey={uniqueKey}
        setContentIndex={setContentIndex}
      />
    </YalsFlex>
  );
};

export default memo(TextCarousal);
