import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const FunctionQuestions = [
  {
    id: 1,
    question: <>Functions can be created using {EMPTY_LINE}.</>,
    options: [
      {
        label: 'Function Declaration',
        id: 1
      },
      {
        label: 'Function Expression',
        id: 2
      },
      {
        label: 'Function Initialization',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'func_1',
    answer: [1, 2]
  },
  {
    id: 2,
    question: (
      <>
        {EMPTY_LINE} allow the function to accept an indefinite number of
        arguments.
      </>
    ),
    options: [
      {
        label: 'Anonymous Function',
        id: 1
      },
      {
        label: 'IIFE',
        id: 2
      },
      {
        label: 'Rest Parameters',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'func_2',
    answer: 3
  },
  {
    id: 3,
    question: (
      <>{EMPTY_LINE} is used to declare and invoke a function simultaneously.</>
    ),
    options: [
      {
        label: 'Anonymous function',
        id: 1
      },
      {
        label: 'Function Declaration',
        id: 2
      },
      {
        label: 'arguments',
        id: 3
      },
      {
        label: 'IIFE',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'func_3',
    answer: 4
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`function add(a, b) {
  console.log(a + b);
}
add(2, 5, 10, 20);`}</Code>
      </>
    ),
    options: [
      {
        label: '37',
        id: 1
      },
      {
        label: `7`,
        id: 2
      },
      {
        label: '0',
        id: 3
      },
      {
        label: `Error`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'func_4',
    answer: 2
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`let num = 10;
(function() {
  console.log(num);
  var num = 20;
})( );`}</Code>
      </>
    ),
    options: [
      {
        label: '10',
        id: 1
      },
      {
        label: `20`,
        id: 2
      },
      {
        label: 'ReferenceError',
        id: 3
      },
      {
        label: `undefined`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'func_5',
    answer: 4
  }
];
