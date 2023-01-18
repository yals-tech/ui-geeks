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
import { ControlStructureQuestions } from '../questionnaires/control-struc-questionnaire';
import JSIfElse from './conditional-statements/if-else/if-else';
import JSSwitchCase from './conditional-statements/if-else/switch-case';
import JSControlStructuresIntro from './control-structures-intro';
import JSLoops from './loop-statements/loop-statements';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        JavaScript provides <B>Conditional</B> and <B>Looping</B> controls
        structures.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>if-else</BI> checks the condition and executes either <I>if</I>
        <Space /> or <I>else</I> block.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>switch-case</BI> checks the <I>number/string</I> value against a
        given set of values.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>while, do-while, for, for…of, for..in</BI> loops can be used for
        looping/iterating the iterable values.
      </>
    )
  },
  {
    label: (
      <>
        Loops can be terminated <B>forcefully</B> using <BI>break</BI>,
        <Space /> <BI>throw</BI> and <BI>return</BI> statements.
      </>
    )
  }
];

const JSControlStructures = () => {
  useDOMTitle('UI-Geeks: JavaScript | Control Structures');

  return (
    <Container>
      <Heading>Control Structures</Heading>

      <JSControlStructuresIntro />

      <Para>
        <Heading as='h2'>Conditional Statements</Heading>
        <JSIfElse />
        <JSSwitchCase />
      </Para>

      <Para>
        <JSLoops />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ControlStructureQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSControlStructures);
