import React from 'react';
import {
  ALL_OF_ABOVE,
  EMPTY_LINE,
  NONE_OF_ABOVE
} from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const GrammerQuestions = [
  {
    id: 1,
    question: <>JavaScript is case-sensitive.</>,
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
    name: 'gram_1',
    answer: 1
  },
  {
    id: 2,
    question: <>JavaScript do not support multi-line comment.</>,
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
    name: 'gram_2',
    answer: 2
  },
  {
    id: 3,
    question: <>Names of variables are called {EMPTY_LINE}.</>,
    options: [
      {
        label: 'variable',
        id: 1
      },
      {
        label: 'keyword',
        id: 2
      },
      {
        label: 'identifier',
        id: 3
      },
      {
        label: 'literals',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_3',
    answer: 3
  },
  {
    id: 4,
    question: (
      <>
        {EMPTY_LINE} is used to declare variables whose values are never
        intended to change.
      </>
    ),
    options: [
      {
        label: 'var',
        id: 1
      },
      {
        label: `let`,
        id: 2
      },
      {
        label: `const`,
        id: 3
      },
      {
        label: ALL_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'gram_4',
    answer: [3]
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const arr = [1, 2, 5];
arr.push(10);
console.log(arr);`}</Code>
      </>
    ),
    options: [
      {
        label: `[1, 2, 5]`,
        id: 1
      },
      {
        label: `[1, 2, 5, 10]`,
        id: 2
      },
      {
        label: `Error`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_5',
    answer: 2
  },
  {
    id: 6,
    question: <>Pick invalid variable names.</>,
    options: [
      {
        label: `myVar`,
        id: 1
      },
      {
        label: `9var`,
        id: 2
      },
      ,
      {
        label: `dVar`,
        id: 3
      },
      ,
      {
        label: `for`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'gram_6',
    answer: [2, 4]
  },
  {
    id: 7,
    question: <>let/const declarations are {EMPTY_LINE} scoped.</>,
    options: [
      {
        label: 'global',
        id: 1
      },
      {
        label: `local`,
        id: 2
      },
      {
        label: `block`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_7',
    answer: 3
  },
  {
    id: 8,
    question: <>Variables that are hoisted, return a value of {EMPTY_LINE}.</>,
    options: [
      {
        label: 'null',
        id: 1
      },
      {
        label: `undefined`,
        id: 2
      },
      {
        label: `NaN`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_8',
    answer: 2
  },
  {
    id: 9,
    question: <>Literals represents {EMPTY_LINE} is JavaScript.</>,
    options: [
      {
        label: 'Types',
        id: 1
      },
      {
        label: `Names`,
        id: 2
      },
      {
        label: `Values`,
        id: 3
      },
      {
        label: 'Addresses',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_9',
    answer: 3
  },
  {
    id: 10,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const arr = [1, 2, 3, 5,];
console.log(arr);`}</Code>
      </>
    ),
    options: [
      {
        label: 'Error',
        id: 1
      },
      {
        label: `[1, 2, 3, 5, ]`,
        id: 2
      },
      {
        label: `[1, 2, 3, 5]`,
        id: 3
      },
      {
        label: 'Warning',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_10',
    answer: 3
  },
  {
    id: 11,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const obj = { a: 10, 'invalid-key': 5 };
console.log(obj.a + ', ' + obj['invalid-key']);`}</Code>
      </>
    ),
    options: [
      {
        label: '10, 5',
        id: 1
      },
      {
        label: `10, NaN`,
        id: 2
      },
      {
        label: `10, undefined`,
        id: 3
      },
      {
        label: '10, Error',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'gram_11',
    answer: 1
  },
  {
    id: 12,
    question: (
      <>
        An attempt to access variable in temporal dead zone will result in
        {EMPTY_LINE}.
      </>
    ),
    options: [
      {
        label: 'undefined',
        id: 1
      },
      {
        label: `null`,
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
    name: 'gram_12',
    answer: 3
  }
];
