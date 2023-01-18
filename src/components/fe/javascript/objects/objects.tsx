import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ObjectQuestions } from '../questionnaires/objects-questionnaire';
import JSAccessingObjects from './accessing-objects';
import JSObjectsIntro from './objects-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Objects</B> are a group of <B>key-value pairs</B> for grouping
        similar data together.
      </>
    )
  },
  {
    label: (
      <>
        The <B>"key"</B> should be a string, while <B>"value"</B> can be any
        valid value.
      </>
    )
  },
  {
    label: (
      <>
        Objects can be created using <B>constructor</B> or <B>literal syntax</B>
        .
      </>
    )
  },
  {
    label: (
      <>
        The <B>dot notation</B> is preferred for accessing properties, because
        these can be optimized for performance benefits.
      </>
    )
  },
  {
    label: (
      <>
        The <B>"key"</B> can be calculated at <B>runtime</B>, if using
        <Space /> <B>bracket notation</B>, although it has a negative impact on
        performance.
      </>
    )
  }
];

const JSObjects = () => {
  useDOMTitle('UI-Geeks: JavaScript | Objects');

  return (
    <Container>
      <Heading>Objects</Heading>

      <Para>
        <JSObjectsIntro />
        <JSAccessingObjects />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ObjectQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSObjects);
