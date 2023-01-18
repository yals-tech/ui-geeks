import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import { B, BI, I, NewLine } from '../../../shared/util/util';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const TheTypesQuestions = [
  {
    id: 1,
    question: <>functions are just special type of object?</>,
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
    name: 'type_1',
    answer: 1,
    explanation: `The functions are just special type of object (because functions are treated as first-class functions).`
  },
  {
    id: 2,
    question: <>Number type is used to store below type of values:</>,
    options: [
      {
        label: 'Number',
        id: 1
      },
      {
        label: 'Floating point numbers',
        id: 2
      },
      {
        label: 'Both',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'type_2',
    answer: [3],
    explanation: `The Number type is a double-precision-64-bit binary format IEEE 754 type. It can store both integer and floating point numbers.`
  },
  {
    id: 3,
    question: <>{EMPTY_LINE} function is used to convert string to integers.</>,
    options: [
      {
        label: 'integer()',
        id: 1
      },
      {
        label: 'parseInt()',
        id: 2
      },
      {
        label: 'parseFloat()',
        id: 3
      },
      {
        label: 'parseInteger()',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_3',
    answer: 2,
    explanation: (
      <>
        The parseInt() function is used to convert string value to integer.
        <NewLine />
        For example: parseInt("123"); // 123
      </>
    )
  },
  {
    id: 4,
    question: <>Hexa-decimal values starts with:</>,
    options: [
      {
        label: 'Hex',
        id: 1
      },
      {
        label: `0x`,
        id: 2
      },
      {
        label: `0H`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Checkbox,
    name: 'type_4',
    answer: [2],
    explanation: `Strings beginning with "0x" or "0X" are treated as Hexa-decimal numbers (radix 16).`
  },
  {
    id: 5,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log(NaN + 5);
console.log(null + 5);
console.log(undefined + 5);`}</Code>
      </>
    ),
    options: [
      {
        label: (
          <>
            {`NaN`}
            <NewLine />
            {`5`}
            <NewLine />
            {`NaN`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 1
      },
      {
        label: (
          <>
            {`undefined`}
            <NewLine />
            {`undefined`}
            <NewLine />
            {`undefined`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 2
      },
      {
        label: (
          <>
            {`null`}
            <NewLine />
            {`5`}
            <NewLine />
            {`null`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 3
      },
      {
        label: (
          <>
            {`5`}
            <NewLine />
            {`5`}
            <NewLine />
            {`5`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_5',
    answer: 1,
    explanation: (
      <>
        <BI>NaN</BI> is toxic, if it is provided as operand to any mathematical
        operation, the result will also be NaN. Therefore: <NewLine />
        console.log(NaN + 5); // NaN
        <NewLine />
        <NewLine />
        The <BI>null</BI> value behaves as 0 (Zero) in numeric context.
        Therefore:
        <NewLine />
        console.log(null + 5); // 5
        <NewLine />
        <NewLine />
        The <BI>undefined</BI> value behaves as NaN in numeric context.
        Therefore:
        <NewLine />
        console.log(undefined + 5); // NaN
      </>
    )
  },
  {
    id: 6,
    question: (
      <>
        What would be the output of given code:
        <Code>{`console.log(parseInt('12.25abc'));
console.log(parseFloat('12.25abc'));
console.log(+ '12.25abc');
`}</Code>
      </>
    ),
    options: [
      {
        label: (
          <>
            {`12.25`}
            <NewLine />
            {`12.25`}
            <NewLine />
            {`NaN`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 1
      },
      {
        label: (
          <>
            {`12`}
            <NewLine />
            {`12.25`}
            <NewLine />
            {`NaN`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 2
      },
      ,
      {
        label: (
          <>
            {`12`}
            <NewLine />
            {`12`}
            <NewLine />
            {`12`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 3
      },
      ,
      {
        label: (
          <>
            {`12.25`}
            <NewLine />
            {`12.25`}
            <NewLine />
            {`12.25`}
            <NewLine />
            <NewLine />
          </>
        ),
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_6',
    answer: 2,
    explanation: (
      <>
        <BI>parseInt()</BI> and <BI>parseFloat()</BI> functions parse a string
        until they reach a character that isn't valid for the specified number
        format, then returns the number parsed up to that point. However, the
        <B>"+"" operator</B> converts the string to NaN, if there is any invalid
        character contained within it.
      </>
    )
  },
  {
    id: 7,
    question: (
      <>{EMPTY_LINE} can represent integers with arbitrary precision.</>
    ),
    options: [
      {
        label: 'Number',
        id: 1
      },
      {
        label: `String`,
        id: 2
      },
      {
        label: `BigInt`,
        id: 3
      },
      {
        label: 'Int',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_7',
    answer: 3,
    explanation: `BigInt can represent integers with arbitrary precision. With BigInts we can store and manipulate large integers, even beyond the safe Integer limit for Numbers. A BigInt is created by appending 'n' to the end of an integer or by calling the constructor.`
  },
  {
    id: 8,
    question: <>{EMPTY_LINE} is a unique and immutable primitive value.</>,
    options: [
      {
        label: 'Number',
        id: 1
      },
      {
        label: `String`,
        id: 2
      },
      {
        label: `Array`,
        id: 3
      },
      {
        label: 'Symbol',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_8',
    answer: 4,
    explanation: `A symbol is a unique and immutable primitive value and may be used as the key of an object property. Symbol value is always unique.`
  },
  {
    id: 9,
    question: (
      <>
        The <I>null</I> behaves as {EMPTY_LINE} in numeric context and{' '}
        {EMPTY_LINE} in boolean context.
      </>
    ),
    options: [
      {
        label: 'null, false',
        id: 1
      },
      {
        label: `0, false`,
        id: 2
      },
      {
        label: `false, false`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_9',
    answer: 2,
    explanation: `The null value behaves as 0 (Zero) in numeric context and as false in boolean context. It is a type that indicates a deliberate non-value and it is only accessible through the null keyword.`
  },
  {
    id: 10,
    question: (
      <>
        The <I>undefined</I> behaves as {EMPTY_LINE} in numeric context and
        {EMPTY_LINE} in boolean context.
      </>
    ),
    options: [
      {
        label: 'NaN, false',
        id: 1
      },
      {
        label: `NaN, NaN`,
        id: 2
      },
      {
        label: `false, false`,
        id: 3
      },
      {
        label: 'true, true',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'type_10',
    answer: 1,
    explanation: `It is a type that indicates an uninitialized variable value, i.e., a value hasn't been assigned yet to the variable. The undefined value behaves as NaN in numeric context and as false in boolean content.`
  }
];
