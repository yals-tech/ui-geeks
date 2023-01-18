import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ExceptionHandlingQuestions = [
  {
    id: 1,
    question: (
      <>Code exceptions can be thrown using the {EMPTY_LINE} statement.</>
    ),
    options: [
      {
        label: 'Error()',
        id: 1
      },
      {
        label: 'throw',
        id: 2
      },
      {
        label: 'return',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'excep_1',
    answer: 2
  },
  {
    id: 2,
    question: (
      <>
        The {EMPTY_LINE} block contains one or more statements which may throw
        any error.
      </>
    ),
    options: [
      {
        label: 'try',
        id: 1
      },
      {
        label: 'catch',
        id: 2
      },
      {
        label: 'finally',
        id: 3
      },
      {
        label: 'error',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'excep_2',
    answer: 1
  },
  {
    id: 3,
    question: (
      <>
        The {EMPTY_LINE} block contains statements that specify what to do if an
        exception is thrown.
      </>
    ),
    options: [
      {
        label: 'try',
        id: 1
      },
      {
        label: `catch`,
        id: 2
      },
      {
        label: `finally`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'excep_3',
    answer: 2
  },
  {
    id: 4,
    question: (
      <>
        Value returned from the {EMPTY_LINE} block becomes the return value of
        the entire try...catch…finally block.
      </>
    ),
    options: [
      {
        label: 'try',
        id: 1
      },
      {
        label: `finally`,
        id: 2
      },
      {
        label: `catch`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'excep_4',
    answer: 2
  },
  {
    id: 5,
    question: <>The {EMPTY_LINE} constructor throws more succinct messages.</>,
    options: [
      {
        label: 'catch',
        id: 1
      },
      {
        label: 'Error()',
        id: 2
      },
      {
        label: 'throw',
        id: 2
      },
      {
        label: 'try',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'excep_5',
    answer: 2
  }
];
