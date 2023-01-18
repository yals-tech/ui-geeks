import React from 'react';
import { EMPTY_LINE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ObjectQuestions = [
  {
    id: 1,
    question: <>JavaScript objects are a group of {EMPTY_LINE}.</>,
    options: [
      {
        label: 'strings',
        id: 1
      },
      {
        label: 'Key-value pairs',
        id: 2
      },
      {
        label: 'Arrays',
        id: 3
      },
      {
        label: 'Indexes',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'object_1',
    answer: 2
  },
  {
    id: 2,
    question: <>{EMPTY_LINE} can be optimized by the JavaScript engine.</>,
    options: [
      {
        label: 'Dot Notation',
        id: 1
      },
      {
        label: 'Bracket Notation',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'object_2',
    answer: 1
  },
  {
    id: 3,
    question: <>The "key" can be calculated at runtime using {EMPTY_LINE}.</>,
    options: [
      {
        label: 'Dot Notation',
        id: 1
      },
      {
        label: 'Bracket Notation',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'object_3',
    answer: 2
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const first = { num: 10 };
const second = first;
first.num = 50;
console.log(first.num + ", " + second.num)`}</Code>
      </>
    ),
    options: [
      {
        label: '50, 10',
        id: 1
      },
      {
        label: `10, 10`,
        id: 2
      },
      {
        label: `50, 50`,
        id: 3
      },
      {
        label: `10, 50`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'object_4',
    answer: 3
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const first = { num: 10};
const second = first;
second.num = 50;
console.log(first === second)`}</Code>
      </>
    ),
    options: [
      {
        label: 'false',
        id: 1
      },
      {
        label: `true`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'object_5',
    answer: 2
  }
];
