import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ClassQuestions = [
  {
    id: 1,
    question: (
      <>
        Classes are templates for {EMPTY_LINE}, encapsulating data and methods.
      </>
    ),
    options: [
      {
        label: 'String',
        id: 1
      },
      {
        label: 'Objects',
        id: 2
      },
      {
        label: 'Function',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'class_1',
    answer: 2
  },
  {
    id: 2,
    question: <>Class definition is not hoisted.</>,
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
    name: 'class_2',
    answer: 1
  },
  {
    id: 3,
    question: <>{EMPTY_LINE} members are creating using the "#" prefix.</>,
    options: [
      {
        label: 'Public',
        id: 1
      },
      {
        label: `Private`,
        id: 2
      },
      {
        label: `Instance`,
        id: 3
      },
      {
        label: `Constructor`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'class_3',
    answer: 2
  },
  {
    id: 4,
    question: <>The {EMPTY_LINE} keyword is used to implement inheritance.</>,
    options: [
      {
        label: 'extends',
        id: 1
      },
      {
        label: 'inherit',
        id: 2
      },
      {
        label: 'super',
        id: 3
      },
      {
        label: 'static',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'class_4',
    answer: 1
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const usr = new User("JavaScript", "Language");
const User = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  showName() {
    console.log(this.firstName + "-" + this.lastName);
  }
}`}</Code>
      </>
    ),
    options: [
      {
        label: 'JavaScript-Language',
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
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'class_5',
    answer: 4
  }
];
