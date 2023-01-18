import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { NewLine } from '../../../shared/util/util';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const OperatorQuestions = [
  {
    id: 1,
    question: <>All binary operators in JavaScript are {EMPTY_LINE}.</>,
    options: [
      {
        label: 'infix',
        id: 1
      },
      {
        label: 'prefix',
        id: 2
      },
      {
        label: 'postfix',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_1',
    answer: 1
  },
  {
    id: 2,
    question: (
      <>
        {EMPTY_LINE} is automatic or implicit conversion of value from one type
        to another.
      </>
    ),
    options: [
      {
        label: 'Type Casting',
        id: 1
      },
      {
        label: 'Type Coercion',
        id: 2
      },
      {
        label: 'Type Conversion',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'oper_2',
    answer: [2]
  },
  {
    id: 3,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log('1' == 1);
console.log('1' === 1);
console.log('1' !== 1);
`}</Code>
      </>
    ),
    options: [
      {
        label: (
          <>
            {`false`}
            <NewLine />
            {`true`}
            <NewLine />
            {`true`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 1
      },
      {
        label: (
          <>
            {`false`}
            <NewLine />
            {`false`}
            <NewLine />
            {`true`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 2
      },
      {
        label: (
          <>
            {`true`}
            <NewLine />
            {`false`}
            <NewLine />
            {`true`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 3
      },
      {
        label: (
          <>
            {`true`}
            <NewLine />
            {`true`}
            <NewLine />
            {`true`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_3',
    answer: 3
  },
  {
    id: 4,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log('JS' && 'Program');
console.log('Program' && false);
console.log('JS' || 'Program');
console.log(false || 'Program');
`}</Code>
      </>
    ),
    options: [
      {
        label: (
          <>
            {`false`}
            <NewLine />
            {`false`}
            <NewLine />
            {`true`}
            <NewLine />
            {`false`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 1
      },
      {
        label: (
          <>
            {`'Program'`}
            <NewLine />
            {`false`}
            <NewLine />
            {`'JS'`}
            <NewLine />
            {`'Program'`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 2
      },
      {
        label: (
          <>
            {`true`}
            <NewLine />
            {`false`}
            <NewLine />
            {`true`}
            <NewLine />
            {`false`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 3
      },
      {
        label: (
          <>
            {`'JS'`}
            <NewLine />
            {`'Program'`}
            <NewLine />
            {`'JS'`}
            <NewLine />
            {`false`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_4',
    answer: 2
  },
  {
    id: 5,
    question: <>+ operator can also be used for string concatenation.</>,
    options: [
      {
        label: `true`,
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_5',
    answer: 1
  },
  {
    id: 6,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log('3' + 4 + 5);
console.log(3 + 4 + '5');`}</Code>
      </>
    ),
    options: [
      {
        label: (
          <>
            {`12`}
            <NewLine />
            {`12`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 1
      },
      {
        label: (
          <>
            {`345`}
            <NewLine />
            {`345`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 2
      },
      {
        label: (
          <>
            {`345`}
            <NewLine />
            {`75`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 3
      },
      {
        label: (
          <>
            {`12`}
            <NewLine />
            {`345`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_6',
    answer: 3
  },
  {
    id: 7,
    question: (
      <>
        What would be the output of given code:
        <Code>{`delete Math.PI;`}</Code>
      </>
    ),
    options: [
      {
        label: 'Error',
        id: 1
      },
      {
        label: `true`,
        id: 2
      },
      {
        label: `false`,
        id: 3
      },
      {
        label: 'undefined',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_7',
    answer: 3
  },
  {
    id: 8,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const arr = [1, 5, 10, 20, 40];
delete arr[2];
console.log(arr);`}</Code>
      </>
    ),
    options: [
      {
        label: '[1, 5, 20, 40]',
        id: 1
      },
      {
        label: `[1, 5, 10, 20, 40]`,
        id: 2
      },
      {
        label: `[1, 5, undefined, 20, 40]`,
        id: 3
      },
      {
        label: `[1, 5, empty, 20, 40]`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_8',
    answer: 3
  },
  {
    id: 9,
    question: (
      <>{EMPTY_LINE} operator returns string indicating the type of operand.</>
    ),
    options: [
      {
        label: 'type',
        id: 1
      },
      {
        label: `typeof`,
        id: 2
      },
      {
        label: `void`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_9',
    answer: 2
  },
  {
    id: 10,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const arr = [1, 2, 3, 5,];
console.log(arr);
    `}</Code>
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
    name: 'oper_10',
    answer: 3
  },
  {
    id: 11,
    question: (
      <>
        What would be the output of given code:
        <Code>{`const obj = { a: 10, 'invalid-key': 5 };
console.log(obj.a + ', ' + obj['invalid-key']);
    `}</Code>
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
    name: 'oper_11',
    answer: 1
  },
  {
    id: 12,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log(50 + 10/8 + 2);`}</Code>
      </>
    ),
    options: [
      {
        label: '6',
        id: 1
      },
      {
        label: `50`,
        id: 2
      },
      {
        label: `53.25`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'oper_12',
    answer: 3
  }
];
