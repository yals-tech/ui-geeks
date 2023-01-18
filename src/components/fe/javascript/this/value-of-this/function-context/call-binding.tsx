import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../../../shared/util/util';
const JSCall = () => {
  return (
    <>
      <Heading as='h4'>call()</Heading>

      <Para>
        This method calls the function with given <BI>this</BI> value and
        <Space />
        <I>arguments</I>
        <Space />
        provided individually.
      </Para>

      <Para>
        <I>Syntax:</I>
      </Para>

      <Para>
        call()
        <NewLine />
        <BI>this</BI> will be replaced with <BI>global</BI> in <Space />
        <I>non-strict mode</I> and <BI>undefined</BI> in <I>strict mode</I>.
      </Para>

      <Para>
        call(<BI>thisArg</BI>)
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI>.
      </Para>

      <Para>
        call(<BI>thisArg</BI>, arg1, arg2, …, argN)
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI> and following
        <Space /> <I>arguments</I> will be assigned to function <I>arguments</I>
        .
      </Para>

      <Para>
        <Code>
          {`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}
var a = 100;
var b = 200;
// Both variables are declared in the global object.

const res = sum.call(null, 2, 5);
console.log(res)  // 307
// Because null was passed as the value of thisArg,
// this was replaced with the global object.
// Therefore:   100  +  200    +  2   +  5   = 307
                this.a  this.b   num1   num2
`}
        </Code>
      </Para>

      <Para>
        <Code>
          {`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}
const obj = {  a: 10, b: 20 };
const res = sum.call(obj, 5, 25);
console.log(res)  // 60
// Therefore:   10    +  20    +  5   +  25   = 60
                this.a  this.b   num1   num2
`}
        </Code>
      </Para>

      <Para>
        The <B>call()</B> allows for a function/method belonging to one object
        to be assigned and called for a different object.
      </Para>

      <Code>
        {`const obj = { 
   a: 10,
   b: 20,
   sum(num1, num2) {
    return this.a + this.b + num1 + num2);
  }
};

const anotherObj = { a: 100, b: 200 };
const res = obj.sum.call(anotherObj, 5, 5);
console.log(res)  // 307`}
      </Code>
    </>
  );
};

export default JSCall;
