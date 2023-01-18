import React from 'react';
import { IOrderedListItemType } from '../../../../../types/common';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, OrderedList } from '../../../../shared/util/util';
import ReactClassMountLifeCycleMethods from './class-mount-lifecycle';
import ReactClassUnmountLifeCycleMethods from './class-unmount-lifecycle';
import ReactClassUpdateLifeCycleMethods from './class-update-lifecycle';

const classLifeCycleMethodList: Array<IOrderedListItemType> = [
  {
    label: 'Mounting',
    items: [
      {
        label: <B>constructor()</B>
      },
      {
        label: 'static getDerivedStateFromProps()'
      },
      {
        label: <B>render()</B>
      },
      {
        label: <B>componentDidMount()</B>
      }
    ]
  },
  {
    label: 'Update',
    items: [
      {
        label: 'static getDerivedStateFromProps()'
      },
      {
        label: 'shouldComponentUpdate()'
      },
      {
        label: <B>render()</B>
      },
      {
        label: 'getSnapshotBeforeUpdate()'
      },
      {
        label: <B>componentDidUpdate()</B>
      }
    ]
  },
  {
    label: 'Unmounting',
    items: [
      {
        label: <B>componentWillUnmount()</B>
      }
    ]
  },
  {
    label: 'Error Handling',
    items: [
      {
        label: 'static getDerivedStateFromError()'
      },
      {
        label: 'componentDidCatch()'
      }
    ]
  }
];

const ReactClassComponentLifeCycle = () => {
  return (
    <>
      <Heading as='h2'>Lifecycle Methods</Heading>
      <Para>
        Each component has several <B>"lifecycle methods"</B> that we can
        override to run code at particular times in the process. Lifecycle
        methods can be grouped by the phases. Methods marked in
        <Space /> <B>bold</B> are commonly used methods.
      </Para>

      <OrderedList unOrdered items={classLifeCycleMethodList} />

      <Para>Lets learn about each lifecycle method in detail.</Para>

      <Para>
        <ReactClassMountLifeCycleMethods />
        <ReactClassUpdateLifeCycleMethods />
        <ReactClassUnmountLifeCycleMethods />
      </Para>
    </>
  );
};

export default ReactClassComponentLifeCycle;
