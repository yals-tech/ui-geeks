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
import { InheritanceQuestions } from '../questionnaires/inheritance-questionnaire';
import JSInheritingProperties from './inheriting-properties';
import JSPrototypeWithConstructor from './prototype-with-constructor';
import JSPrototypeWithCreate from './prototype-with-create';
import JSPrototypeWithSetPrototypeOf from './prototype-with-setPrototypeOf';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Each <I>object</I> has a private property called <BI>"__proto__"</BI>
        <Space /> called its <B>prototype</B>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>null</BI> value of <BI>__proto__</BI> indicates the end of the
        prototype chain.
      </>
    )
  },
  {
    label: (
      <>
        The <I>prototype</I> can be set by: <BI>Object.setPrototypeOf()</BI>,
        <BI>Object.create()</BI> and by <BI>class</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Some <I>built-in constructors prototype</I> properties are <Space />
        <B>instances themselves</B>. For example: <BI>Number.prototype</BI> is a
        number <B>0 (zero)</B>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Object.setPrototypeOf()</BI> is equivalent to <BI>extends</BI> of
        <Space /> <I>class</I>, allows dynamic manipulation, and has negative
        impact on performance.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Object.create()</BI> <B>reassigns</B> the <I>prototype</I>, allows
        directly setting <I>[[Prototype]]</I>, allows creating objects <Space />
        <B>without</B> <I>prototype</I>, may cause performance issues.
      </>
    )
  }
];

const JSPrototypeChain = () => {
  useDOMTitle('UI-Geeks: JavaScript | Inheritance and the Prototype chain');

  return (
    <Container>
      <Heading>Inheritance and the Prototype chain</Heading>
      <Para>
        When it comes to <I>inheritance</I>, JavaScript has only one construct:
        <BI>Objects</BI>. Each <I>object</I> has a <I>private property</I>
        <Space /> <BI>"__proto__"</BI> which holds a link to another object
        called its <Space /> <BI>prototype</BI>. The <Space /> <I>prototype</I>
        <Space /> object has a <I>prototype</I> of its own, and so on until an
        object is reached with <BI>null</BI> as its <Space />
        <I>prototype</I>. By definition, <BI>null</BI> has no <I>prototype</I>
        <Space /> and acts as the final link in the <BI>
          prototype chain
        </BI>. <Space />
        <I>Classes</I> also use the same <I>inheritance</I> mechanism under the
        hood.
      </Para>

      <Para>
        <JSInheritingProperties />
        <JSPrototypeWithConstructor />
        <JSPrototypeWithSetPrototypeOf />
        <JSPrototypeWithCreate />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={InheritanceQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSPrototypeChain);
