import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ClosureQuestions = [
  {
    id: 1,
    question: (
      <>
        Closure is the combination of {EMPTY_LINE} and {EMPTY_LINE}.
      </>
    ),
    options: [
      {
        label: 'Local scope, Global scope',
        id: 1
      },
      {
        label: 'Lexical Scope, Block Scope',
        id: 2
      },
      {
        label: 'function, surrounding state',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'closure_1',
    answer: 3
  },
  {
    id: 2,
    question: <>Closures can be used to create {EMPTY_LINE} members.</>,
    options: [
      {
        label: 'Public',
        id: 1
      },
      {
        label: 'Private',
        id: 2
      },
      {
        label: 'Protected',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'closure_2',
    answer: 2
  },
  {
    id: 3,
    question: <>Closures can access members in module scope?</>,
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
    name: 'closure_3',
    answer: 1
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`const num = 10;
function sum(a) {
  return function(b) {
    return function(c){
      return a + b + c + num;
    }
  }
}

const result = sum(10)(20)(30);
console.log(result);`}</Code>
      </>
    ),
    options: [
      {
        label: '60',
        id: 1
      },
      {
        label: '70',
        id: 2
      },
      {
        label: 'NaN',
        id: 3
      },
      {
        label: 'undefined',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'closure_4',
    answer: 2
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`if(true) { const x = 1; }
else { const x = 2; }
console.log(x);`}</Code>
      </>
    ),
    options: [
      {
        label: '1',
        id: 1
      },
      {
        label: `2`,
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
    name: 'closure_5',
    answer: 3
  }
];
