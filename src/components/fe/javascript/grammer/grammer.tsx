import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { GrammerQuestions } from '../questionnaires/grammer-questionnaire';
import JSComments from './comments';
import JSGrammerIntro from './grammer-intro';
import JSTDZ from './tdz';
import JSVariables from './variables';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        JavaScript is <B>case sensitive</B>, instructions are called <Space />
        <B>statements</B> which are separated by <B>semicolon</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Single/Multi-line</B> <BI>comments</BI> should be added to improve
        code readability.
      </>
    )
  },
  {
    label: (
      <>
        <B>Variables</B> are symbolic names for values and their names are
        called
        <B>identifiers</B>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>let</BI> and <BI>const</BI> declare <B>block scope</B> while
        <Space /> <BI>var</BI> declare <B>function/global scope</B> variables.
      </>
    )
  },
  {
    label: (
      <>
        <B>Variable</B> names should include <I>Latin characters</I> <Space />
        <B>(0-9,a-z,A-Z)</B> and <B>underscore "_"</B>.
      </>
    )
  },
  {
    label: (
      <>
        Prefer naming variables using <B>camelCase</B>, <B>intuitive</B> names.
      </>
    )
  },
  {
    label: (
      <>
        Unassigned variables will return <BI>undefined</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Variables can be declared in <B>global</B>, <B>local</B> and <Space />
        <B>block scope</B>.
      </>
    )
  },
  {
    label: (
      <>
        Variables are <B>"hoisted"</B> to top of function, so they can be
        referred before their declaration.
      </>
    )
  },
  {
    label: (
      <>
        JavaScript is <B>dynamically typed</B>, so <I>data types</I> are
        converted <B>as-needed</B> during execution.
      </>
    )
  },
  {
    label: (
      <>
        <B>Literals</B> represent values in JavaScript.
      </>
    )
  },
  {
    label: (
      <>
        <B>Template Literals</B> are string values enclosed by the <Space />
        <B>back-tick(`)</B>.
      </>
    )
  },
  {
    label: (
      <>
        <I>Trailing commas</I> at the end of <B>Array literal</B> are <Space />
        <B>ignored</B>, while <B>two commas</B> in a row adds an <BI>empty</BI>
        <Space /> slot.
      </>
    )
  },
  {
    label: (
      <>
        Properties of Object can be read by <B>dot (.)</B> or <Space />
        <B>bracket ([])</B> notation.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>let</BI> and <BI>const</BI> variables are in the <Space />
        <B>Temporal Dead Zone (TDZ)</B> from <I>start of scope</I> to their
        <Space /> <I>declaration</I> statement.
      </>
    )
  },
  {
    label: (
      <>
        Accessing variables of the <B>Temporal Dead Zone</B> will give <Space />
        <BI>ReferenceError</BI>.
      </>
    )
  }
];

const JSGrammer = () => {
  useDOMTitle('UI-Geeks: JavaScript | Grammer and types');

  return (
    <Container>
      <Heading>Grammar and types</Heading>

      <JSGrammerIntro />
      <JSComments />
      <JSVariables />
      <JSTDZ />

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={GrammerQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSGrammer);
