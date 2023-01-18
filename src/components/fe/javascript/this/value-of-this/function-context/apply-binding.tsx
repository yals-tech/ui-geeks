import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { BI, I, NewLine } from '../../../../../shared/util/util';
const JSApply = () => {
  return (
    <>
      <Heading as='h4'>apply()</Heading>

      <Para>
        This is similar to the <I>call()</I> method, with just one difference
        that arguments are passed as an array.
        <Space />
        <I>arguments</I>
        <Space />
        provided individually.
      </Para>

      <Para>
        <I>Syntax:</I>
      </Para>

      <Para>
        apply()
        <NewLine />
        <BI>this</BI> will be replaced with <BI>global</BI> in <Space />
        <I>non-strict mode</I> and <BI>undefined</BI> in <I>strict mode</I>.
      </Para>

      <Para>
        apply(<BI>thisArg</BI>)
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI>.
      </Para>

      <Para>
        apply(<BI>thisArg</BI>, [arg1, arg2, …, argN])
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI> and the following
        <BI>array of arguments</BI> will be assigned to function <Space />
        <I>arguments</I>.
      </Para>

      <Para>
        <Code>
          {`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}
const obj = {  a: 10, b: 20 };
const res = sum.apply(obj, [5, 25]);
console.log(res)  // 60
// Therefore:   10    +  20    +  5   +  25   = 60
                this.a  this.b   num1   num2
`}
        </Code>

        <Para>
          Because <BI>obj</BI> was passed as the value of <BI>thisArg</BI>,
          <BI>this</BI> was replaced with
          <BI>obj</BI> and <BI>[5, 25]</BI> were assigned to function
          <Space />
          <I>parameters</I>.
        </Para>
      </Para>
    </>
  );
};

export default JSApply;
