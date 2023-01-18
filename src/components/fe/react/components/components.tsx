import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactClassComponentIntro from '../class-components/class-component-intro';
import ReactLifeCyclePhases from '../lifecycle/react-phases';

import ReactFunctionComponents from './function-components';
import ReactProps from './props/props';
import ReactState from './state/state';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Components</B> split the UI into <I>independent</I>, <Space />
        <I>reusable pieces</I>. Components accept input <BI>props</BI> and
        return <I>React elements</I>.
      </>
    )
  },
  {
    label: (
      <>
        React provides <B>Function Components</B> and <B>Class Components</B>.
      </>
    )
  },
  {
    label: (
      <>
        Component <B>names</B> should start with a <B>Capital</B> letter.
      </>
    )
  },
  {
    label: (
      <>
        <B>Class component</B> uses <I>ES6 class</I>, which is <B>extended</B>
        <Space /> by <BI>React.Component</BI>. It should contain a <Space />
        <BI>render()</BI> function. The <BI>"this.props.children"</BI> is a
        special prop holding the component's children.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Props</BI> is the input object, these are <B>read-only</B>
        <Space /> properties.
      </>
    )
  },
  {
    label: (
      <>
        <I>Pure functions</I> <B>do not</B> modify input values while <Space />
        <I>impure functions</I> do.
      </>
    )
  },
  {
    label: (
      <>
        <BI>State</BI> is <B>local</B> to components, which <B>preserve</B>
        <Space /> values between multiple renders.
      </>
    )
  },
  {
    label: (
      <>
        React follows <B>uni-directional</B> data flow, where <BI>state</BI> is
        passed from <I>parent</I> to <I>child</I> component.
      </>
    )
  },
  {
    label: (
      <>
        Every component goes through the <I>Mounting</I>, <I>Updating</I> and
        <Space /> <I>Unmounting</I> Phase.
      </>
    )
  }
];

const ReactComponents = () => {
  useDOMTitle('UI-Geeks: React | Components');

  return (
    <Container>
      <Heading>Components</Heading>
      <Para>
        Components let us split the UI into independent, reusable pieces, and
        think about each piece in isolation. Conceptually, components are like
        JavaScript <I>functions</I>. They accept arbitrary <B>inputs</B> (called
        <Space /> <BI>"props"</BI>) and return <BI>React elements</BI>.
      </Para>

      <Para>
        React provides two types of components:
        <OrderedList
          items={[
            { label: 'Function Components' },
            { label: 'Class Components' }
          ]}
        />
      </Para>

      <Para>
        <ReactFunctionComponents />
        <Heading as='h2'>Class Component</Heading>
        <ReactClassComponentIntro />
        <ReactProps />
        <ReactState />
        <ReactLifeCyclePhases />
      </Para>

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactComponents;
