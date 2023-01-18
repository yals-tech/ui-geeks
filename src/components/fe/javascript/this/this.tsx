import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ThisQuestions } from '../questionnaires/this-questionnaire';
import JSValueOfThis from './value-of-this/value-of-this';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        The value of <BI>this</BI> is the property of an execution context
        <I>(Global, function or eval)</I>.
      </>
    )
  },
  {
    label: (
      <>
        In the browser, <BI>this</BI> in <B>global</B> context refers to the
        <BI>window</BI> object.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>call()</BI>, <BI>apply()</BI> and <BI>bind()</BI> methods can be
        used to set <BI>this</BI> for <I>function context</I>.
      </>
    )
  },
  {
    label: (
      <>
        When a function is created from an existing function by presetting
        parameters, it is called <B>function currying</B>.
      </>
    )
  },
  {
    label: (
      <>
        In the <I>class constructor</I>, <BI>this</BI> is a <Space />
        <I>regular object</I> with all <I>non-static</I> members.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>new</BI> operator creates an instance of a <I>user defined</I>
        <Space /> object that has a <I>constructor function</I>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Classes</BI> can only be instantiated with the <BI>new</BI>
        <Space /> operator.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>"new.target"</BI> tells whether a function is called with a
        <Space /> <BI>new</BI> operator or not.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Symbol()</BI> and <BI>BigInt()</BI> can only be called without a
        <Space /> <BI>new</BI> <Space /> operator.
      </>
    )
  },
  {
    label: (
      <>
        With event handlers, <BI>this</BI> is set to the <B>DOM</B> element.
      </>
    )
  }
];

const JSThis = () => {
  useDOMTitle('UI-Geeks: JavaScript | The "this" keyword');

  return (
    <Container>
      <Heading>The "this" keyword</Heading>
      <Para>
        In most cases, the value of <BI>this</BI> is determined by how a
        function is called <I>(runtime binding)</I>. It can't be set by the
        assignment during execution and it may be different each time the
        function is called.
      </Para>

      <Para>
        <JSValueOfThis />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ThisQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSThis);
