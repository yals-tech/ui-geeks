import React, { memo } from 'react';
import { AppPrefix } from '../../../../util/app-constants';
import TimeLine from '../../../shared/time-line/time-line';
import { ITimeLineItem } from '../../../shared/time-line/time-line.types';

const JSVersionTimeLine = () => {
  const historyTimeline: Array<ITimeLineItem> = [
    {
      date: 'June, 1997',
      mileStone: 'ES1',
      title: 'First edition'
    },
    {
      date: 'June, 1998',
      mileStone: 'ES2',
      title: 'Editorial Changes',
      description: 'Alignment with ISO/IEC 16262 standard'
    },
    {
      date: 'Dec, 1999',
      mileStone: 'ES3',
      title: 'RegExp, Exception Handling',
      description:
        'Added RegExp, better string handling, try/catch, number formatting, new control statements, etc.'
    },
    {
      date: '',
      mileStone: 'ES4',
      title: 'Fourth edition was abandoned',
      description:
        'Abandoned, due to political differences concerning language complexity.'
    },
    {
      date: 'Dec, 2009',
      mileStone: 'ES5',
      title: '"strict mode", getter, JSON',
      description:
        'Added "strict mode", getter-setter, JSON support and reflection of object properties.'
    },
    {
      date: 'June, 2011',
      mileStone: 'ES5.1',
      title: 'Alignment with ISO/IEC 16262:2011'
    },
    {
      date: 'June, 2015',
      mileStone: 'ES6',
      title: 'class, modules, let, template literals',
      description:
        'ECMAScript 2015, added let, const, for...of, maps, sets, WeakMap, promises, etc.'
    },
    {
      date: 'June, 2016',
      mileStone: 'ES7',
      title: 'Block-scope, destructuring, async/await',
      description:
        'Added exponential operator (**),  Array.prototype.includes(), async/await for async programming.'
    },
    {
      date: 'June, 2017',
      mileStone: 'ES8',
      title: 'Object.values, Object.entries',
      description:
        'async/await constructions which use generators and promises, getOwnPropertyDescriptors'
    },
    {
      date: 'June, 2018',
      mileStone: 'ES9',
      title: 'Spread operator and Rest parameters (...), finally',
      description: 'Added Promise.prototype.finally and updates to RegExp.'
    },
    {
      date: 'June, 2019',
      mileStone: 'ES10',
      title: 'catch binding became optional, Array.sort() became stable',
      description:
        'Added flat(), flatMap() to Array, modified Object.fromEntries.'
    },
    {
      date: 'June, 2020',
      mileStone: 'ES11',
      title: 'BigInt, nullish coalescing (??) and globalThis',
      description: 'Added optional chaining (?) for nested objects.'
    },
    {
      date: 'June, 2021',
      mileStone: 'ES12',
      title: 'replaceAll() for string, Promise.any, AggregateError, WeakRef',
      description:
        'Added logical assignment operators (??=, &&= , ||=), Array.sort() made more precise.'
    },
    {
      date: 'June, 2022',
      mileStone: 'ES13',
      title: 'at(), top level await, error.cause',
      description: 'Better regular expression indexing, Added at() to object.'
    }
  ];

  return (
    <div className={`${AppPrefix}-time-line-wrapper`}>
      <TimeLine heading='ECMAScript Versions' timeLineList={historyTimeline} />
    </div>
  );
};

export default memo(JSVersionTimeLine);
