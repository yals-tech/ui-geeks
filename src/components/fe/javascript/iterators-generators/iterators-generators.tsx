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
import { IteratorQuestions } from '../questionnaires/iterator-questionnaire';
import JSGenerators from './generators';
import JSIterables from './iterables';
import JSIterators from './iterators';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Iterators</B> and <B>Generators</B> bring the concept of <Space />
        <I>iteration</I> and provide a mechanism for customizing behavior of
        <Space /> <I>for...of</I> loop.
      </>
    )
  },
  {
    label: (
      <>
        The <B>iterator</B> object implements <B>iterator protocols</B> by
        having <BI>next()</BI> methods. Returns an <I>object</I> with <Space />
        <BI>value</BI> and <BI>done</BI> attributes.
      </>
    )
  },
  {
    label: (
      <>
        The <B>Generator</B> function defines an <I>iterative algorithm</I>,
        whose execution is not continuous. Generator functions use <Space />
        <BI>function*</BI> syntax.
      </>
    )
  },
  {
    label: (
      <>
        The <I>generator function</I> executes until it encounters the <Space />
        <BI>yield</BI> keyword.
      </>
    )
  },
  {
    label: (
      <>
        An object is <B>iterable</B>, if it defines <I>iteration behavior</I> by
        implementing the <BI>@@iterator</BI> method.
      </>
    )
  },
  {
    label: (
      <>
        Iterables which <B>execute once</B>, return <BI>this</BI> from
        <BI>@@iterator</BI>, while one which iterates <B>multiple times</B>
        <Space /> return <B>new iterator</B> from <BI>@@iterator</BI> method.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>next()</BI> method's <I>optional parameter</I> is used to modify
        internal state.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>return()</BI> method is used to return a <I>value</I> and
        <B>terminate</B> the generator.
      </>
    )
  }
];

const JSIteratorsGenerators = () => {
  useDOMTitle('UI-Geeks: JavaScript | Iterators and Generators');

  return (
    <Container>
      <Heading>Iterators and Generators</Heading>

      <Para>
        <BI>Iterators</BI> and <BI>generators</BI> bring the concept of
        <Space /> <I>iteration</I> directly into core language and provide a
        mechanism for customizing the behavior of <I>for…of</I> loop.
      </Para>

      <Para>
        <JSIterators />
        <JSGenerators />
        <JSIterables />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={IteratorQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSIteratorsGenerators);
