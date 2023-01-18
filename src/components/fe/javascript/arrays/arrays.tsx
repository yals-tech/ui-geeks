import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ArrayQuestions } from '../questionnaires/array-questionnaire';
import JSAccessingArrays from './accessing-arrays';
import JSArrayMethods from './array-methods';
import JSArraysIntro from './arrays-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Array items are stored in <I>consecutive locations</I> starting with
        <B>zero index</B>.
      </>
    )
  },
  {
    label: (
      <>
        Arrays can be created using <B>constructor</B> or <B>literal syntax</B>.
      </>
    )
  },
  {
    label: (
      <>
        The <I>while, do-while, for, map</I> and other loops can be used for
        accessing array items.
      </>
    )
  },
  {
    label: (
      <>
        Arrays provide useful methods like: <Space />
        <I>
          toString(), push(), pop(), concat(), join(), shift(), unshift(),
          slice(), splice(), sort(), reverse()
        </I>
        , etc.
      </>
    )
  }
];

const JSArrays = () => {
  useDOMTitle('UI-Geeks: JavaScript | Arrays');

  return (
    <Container>
      <Heading>Arrays</Heading>

      <Para>
        <JSArraysIntro />
        <JSAccessingArrays />
        <JSArrayMethods />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={ArrayQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSArrays);
