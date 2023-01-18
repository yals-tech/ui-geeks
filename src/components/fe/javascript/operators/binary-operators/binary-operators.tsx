import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI, I, NewLine, OrderedList } from '../../../../shared/util/util';
import JSBinaryAssignmentOperators from './assignment-operators';
import JSBinaryEqualityOperators from './equality-operators';
import JSBinaryLogicalOperators from './logical-operators';
import JSBinaryRelationOperators from './relational-operators';

const JSBinaryOperators = () => {
  const categoryList = [
    {
      label: 'Arithmetic operators (+, -, *, /, %, **)'
    },
    {
      label: 'Relational/Comparison operators (<, >, <=, >=)'
    },
    {
      label: 'Equality operators (==, !=, ===, !==)'
    },
    {
      label: 'Assignment operators (=, +=, -=, *=, /=, %=)'
    },
    {
      label: 'Binary Logical operators (&&, ||)'
    },
    {
      label: 'Binary Bitwise operators (&, |, ^)'
    }
  ];

  return (
    <>
      <Heading as='h2'>Binary Operators</Heading>
      <Para>
        A binary operator requires <B>two operands</B>, one before and one
        after. This form of expression is called an <BI>infix</BI> binary
        operator, because the operator is placed in-between two operands. All
        binary operators in JavaScript are infix.
      </Para>

      <Para>
        <I>operand1</I> <BI>operator</BI> <I>operand2</I>
      </Para>

      <Code>
        {`// Examples:
1  + 10
3 < 5
10  && 5`}
      </Code>

      <Para>
        <NewLine />
        Binary operators can be divided in given categories:
        <OrderedList unOrdered items={categoryList} />
      </Para>

      <Para>
        <Heading as='h3'>Arithmetic Operators</Heading>
        These are normal mathematical operators, which we have learned in
        school.
        <Code>
          {`10 + 50   // 60
5 * 4   // 20
20 % 6  // 2 (Modulus operator, returns the remainder)
2 ** 3  // 8 (Exponential operator)`}
        </Code>
      </Para>

      <JSBinaryRelationOperators />
      <JSBinaryEqualityOperators />
      <JSBinaryAssignmentOperators />
      <JSBinaryLogicalOperators />
    </>
  );
};

export default JSBinaryOperators;
