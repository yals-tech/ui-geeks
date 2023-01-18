import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ArrowFunctionQuestions = [
  {
    id: 1,
    question: (
      <>
        Arrow functions don't have their own bindings to this, arguments or
        super?
      </>
    ),
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
    name: 'af_1',
    answer: 1
  },
  {
    id: 2,
    question: <>Arrow functions can be used as constructor?</>,
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
    name: 'af_2',
    answer: 2
  },
  {
    id: 3,
    question: <>Arrow functions do not have a {EMPTY_LINE} property.</>,
    options: [
      {
        label: '__proto__',
        id: 1
      },
      {
        label: `prototype`,
        id: 2
      },
      {
        label: `name`,
        id: 3
      },
      {
        label: `toString()`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'af_3',
    answer: 2
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of below code.
        <Code>{`let a = 100;
const obj = { 
  a:10, 
  show: () => { console.log(this.a); }
};
obj.show()`}</Code>
      </>
    ),
    options: [
      {
        label: '100',
        id: 1
      },
      {
        label: '10',
        id: 2
      },
      {
        label: 'undefined',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'af_4',
    answer: 3
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of below code.
        <Code>{`let a = 100;
const obj = {
  a:10,
  show: function()  { console.log(this.a); }
};
obj.show();`}</Code>
      </>
    ),
    options: [
      {
        label: '100',
        id: 1
      },
      {
        label: `10`,
        id: 2
      },
      {
        label: `undefined`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'af_5',
    answer: 2
  }
];
