import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactClassComponentLifeCycle from './class-comp-lifecycle/class-comp-lifecycle';
import ReactClassErrorHandlingMethods from './class-comp-lifecycle/error-handling-methods';
import ReactClassComponentIntro from './class-component-intro';
import ReactClassComponentProperties from './class-properties';
import ReactClassPropsIntro from './class-props';
import ReactRenderPropsIntro from './render-props-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Class component</B> uses <I>ES6 class</I>, which is <B>extended</B>
        <Space /> by React.Component. It should contain a <BI>render()</BI>
        <Space /> function. The <BI>"this.props.children"</BI> is a special prop
        holding the component's children.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>defaultProps</BI> is set on the class itself, to set the
        <Space /> <B>default values</B> for <BI>undefined</BI> <I>props</I> but
        not for <BI>null</BI> values.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>displayName</BI> is used to give a descriptive name to
        components for debugging purposes.
      </>
    )
  },
  {
    label: (
      <>
        The <B>lifecycle methods</B> are used to run code at particular times in
        the rendering process.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>constructor()</BI> called before <I>mount</I>, should call
        <BI>super(props)</BI> to initialize <B>"this.props"</B>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>static getDerivedStateFromProps()</BI> called before <I>render</I>
        <Space /> on <B>initial</B> and <B>subsequent updates</B>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>render()</BI> is the only <B>required</B> method, should return
        <Space />
        <I>React elements, Arrays/fragments, Portal, string/number, boolean</I>
        <Space /> or <I>null</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>componentDidMount()</BI> is called after <I>mount</I>. DOM
        manipulation, API calls should be made here.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>shouldComponentUpdate()</BI> <B>skips</B> the rendering if this
        method returns <BI>false</BI>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>componentDidUpdate()</BI> is invoked after every update.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>componentWillUnmount()</BI> is called when the component is
        <B>unmounted</B> or destroyed. This is used to <B>clean up</B>
        <Space /> activities.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>getDerivedStateFromError()</BI> and <BI>componentDidCatch()</BI>
        <Space /> are used for handling errors.
      </>
    )
  },
  {
    label: (
      <>
        <B>Render props</B> is a technique to <I>share code</I> between
        components using a <I>prop</I> which is a <I>function</I>.
      </>
    )
  },
  {
    label: (
      <>
        It is not required to name the prop as <B>"render"</B>, instead any
        valid names could be used.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `Define Class Component`,
    description: `Define Class component by extending ES6 class with React.Component`
  },
  {
    topic: `Props to Class Component`,
    description: `Input values passed to the component, read-only`
  },
  {
    topic: `State`,
    description: `Local to component, preserves values between renders`
  },
  {
    topic: `Component Class Properties`,
    description: `defaultProps, displayName properties`
  },
  {
    topic: `Component Lifecycle Methods`,
    description: `constructor, componentDidMount, render, etc`
  },
  {
    topic: `Error Handling Methods`,
    description: `componentDidCatch, getDerivedStateFromError()`
  },
  {
    topic: `Render Props`,
    description: `Sharing code using a prop whose value is a function `
  }
];

const ReactClassComponents = () => {
  useDOMTitle('UI-Geeks: React | Class Component');

  return (
    <Container>
      <YALSPreface list={prefaceList} />
      <Heading>Class Component</Heading>

      <ReactClassComponentIntro />
      <ReactClassPropsIntro />

      <ReactClassComponentProperties />
      <ReactClassComponentLifeCycle />
      <ReactClassErrorHandlingMethods />
      <ReactRenderPropsIntro />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactClassComponents;
