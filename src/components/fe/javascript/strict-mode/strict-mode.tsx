import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { StrictModeQuestions } from '../questionnaires/strict-mode-questionnaire';
import JSStrictModeIntro from './strict-mode-intro';
import JSStrictModeRestrictions from './strict-mode-restrictions';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        The <BI>strict mode</BI>, introduced in ES5, is a way to opt-in to
        restricted JavaScript.
      </>
    )
  },
  {
    label: (
      <>
        The <I>strict mode</I> and <I>non-strict</I> code can co-exist.
      </>
    )
  },
  {
    label: (
      <>
        Strict mode changes silent errors to be <B>thrown</B>, fixes mistakes to
        improve performance, prohibits future syntaxes.
      </>
    )
  },
  {
    label: (
      <>
        Add <BI>"use strict"</BI> as the first statement to run code in strict
        mode, may be applied to the entire script or individual function, but
        not to block statements.
      </>
    )
  },
  {
    label: (
      <>
        <I>Class</I> and <I>Modules</I> code automatically runs in strict mode.
        Assignment to <B>non-writable</B> will throw errors.
      </>
    )
  },
  {
    label: (
      <>
        Strict mode restricts: deleting undeletable, function parameter names to
        be unique, adding duplicate properties, etc.
      </>
    )
  }
];

const JSStrictMode = () => {
  useDOMTitle('UI-Geeks: JavaScript | Strict mode');

  return (
    <Container>
      <Heading>Strict mode</Heading>
      <Para>
        <JSStrictModeIntro />
        <JSStrictModeRestrictions />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={StrictModeQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSStrictMode);
