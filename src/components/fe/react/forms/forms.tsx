import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactFormDefaultValue from '../components/uncontrolled-component/default-value';

import ReactControlledComponentIntro from '../controlled-component/controlled-components-intro';
import ReactUnControlledComponentIntro from '../uncontrolled-component/uncontrolled-component-intro';

import ReactFormHandlingEvents from './handling-events';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Form elements can be <I>controlled</I> or <I>uncontrolled</I>.
      </>
    )
  },
  {
    label: (
      <>
        In a <I>controlled</I> element, value is controlled by React while in an
        <Space /> <I>uncontrolled</I> element, value is controlled by DOM.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>defaultValue</BI> attribute is used to assign initial values to
        the form elements. Similarly, <I>checkbox, radio</I> elements have
        <BI>defaultChecked</BI> attributes.
      </>
    )
  },
  {
    label: (
      <>
        <B>React events</B> are named using <I>camelCase</I>, and are
        <Space /> <B>functions</B> rather than <I>strings</I>.
      </>
    )
  },
  {
    label: (
      <>
        React defines <B>Synthetic events</B>, following <I>W3C spec</I>, to
        make them <B>cross-browser</B> compatible.
      </>
    )
  }
];

const ReactForms = () => {
  useDOMTitle('UI-Geeks: React | Forms');

  return (
    <Container>
      <Heading>Forms</Heading>
      <Para>
        HTML form elements work a bit differently from other DOM elements in
        React, because form elements naturally keep some internal state.
      </Para>

      <Para>
        <ReactControlledComponentIntro />
        <ReactUnControlledComponentIntro />

        <ReactFormDefaultValue />

        <ReactFormHandlingEvents />
        <YALSSummary items={summaryItems} />
      </Para>
    </Container>
  );
};

export default ReactForms;
