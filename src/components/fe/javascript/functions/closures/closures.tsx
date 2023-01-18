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
import { ClosureQuestions } from '../../questionnaires/closures-questionnaire';
import JSClosureScopeChain from './closure-scope-chain';
import JSClosuresInLoop from './closures-in-loop';
import JSFunctionClosuresIntro from './closures-intro';
import JSFunctionClosureUseCases from './closures-use-cases';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Closure</B> is the combination of <I>function</I> and the
        <Space /> <I>surrounding state</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <B>Lexical scope</B> uses the <B>location</B> of the variable to
        define its <I>scope</I>.
      </>
    )
  },
  {
    label: (
      <>
        Closures can be used to declare <B>private members</B> of the function.
      </>
    )
  },
  {
    label: (
      <>
        Every closure has <I>Local, Enclosing</I> and <I>Global</I> scope.
      </>
    )
  },
  {
    label: (
      <>
        <B>Function factory</B>, <B>IIFE</B> and <BI>let/const</BI> can be used
        to fix closure issues when used in a loop.
      </>
    )
  }
];

const JSFunctionClosures = () => {
  useDOMTitle('UI-Geeks: JavaScript | Closures');
  return (
    <Container>
      <Heading>Closures</Heading>
      <Para>
        <JSFunctionClosuresIntro />
        <JSFunctionClosureUseCases />
        <JSClosureScopeChain />
        <JSClosuresInLoop />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ClosureQuestions} />
      </Para>
    </Container>
  );
};

export default JSFunctionClosures;
