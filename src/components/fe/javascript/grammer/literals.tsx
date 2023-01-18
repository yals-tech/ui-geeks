import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, NewLine, OrderedList } from '../../../shared/util/util';
import JSStringLiterals from './string-literals';

const JSLiterals = () => {
  const literalTypes: Array<IOrderedListItemType> = [
    {
      label: 'Numeric Literals'
    },
    {
      label: 'String Literals'
    },
    {
      label: 'Boolean Literals'
    },
    {
      label: 'Array Literals'
    },
    {
      label: 'Object Literals'
    },
    {
      label: 'RegExp Literals'
    }
  ];

  return (
    <>
      <Heading as='h2'>Literals</Heading>

      <Para>
        Literals represent <B>values</B> in JavaScript. These are the values of
        the variables and not the type of the variables.
        <NewLine />
        <NewLine />
        <OrderedList unOrdered items={literalTypes} />
        <Heading as='h3'>Numeric Literals</Heading>
        <Para>Any valid integer and floating point numbers.</Para>
        <Code>
          {`// Examples:
let a = 20;
let b = 12.25;
let a = 011;
let a = 0x1123;
`}
        </Code>
      </Para>
      <JSStringLiterals />
      <Para>
        <Heading as='h3'>Boolean Literals</Heading>
        <Para>
          Boolean type has only 2 literal values: <BI>true</BI> and
          <BI>false</BI>.
        </Para>
      </Para>
      <Para>
        <Heading as='h3'>Array Literals</Heading>
        <Para>
          An array literal is a list of zero or more expressions enclosed in
          square brackets <B>[]</B>.
        </Para>
        <Para>
          <Code>{`const arr = [1, 2, 10, 20];`}</Code>
        </Para>
        <Para>
          If we put two commas in a row in an array literal, the array
          <B>leaves the empty slot</B> for the unspecified elements. Array
          traversal methods like <I>map()</I>, skip the empty slots.
          <Code>{`const arr = [1, 2, 10, , 20];   // [1, 2, 10, empty, 20]`}</Code>
        </Para>
        <Para>
          If we put a trailing comma at the end of the list, then the comma is
          <B>ignored</B>.<Code>{`const arr = [1, 2, 10,]; // [1, 2, 10]`}</Code>
        </Para>
      </Para>

      <Para>
        <Heading as='h3'>Object Literals</Heading>
        <Para>
          An object literal is a list of zero or more pairs of property name and
          value, enclosed in <B>{`{}`}</B>.
        </Para>
        <Code>{`const obj = { a: 10, "invalid-key", 20 };`}</Code>

        <Para>
          Property names that are <B>valid identifiers</B>, can be accessed with
          <B>dot notation</B>.<Code>{`console.log(obj.a);   // 10`}</Code>
        </Para>

        <Para>
          Property names that are <B>not valid identifiers</B>, can be accessed
          with <B>bracket notation []</B>.
          <Code>{`console.log(obj["invalid-key"]);    // 20`}</Code>
        </Para>
      </Para>

      <Para>
        <Heading as='h3'>RegExp Literals</Heading>
        <Para>
          A regex literal is a pattern enclosed between backward slashes (
          <BI>//</BI>).
        </Para>
        <Code>{`const re = /ab+c/;`}</Code>
      </Para>
    </>
  );
};

export default JSLiterals;
