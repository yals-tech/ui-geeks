import React from 'react';
import { EMPTY_LINE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ControlStructureQuestions = [
  {
    id: 1,
    question: (
      <>
        The {EMPTY_LINE} checks the number/string value against a given set of
        values.
      </>
    ),
    options: [
      {
        label: 'if-else',
        id: 1
      },
      {
        label: 'while',
        id: 2
      },
      {
        label: 'do-while',
        id: 3
      },
      {
        label: 'switch-case',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'control_1',
    answer: 4
  },
  {
    id: 2,
    question: (
      <>Loops can be terminated forcefully using {EMPTY_LINE} statements.</>
    ),
    options: [
      {
        label: 'break, throw and return',
        id: 1
      },
      {
        label: 'end and terminate',
        id: 2
      },
      {
        label: 'switch and return',
        id: 3
      },
      {
        label: 'None of the above',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'control_2',
    answer: 1
  },
  {
    id: 3,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const num = 5;
if(num === 5); { console.log(num); }
else { console.log(0); }`}</Code>
      </>
    ),
    options: [
      {
        label: '5',
        id: 1
      },
      {
        label: '0',
        id: 2
      },
      {
        label: '50',
        id: 3
      },
      {
        label: 'Error',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'control_3',
    answer: 4
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`let sum = 0;
for(let num = 1; num <=5; i++) {
  sum += num;
}
console.log(sum);`}</Code>
      </>
    ),
    options: [
      {
        label: '10',
        id: 1
      },
      {
        label: `15`,
        id: 2
      },
      {
        label: `0`,
        id: 3
      },
      {
        label: `12345`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'control_4',
    answer: 2
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`let sum = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => { sum += i; }, 1)
}
console.log(sum)`}</Code>
      </>
    ),
    options: [
      {
        label: '10',
        id: 1
      },
      {
        label: `25`,
        id: 2
      },
      {
        label: `0`,
        id: 3
      },
      {
        label: `Error`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'control_5',
    answer: 3
  }
];
