import React from 'react';
import { ALL_OF_ABOVE, EMPTY_LINE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const IteratorQuestions = [
  {
    id: 1,
    question: <>Iterators and Generators bring the concept of {EMPTY_LINE}.</>,
    options: [
      {
        label: 'Iteration',
        id: 1
      },
      {
        label: 'Objects',
        id: 2
      },
      {
        label: 'String',
        id: 3
      },
      {
        label: 'Numbers',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'it_1',
    answer: 1
  },
  {
    id: 2,
    question: (
      <>The next() method that returns an object with two properties:</>
    ),
    options: [
      {
        label: 'value',
        id: 1
      },
      {
        label: 'data',
        id: 2
      },
      {
        label: 'done',
        id: 3
      },
      {
        label: 'status',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'it_2',
    answer: [1, 3]
  },
  {
    id: 3,
    question: (
      <>Generator functions are written using the {EMPTY_LINE} syntax.</>
    ),
    options: [
      {
        label: 'function',
        id: 1
      },
      {
        label: `function*`,
        id: 2
      },
      {
        label: `class`,
        id: 3
      },
      {
        label: 'object',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'it_3',
    answer: 2
  },
  {
    id: 4,
    question: <>An Iterable object must implement the {EMPTY_LINE} method.</>,
    options: [
      {
        label: 'next()',
        id: 1
      },
      {
        label: `return()`,
        id: 2
      },
      {
        label: `@@iterator`,
        id: 3
      },
      {
        label: ALL_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'it_4',
    answer: 3
  },
  {
    id: 5,
    question: (
      <>
        The {EMPTY_LINE} method is used to return a value and terminate the
        generator.
      </>
    ),
    options: [
      {
        label: 'return()',
        id: 1
      },
      {
        label: 'next()',
        id: 2
      },
      {
        label: 'done()',
        id: 3
      },
      {
        label: 'iterator()',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'it_5',
    answer: 1
  }
];
