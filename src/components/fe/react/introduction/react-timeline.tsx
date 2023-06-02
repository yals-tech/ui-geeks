import React from 'react';
import { AppPrefix } from '../../../../util/app-constants';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import TimeLine from '../../../shared/time-line/time-line';
import { ITimeLineItem } from '../../../shared/time-line/time-line.types';
import { B, BI } from '../../../shared/util/util';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../../shared/yals-flex/yals-flex.types';
const historyTimeline: Array<ITimeLineItem> = [
  {
    date: 'May, 2013',
    mileStone: 'v0.3',
    title: 'First public release'
  },
  {
    date: 'Oct, 2015',
    mileStone: 'v0.14',
    title: 'Splitted main React package into react and react-dom.',
    description: 'Added stateless function component syntax.'
  },
  {
    date: 'Jul, 2016',
    mileStone: 'v15.3',
    title: '',
    description: (
      <>
        Added <B>React.PureComponent</B>
      </>
    )
  },
  {
    date: 'Nov, 2016',
    mileStone: 'v15.4',
    title: '',
    description: 'Separated React-DOM and distributed as separate package.'
  },
  {
    date: 'Jun, 2017',
    mileStone: 'v15.6',
    title: '',
    description: (
      <>
        Added support for <B>CSS variables in style</B> attribute.
      </>
    )
  },
  {
    date: 'Sep, 2017',
    mileStone: 'v16.0',
    title: '',
    description: (
      <>
        Added <B>Error Boundary</B>
      </>
    )
  },
  {
    date: 'Oct, 2017',
    mileStone: 'v16.6',
    title: 'Added memo(), lazy()',
    description:
      'React.memo() as an alternative to PureComponent and React.lazy() for code splitting.'
  },
  {
    date: 'Feb, 2019',
    mileStone: 'v16.8',
    title: 'Added Hooks',
    description:
      'a way to use state and other React features without writing a class'
  },
  {
    date: 'Aug, 2019',
    mileStone: 'v16.9',
    title: '',
    description: (
      <>
        Added <B>React.Profile</B> API for gathering performance measurements.
      </>
    )
  },
  {
    date: 'Feb, 2020',
    mileStone: 'v16.13',
    title: '',
    description: (
      <>
        Added React <B>Concurrent Mode</B>.
      </>
    )
  },
  {
    date: 'Mar, 2022',
    mileStone: 'v18.0',
    title: '',
    description: (
      <>
        Added <B>useId Hook</B> for generating unique IDs and <Space />
        <BI>enabled automatic batching</BI> of state update.
      </>
    )
  }
];

const ReactTimeline = () => {
  return (
    <>
      <Heading as='h2'>Important Milestones</Heading>

      <YalsFlex
        justifyContent={FlexJustifyContentTypes.Center}
        alignItems={FlexAlignItemsTypes.Center}
        className={`${AppPrefix}-time-line-wrapper`}
      >
        <TimeLine heading='' timeLineList={historyTimeline} />
      </YalsFlex>
    </>
  );
};

export default ReactTimeline;
