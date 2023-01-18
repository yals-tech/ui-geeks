import React from 'react';
import { EMPTY_LINE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const InheritanceQuestions = [
  {
    id: 1,
    question: <>null has no prototype.</>,
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
    name: 'inheri_1',
    answer: 1
  },
  {
    id: 2,
    question: (
      <>
        Each object has a private property called {EMPTY_LINE} called its
        prototype.
      </>
    ),
    options: [
      {
        label: 'prototype',
        id: 1
      },
      {
        label: '__proto__',
        id: 2
      },
      {
        label: 'proto',
        id: 3
      },
      {
        label: 'link',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'inheri_2',
    answer: 2
  },
  {
    id: 3,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const obj = {
  name: "JavaScript",
  __proto__: {
    version: 6
  }
};
console.log(obj.version);`}</Code>
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
        label: `6`,
        id: 3
      },
      {
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'inheri_3',
    answer: 3
  },
  {
    id: 4,
    question: (
      <>Object.setPrototypeOf() is equivalent to {EMPTY_LINE} of class.</>
    ),
    options: [
      {
        label: 'class',
        id: 1
      },
      {
        label: `extends`,
        id: 2
      },
      {
        label: `constructor`,
        id: 3
      },
      {
        label: `super`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'inheri_4',
    answer: 2
  },
  {
    id: 5,
    question: (
      <>
        {EMPTY_LINE} reassigns the prototype, allows directly setting
        [[Prototype]].
      </>
    ),
    options: [
      {
        label: 'Object.create()',
        id: 1
      },
      {
        label: 'Object.setPrototypeOf()',
        id: 2
      },
      {
        label: 'extends',
        id: 3
      },
      {
        label: 'static',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'inheri_5',
    answer: 1
  }
];
