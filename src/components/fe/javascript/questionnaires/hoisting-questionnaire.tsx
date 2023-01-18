import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import Space from '../../../shared/space/space';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const HoistingQuestions = [
  {
    id: 1,
    question: (
      <>
        Hoisting allows functions to be safely used in code before they are
        <Space /> {EMPTY_LINE}.
      </>
    ),
    options: [
      {
        label: 'Initialized',
        id: 1
      },
      {
        label: 'Declared',
        id: 2
      },
      {
        label: 'Invoked',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hoist_1',
    answer: 2
  },
  {
    id: 2,
    question: (
      <>
        What would be the output of given code:
        <Code>{`greet();
const greet = () => {
  console.log("Hello JavaScript");
}`}</Code>
      </>
    ),
    options: [
      {
        label: 'Hello JavaScript',
        id: 1
      },
      {
        label: 'undefined',
        id: 2
      },
      {
        label: 'null',
        id: 3
      },
      {
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hoist_2',
    answer: 4
  },
  {
    id: 3,
    question: (
      <>
        JavaScript only hoists {EMPTY_LINE} and not the {EMPTY_LINE}.
      </>
    ),
    options: [
      {
        label: 'Declarations, Invoked',
        id: 1
      },
      {
        label: `Defined, Invoked`,
        id: 2
      },
      {
        label: `Declarations, Initialization`,
        id: 3
      },
      {
        label: 'Initialization, Invocation',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hoist_3',
    answer: 3
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log(varVariable);
var name ="JavaScript";`}</Code>
      </>
    ),
    options: [
      {
        label: 'undefined',
        id: 1
      },
      {
        label: `JavaScript`,
        id: 2
      },
      {
        label: `ReferenceError`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hoist_4',
    answer: 1
  },
  {
    id: 5,
    question: (
      <>
        Function {EMPTY_LINE} are hoisted, but function {EMPTY_LINE} are not
        hoisted.
      </>
    ),
    options: [
      {
        label: 'expressions, declarations',
        id: 1
      },
      {
        label: 'declarations, expressions',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hoist_5',
    answer: 2
  }
];
