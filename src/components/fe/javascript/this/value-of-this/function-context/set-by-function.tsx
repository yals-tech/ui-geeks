import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../../../shared/util/util';
const JSThisSetByFunction = () => {
  return (
    <>
      <Para>
        <Heading as='h4'>When "this" is set by the function call</Heading>
        <Para>
          The <B>call()</B>, <B>apply()</B> and <B>bind()</B> methods can be
          used to set the value of <BI>"this"</BI> for the called function.
        </Para>

        <Code>
          {`const  obj = { name: "Name from obj" };
var name = "Name from Global";
function getName() { return this.name; }
let nameValue = getName();
console.log(nameValue);	// "Name from Global"
`}
        </Code>
        <Para>
          <I>"Name from Global"</I> was printed, because <BI>this</BI> was not
          set by the function call, therefore
          <BI>this</BI> refers to a <I>global object</I>.
        </Para>

        <Code>
          {`const  obj = { name: "Name from obj" };
var name = "Name from Global";
function getName() { return this.name; }
let nameValue = getName.call(obj);
console.log(nameValue);	// "Name from obj"
`}
        </Code>
        <Para>
          <I>"Name from obj"</I> was printed, because <BI>call(obj)</BI>
          <Space />
          methods set the value of <BI>this</BI> to <BI>obj</BI>.
        </Para>

        <Code>
          {`let nameValue = getName.apply(obj);
console.log(nameValue);	// "Name from obj"
`}
        </Code>
        <Para>
          <I>"Name from obj"</I> was printed, because <BI>apply(obj)</BI>
          <Space />
          methods set the value of <BI>this</BI> to <BI>obj</BI>.
        </Para>

        <NewLine />
        <Para>
          In <I>non-strict mode</I>, with <BI>call</BI>, <BI>apply</BI> and
          <BI>bind</BI>, if the value passed as this is not an <I>object</I>, an
          attempt will be made to convert it to <I>object</I>. Values
          <BI>null</BI> and <BI>undefined</BI> becomes the <I>global object</I>.
        </Para>

        <Code>
          {`function getThis() { 
  console.log(Object.prototype.toString.call(this));
}
getThis.call(10); // [Object Number]`}
        </Code>
        <Para>
          In above code, <I>Primitive number</I> <B>10</B> is converted to{' '}
          <I>object</I> by <BI>{`new Number(10)`}</BI>.
        </Para>

        <Code>
          {`function getThis() { 
  console.log(Object.prototype.toString.call(this));
}
getThis.call(undefined);  // [Object global]`}
        </Code>
        <Para>
          In above code, the <BI>undefined</BI> is converted to the
          <BI>global object</BI>.
        </Para>

        <Para>
          Let's understand <B>call()</B>, <B>apply()</B> and <B>bind()</B>
          <Space />
          methods in more detail.
        </Para>
      </Para>
    </>
  );
};

export default JSThisSetByFunction;
