import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import Heading from '../heading/heading';
import Para from '../para/para';
import './time-line.scss';
import { ITimeLineItem, ITimeLineProps } from './time-line.types';

const TimeLine = (props: ITimeLineProps) => {
  const { timeLineList, heading } = props;

  const timeLineClasses = classNames({
    [`${AppPrefix}-time-line`]: true
  });

  return (
    <>
      <Para textAlign='center'>
        <Heading as='h2'>{heading}</Heading>
      </Para>

      <div className={timeLineClasses}>
        {timeLineList.map((itm: ITimeLineItem, index: number) => {
          return (
            <div
              key={itm.date}
              className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className='timeStamp'>{itm.date}</div>
              <span className='milestone'>{itm.mileStone}</span>
              <div className='content'>
                <h2>{itm.title}</h2>
                <p>{itm.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(TimeLine);
