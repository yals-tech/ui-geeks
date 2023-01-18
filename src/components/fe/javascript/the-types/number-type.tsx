import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSNumberType = () => {
  return (
    <>
      <Heading as='h2'>Number</Heading>

      <Para>
        The Number type is a double-precision-64-bit binary format IEEE 754
        type. It can store numbers between -(2^53 - 1) to 2^53.
      </Para>
      <Para>
        It can store both integer and floating point numbers, which may result
        in some strange behavior. For example:
        <NewLine />
        <Code>{`console.log(3/2);
// it will log 1.5 and not 1
console.log(0.1+0.2);
// it will log 0.30000000000000004`}</Code>
      </Para>
      <Para>
        The standard arithmetic operations are supported like addition,
        subtraction, modulus (remainder), etc.
        <NewLine />
        <Code>{`console.log(10 + 50); // 60
console.log(2 * 5);   // 10
console.log(50 % 4);  // 2
`}</Code>
        <NewLine />
        There is also a built-in object <BI>Math</BI> for performing
        mathematical operations like Math.sin, Math.pow(), etc.
        <NewLine />
        <Code>{`Math.sin(3.5);  // -0.35078322768961984
Math.PI;    // 3.141592653589793

Math.pow(2,3);  // 8
//Equivalent to 2 raised to the power 3
`}</Code>
      </Para>

      <Para>
        <Heading as='h6'>parseInt()</Heading>
        This function is used to convert string value to integer.
        <NewLine />
        <I>Syntax</I>: parseInt("String representation of Number", base)
        <NewLine />
        <BI>base</BI>: It is optional, default value is 10.
        <Code>{`parseInt("123")         // 123
parseInt("123",10)      // 123`}</Code>
        <Para>
          In older browsers, strings beginning with a "0" (Zero) were assumed to
          be in <Word bold>OCTAL</Word> base (<Word italic>radix 8</Word>).
          <NewLine />
          <Code>{`parseInt("010") // 8 (Octal value of 010)`}</Code>
        </Para>
        <Para>
          But in modern browsers, the above statement will print 10.
          <Code>{`parseInt("010") // 10 
// Not treated as OCTAL, used default base 10`}</Code>
        </Para>
        <Para>
          <Word bold>Hexa-decimal</Word> values are still treated the same.
          Strings beginning with "0x" or "0X" are treated as Hexa-decimal
          numbers (<Word italic>radix 16</Word>).
          <Code>{`parseInt("0x10") // 16 (Hexa-decimal value of 0x10)`}</Code>
        </Para>
        <Para>
          Therefore, it's always safer to pass <BI>'base'</BI> while working on
          Octal and Hexa-decimal values.
          <Code>{`parseInt("010", 8)    // Will always give 8
parseInt("0x10", 16)  // Will always give 16`}</Code>
        </Para>
        <Para>
          <Heading as='h6'>parseFloat()</Heading>
          This function is used to convert string to floating point number. It
          always uses base 10.
          <NewLine />
          <Word italic>Syntax</Word>: parseFloat("String representation of
          Number")
          <Code>{`parseFloat("1.23") // 1.23`}</Code>
        </Para>
      </Para>

      <Para>
        <B>Unary Operator "+"</B> can also be used to convert strings to
        numbers.
        <Code>{`+ "42"  // 42
+ "010"  // 10
+ "0x10"  // 16
`}</Code>
      </Para>

      <Para>
        A special value called <Space /> <BI>NaN</BI>
        <Space /> ("Not a Number") is returned if the string is non-numeric.
        <Code>{`parseInt("hello");  // NaN`}</Code>
      </Para>

      <Note>
        <Word bold>NaN</Word> is toxic, if it is provided as operand to any
        mathematical operation, the result will also be NaN. For example:
        <Code>{`NaN + 5    // NaN`}</Code>
      </Note>

      <Para>
        <Word bold>Number.isNaN()</Word> function can be used to check if a
        given value is <I>NaN</I>.
        <Code>{`Number.isNaN("hello") // false
Number.isNaN(NaN) // true
`}</Code>
      </Para>

      <Para>
        <Word bold>Do NOT</Word> use the global <Word italic>isNaN( )</Word>
        <Space />
        function for checking NaN values, since it has unintuitive behavior.
        <Code>{`isNaN("hello")   // true 
isNaN(undefined)    // true
isNaN([1])  // false
isNaN("1")  // false
isNaN({})   // true
`}</Code>
      </Para>

      <Para>
        Javascript also has special values <Word bold>Infinity</Word> and
        <Word bold>-Infinity</Word>.
        <Code>{`1/0     // Infinity
-1/0    // -Infinity
`}</Code>
      </Para>

      <Para>
        <Word bold italic>
          isFinite()
        </Word>
        <Space />
        function can be used to check whether value is finite or not.
        <Code>{`isFinite(100)   // true
isFinite(-Infinity)   // false
isFinite(1/0)   //false
`}</Code>
      </Para>

      <Note>
        <Word bold italic>
          parseInt()
        </Word>
        <Space />
        and
        <Word bold italic>
          parseFloat()
        </Word>
        <Space />
        functions parse a string until they reach a character that isn't valid
        for the specified number format, then returns the number parsed up to
        that point. However, the "+"" operator converts the string to{' '}
        <Word bold italic>
          NaN
        </Word>
        , if there is any invalid character contained within it.
        <Code>{`parseInt("12.25abc")    // 12
parseFloat("12.25abc")  // 12.25
+ "12.25abc"    // NaN
`}</Code>
      </Note>
    </>
  );
};

export default JSNumberType;
