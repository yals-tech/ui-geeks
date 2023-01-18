import React from 'react';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ArrayQuestions = [
  {
    id: 1,
    question: (
      <>
        Array's _____________ property can be used to get total number items in
        array.
      </>
    ),
    options: [
      {
        label: 'size',
        id: 1
      },
      {
        label: 'totalItems',
        id: 2
      },
      {
        label: 'length',
        id: 3
      },
      {
        label: 'items',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'arr_1',
    answer: 3,
    explanation: `The length property of the array holds the highest/last index of the array + 1.`
  },
  {
    id: 2,
    question: (
      <>The _____________ method can be used add an item at top of array.</>
    ),
    options: [
      {
        label: 'push',
        id: 1
      },
      {
        label: 'unshift',
        id: 2
      },
      {
        label: 'shift',
        id: 3
      },
      {
        label: 'pop',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'arr_2',
    answer: 2
  },
  {
    id: 3,
    question: <>Type of values an array can store.</>,
    options: [
      {
        label: 'string',
        id: 1
      },
      {
        label: 'number',
        id: 2
      },
      {
        label: 'object',
        id: 3
      },
      {
        label: 'All of the Above',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'arr_3',
    answer: [4]
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const arr = [1, 2, 3, , 5];
console.log(arr);`}</Code>
      </>
    ),
    options: [
      {
        label: '[1, 2, 3, empty, 5]',
        id: 1
      },
      {
        label: `[1, 2, 3, '', 5]`,
        id: 2
      },
      {
        label: '[1, 2, 3, undefined, 5]',
        id: 3
      },
      {
        label: `Error`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'arr_4',
    answer: 1
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr)`}</Code>
      </>
    ),
    options: [
      {
        label: '[1, 2, 3, 4, 5]',
        id: 1
      },
      {
        label: `[2, 3, 4, 5]`,
        id: 2
      },
      {
        label: '[ ]',
        id: 3
      },
      {
        label: `Error`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'arr_5',
    answer: 3
  }
];
