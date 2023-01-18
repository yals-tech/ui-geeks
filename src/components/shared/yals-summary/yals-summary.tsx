import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import Heading from '../heading/heading';
import { OrderedList } from '../util/util';
import './yals-summary.scss';
import { IYalsSummaryProps } from './yals-summary.types';

const YALSSummary = (props: IYalsSummaryProps) => {
  const { label = 'Summary', items } = props;

  const summaryClasses = classNames({
    [`${AppPrefix}-summary`]: true
  });

  return (
    <div className={summaryClasses}>
      <Heading as='h4'>{label}</Heading>
      <OrderedList unOrdered items={items} />
    </div>
  );
};

export default YALSSummary;
