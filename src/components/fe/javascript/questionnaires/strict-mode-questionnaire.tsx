import React from 'react';
import { EMPTY_LINE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const StrictModeQuestions = [
  {
    id: 1,
    question: <>Strict mode was introduced in version {EMPTY_LINE}.</>,
    options: [
      {
        label: 'ES3',
        id: 1
      },
      {
        label: 'ES4',
        id: 2
      },
      {
        label: 'ES5',
        id: 3
      },
      {
        label: 'ES6',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'strict_1',
    answer: 3
  },
  {
    id: 2,
    question: (
      <>
        What would be the output of given code:
        <Code>{`function strictFunc(arg) {
  "use strict";
  arg = 10;
  return [arg, arguments[0]];
}

const res = strictFunc(15);
console.log(res[0] + ", " + res[1]);`}</Code>
      </>
    ),
    options: [
      {
        label: '10, 15',
        id: 1
      },
      {
        label: '10, 10',
        id: 2
      },
      {
        label: 'undefined, undefined',
        id: 3
      },
      {
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'strict_2',
    answer: 1
  },
  {
    id: 3,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log(delete Math.PI);`}</Code>
      </>
    ),
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      },
      {
        label: `0`,
        id: 3
      },
      {
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'strict_3',
    answer: 4
  },
  {
    id: 4,
    question: <>Class and Modules code automatically runs in strict mode.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'strict_4',
    answer: 1
  },
  {
    id: 5,
    question: <>The strict mode and non-strict code can co-exist.</>,
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
    name: 'strict_5',
    answer: 1
  }
];
