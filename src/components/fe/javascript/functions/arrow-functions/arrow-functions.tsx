import React from 'react';
import useDOMTitle from '../../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../../types/common';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';
import YalsQuestionnaire from '../../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../../shared/yals-summary/yals-summary';
import { ArrowFunctionQuestions } from '../../questionnaires/arrow-func-questionnaire';
import JSArrowFunctionsParsingOrder from './af-parsing-order';
import JSArrowFunctionsArgumentBinding from './argument-binding';
import JSArrowFunctionsLineBreaks from './arrow-function-line-breaks';
import JSArrowFunctionsIntro from './arrow-functions-intro';
import JSArrowFunctionsAsClassField from './as-class-field';
import JSArrowFunctionsLimitations from './limitations';
import JSArrowFunctionsReturningObject from './returning-object-literal';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        In arrow function, <BI>"this"</BI> refers to the lexical context's
        <BI>"this"</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions don't have their own bindings to <Space />
        <BI>this, arguments</BI> or <BI>super</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions are not suitable for <BI>call, apply</BI> and
        <Space /> <BI>bind</BI> methods.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions can't be used as <BI>constructor</BI> and they do not
        have a <BI>prototype</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions can be declared with <B>block</B> or <B>concise</B>
        <Space /> body.
      </>
    )
  },
  {
    label: (
      <>
        Parentheses around <I>arguments</I> are needed for: more than one
        argument, <I>rest parameters</I> and <I>default parameters</I>.
      </>
    )
  },
  {
    label: (
      <>
        Arrow function can't have <B>line breaks</B> between <I>parameters</I>
        <Space /> and <I>arrow</I>.
      </>
    )
  }
];

const JSArrowFunctions = () => {
  useDOMTitle('UI-Geeks: JavaScript | Arrow functions');
  return (
    <Container>
      <Heading>Arrow functions</Heading>
      <Para>
        <JSArrowFunctionsIntro />
        <JSArrowFunctionsLimitations />
        <JSArrowFunctionsAsClassField />
        <JSArrowFunctionsArgumentBinding />
        <JSArrowFunctionsReturningObject />
        <JSArrowFunctionsLineBreaks />
        <JSArrowFunctionsParsingOrder />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ArrowFunctionQuestions} />
      </Para>
    </Container>
  );
};

export default JSArrowFunctions;
