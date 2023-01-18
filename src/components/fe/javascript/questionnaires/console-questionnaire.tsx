import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ConsoleQuestions = [
  {
    id: 1,
    question: <>Browser console is used to {EMPTY_LINE} JavaScript code.</>,
    options: [
      {
        label: 'Compile',
        id: 1
      },
      {
        label: 'Write/Test',
        id: 2
      },
      {
        label: 'Interpret',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'console_1',
    answer: 2,
    explanation: `Browser Console can be used to write/test JavaScript code.`
  },
  {
    id: 2,
    question: <>{EMPTY_LINE} is running under the hood of every console.</>,
    options: [
      {
        label: 'command',
        id: 1
      },
      {
        label: 'REPL',
        id: 2
      },
      {
        label: 'Interpreter',
        id: 3
      },
      {
        label: 'None of the above',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'console_2',
    answer: 2,
    explanation: `REPL (Read-Eval-Print-Loop) is running under the hood of every console.`
  },
  {
    id: 3,
    question: <>In JavaScript, every expression returns a result.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: 'false',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'console_3',
    answer: 1,
    explanation: `Yes, in JavaScript, every expression has a result.`
  },
  {
    id: 4,
    question: <>In JavaScript "nothing" is represented by:</>,
    options: [
      {
        label: 'Empty',
        id: 1
      },
      {
        label: `null`,
        id: 2
      },
      {
        label: `undefined`,
        id: 3
      },
      {
        label: `zero (0)`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'console_4',
    answer: 3,
    explanation: `Expressions like console.log( ) returns nothing and in JavaScript "nothing" is represented as undefined.`
  },
  {
    id: 5,
    question: <>REPL performs below steps:</>,
    options: [
      {
        label: 'Read user input',
        id: 1
      },
      {
        label: `Run code`,
        id: 2
      },
      {
        label: `Print result`,
        id: 3
      },
      {
        label: `Loop to read user input`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'console_5',
    answer: [1, 2, 3, 4],
    explanation: `REPL (Read-Eval-Print-Loop) is running under the hood of every console, performing above steps.`
  }
];
