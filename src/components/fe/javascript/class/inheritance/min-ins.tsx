import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, I, IU } from '../../../../shared/util/util';

const JSClassInheritanceMixIns = () => {
  return (
    <>
      <Heading as='h2'>MIX-INS</Heading>
      <Para>
        <B>Abstract classes</B> or <B>mix-ins</B> are templates for classes.
        Class inheritance has a limitation that a <I>class</I> can only
        <Space /> <I>extend</I> one <I>class</I>. A function with a super class
        as input and a subclass extending that superclass as output can be used
        to implement <I>mix-ins</I> in JavaScript.
      </Para>

      <Para>
        <IU>Example:</IU>

        <Code>
          {`class BaseClass { 
  constructor(numArr) {
    this.numArr = numArr;
  }
}
`}
        </Code>

        <Code>
          {`const sumMixin = (Base) =>  class extends Base {
  constructor(numArr) { super(numArr); }
  sum() { return this.numArr.reduce((a, b) => a + b); }
};`}
        </Code>

        <Code>
          {`const averageMixin = (Base) =>  class extends Base {
  constructor(numArr) { super(numArr); }
  average() { 
    return this.numArr.reduce((a, b) => a + b) / this.numArr.length; 
  }
};
`}
        </Code>

        <Code>{`class MathClass extends sumMixin(averageMixin(BaseClass)) { }
const math = new MathClass([2, 5, 6, 8]);
math.sum(); // 21
math.average(); // 5.25`}</Code>
      </Para>
    </>
  );
};

export default JSClassInheritanceMixIns;
