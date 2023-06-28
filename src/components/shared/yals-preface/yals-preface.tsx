import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';
import Heading from '../heading/heading';
import './yals-preface.scss';
import { IDescriptionType, IYalsPrefaceProps } from './yals-preface.types';

const YALSPreface = (props: IYalsPrefaceProps) => {
  const { list } = props;

  const prefaceClasses = classNames({
    [`${AppPrefix}-preface`]: true
  });

  return (
    <div className={prefaceClasses}>
      <Heading as='h4'>We will learn</Heading>
      {list.map((itm: IDescriptionType) => {
        return (
          <div className='item'>
            <div className='topic'>{itm.topic}</div>
            <div className='desc'>{itm.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default YALSPreface;
