import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import Space from '../../../shared/space/space';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ThisQuestions = [
  {
    id: 1,
    question: (
      <>
        In the browser, this in global context refers to the {EMPTY_LINE}
        <Space /> object.
      </>
    ),
    options: [
      {
        label: 'document',
        id: 1
      },
      {
        label: 'window',
        id: 2
      },
      {
        label: 'browser',
        id: 3
      },
      {
        label: 'DOM',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'this_1',
    answer: 2
  },
  {
    id: 2,
    question: <>Methods that can be used to set this for function context.</>,
    options: [
      {
        label: 'call()',
        id: 1
      },
      {
        label: 'apply()',
        id: 2
      },
      {
        label: 'bind()',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'this_2',
    answer: [1, 2, 3]
  },
  {
    id: 3,
    question: (
      <>{EMPTY_LINE} This method returns the prototype of the given object.</>
    ),
    options: [
      {
        label: 'Object.getOwnPropertyNames()',
        id: 1
      },
      {
        label: `Object.getPrototypeOf()`,
        id: 2
      },
      {
        label: `Object.createObject()`,
        id: 3
      },
      {
        label: `Object.getPrototype()`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'this_3',
    answer: 2
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of given code:
        <Code>{`a = 100;
console.log(window.a);`}</Code>
      </>
    ),
    options: [
      {
        label: 'undefined',
        id: 1
      },
      {
        label: 'NaN',
        id: 2
      },
      {
        label: '100',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'this_4',
    answer: 3
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of given code:
        <Code>{`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}

var a = 100;
var b = 200;

const res = sum.call(null, 2, 5);
console.log(res);`}</Code>
      </>
    ),
    options: [
      {
        label: '7',
        id: 1
      },
      {
        label: `undefined`,
        id: 2
      },
      {
        label: `null`,
        id: 3
      },
      {
        label: '307',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'this_5',
    answer: 4
  }
];
