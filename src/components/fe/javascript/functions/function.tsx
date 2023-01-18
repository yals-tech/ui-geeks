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
import { FunctionQuestions } from '../questionnaires/function-questionnaire';
import JSAnonymousFunctions from './anonymous-functions';
import JSFunctionArgumentKeyword from './function-arguments';
import JSFunctionsDeclaration from './function-declaration';
import JSFunctionsExpression from './function-expression';
import JSFunctionIIFE from './function-iife';
import JSFunctionsIntro from './function-intro';
import JSFunctionsInvocation from './function-invocation';
import JSInnerFunctions from './inner-functions';
import JSFunctionRestArgument from './rest-parameters';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Functions make code more manageable by splitting code in <Space />
        <I>logical blocks</I>.
      </>
    )
  },
  {
    label: (
      <>
        Functions can be created using: <B>Function Declaration</B> and
        <Space /> <B>Function Expression</B>.
      </>
    )
  },
  {
    label: (
      <>
        Function can have <B>zero</B> or <B>more arguments/parameters</B>.
      </>
    )
  },
  {
    label: <>Extra parameters given to function calls are ignored.</>
  },
  {
    label: (
      <>
        The <BI>"arguments"</BI> is a keyword which holds <Space />
        <I>all the parameters</I> of a function in an <I>Array-like</I> object.
        It seems verbose, since it hides the actual declaration of parameters.
      </>
    )
  },
  {
    label: (
      <>
        <B>Rest parameters</B> allow the function to accept an indefinite number
        of arguments.
      </>
    )
  },
  {
    label: (
      <>
        <B>Anonymous functions</B> also called <B>"lambda functions"</B> do not
        have names.
      </>
    )
  },
  {
    label: (
      <>
        <B>IIFE</B> is used to declare and invoke a function simultaneously.
      </>
    )
  },
  {
    label: (
      <>
        <B>Inner functions</B> are functions inside functions, which helps
        reduce unnecessary global functions.
      </>
    )
  }
];

const JSFunctions = () => {
  useDOMTitle('UI-Geeks: JavaScript | Functions');

  return (
    <Container>
      <Heading>Functions</Heading>

      <Para>
        <JSFunctionsIntro />
        <JSFunctionsDeclaration />
        <JSFunctionsExpression />
        <JSFunctionsInvocation />
        <JSFunctionArgumentKeyword />
        <JSFunctionRestArgument />
        <JSAnonymousFunctions />
        <JSFunctionIIFE />
        <JSInnerFunctions />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={FunctionQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSFunctions);
