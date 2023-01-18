import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../../../shared/util/util';
const JSBind = () => {
  return (
    <>
      <Heading as='h4'>bind()</Heading>

      <Para>
        This method creates a new function that, when called, has it's
        <Space /> <I>this</I>, set to the provided value, with the given
        arguments preceding any arguments provided when the new function is
        called.
      </Para>

      <Para>
        <I>Syntax:</I>
      </Para>

      <Para>
        bind(<BI>thisArg</BI>)
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI>.
      </Para>

      <Para>
        bind(<BI>thisArg</BI>, arg1, arg2, …, argN)
        <NewLine />
        <BI>this</BI> will be replaced with <BI>thisArg</BI> and following
        <Space /> <I>arguments</I> will be assigned to function <I>arguments</I>
        .
      </Para>

      <Para>
        <I>bind()</I> is similar to <BI>call()</BI>, with a difference that
        <BI>thisArg</BI> and <BI>arguments</BI> can't be reassigned i.e., it
        holds the values from the <B>first bind call</B>.
      </Para>

      <Para>
        The <I>bind()</I> method returns a copy of the given function with the
        specified <BI>this</BI> value and initial arguments (if provided).
      </Para>

      <Para>
        The <I>bind()</I> function creates a <I>new bound function</I>. Calling
        a <I>bound function</I> generally results in the execution of its
        wrapper function. The bound function will store the parameters passed,
        which includes the value of <I>this</I> and the arguments, as its
        internal state. These values are stored in advance, instead of being
        passed the time of calling function.
      </Para>

      <Para>
        This concept is also called <B>Function Currying</B>, where a function
        is created from an existing function, by presetting some of the
        parameters.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <NewLine />
        In below example, the argument <B>"a"</B> of the <BI>multiply()</BI>
        <Space />
        function is assigned the value <B>2</B> in advance.
        <Code>{`function multiply(a, b) { return a * b; }
const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));	// 10`}</Code>
      </Para>
      <NewLine />
      <Para>
        <IU>Example 2:</IU>
        <NewLine />
        Similarly, in below example, the argument <B>"a"</B> of the
        <BI>multiply()</BI>
        <Space />
        function is assigned the value <B>3</B> in advance.
        <Code>{`function multiply(a, b) { return a * b; }
const multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(10));	// 30`}</Code>
      </Para>
      <NewLine />

      <Para>
        <IU>Example 3:</IU>
        <NewLine />
        Below example, demonstrates that binding can't be reassigned.
        <Code>
          {`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}
const obj = { a: 10, b : 20 };
const newSumFn = sum.bind(obj, 5, 15);
const res = newSumFn();
console.log(res)  // 50

// Passing fresh arguments here
const res1 = newSumFn(100, 200);
console.log(res1) // 50
// Still prints 50, fresh arguments were ignored. 
`}
        </Code>
        <Para>
          The value of <BI>res1</BI> was <I>50</I>, because
          <BI>arguments passed at the time of call</BI> were ignored. This
          proves that arguments can't be reassigned. Values given at the time of
          calling function are ignored here.
        </Para>
      </Para>

      <Para>
        <IU>Example 4:</IU>
        <NewLine />
        <Code>{`function sum(num1, num2) {
  return this.a + this.b + num1 + num2;
}
const obj = { a: 10, b : 20 };
const newSumFn = sum.bind(obj, 5, 15);
const res = newSumFn();
console.log(res)  // 50

const anotherObj = { a: 100, b: 200 };
const anotherSumFn = newSumFn(anotherObj, 500, 1000);
const res2 = anotherSumFn();
console.log(res2) // 50`}</Code>

        <Para>
          The value of <BI>res2</BI> was <I>50</I>, because
          <BI>anotherObj</BI> passed as <BI>this</BI> at the time of call was
          ignored. This proves that <BI>this</BI> can't be reassigned. Values
          given at the time of calling function are ignored here. Also, observe
          that <BI>anotherSumFn</BI> was created from an earlier binded function
          <BI>newSumFn</BI> <Space /> and not <BI>sum</BI>.
        </Para>
      </Para>

      <Note>
        Original function can be bound multiple times. For example:
        <NewLine />
        const anotherSumFn = <B>sum.bind</B>(anotherObj, 500, 1000);
        <NewLine />
        {`const res2 = anotherSumFn();`}
        <NewLine />
        {`console.log(res2);  // 1800`}
      </Note>
    </>
  );
};

export default JSBind;
