import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const JSArrowFunctionsAsClassField = () => {
  return (
    <>
      <Heading as='h4'>Arrow Functions as Class Fields</Heading>
      <Para>
        A class's body has <BI>this</BI> context, <I>arrow functions</I> as
        <BI>class fields</BI> uses the class's <BI>this</BI> context and
        <BI>this</BI> inside arrow function will point to the <I>instance</I>.
        However, because it created a <I>closure</I>, not the function's
        <Space />
        <I>own binding</I>, the value of <BI>this</BI> will not change based on
        the execution context.
      </Para>

      <Code>
        {`class User {
  name = "JavaScript";
  showName = ()=> { console.log(this.name); }
}

const user = new User();
user.showName() //  "JavaScript"
`}
      </Code>

      <Para>
        <B>"JavaScript"</B> was printed on console, because <BI>this.name</BI>{' '}
        refers to the class context.
      </Para>

      <Para>
        Now let's try to change the context of <B>this</B>.
      </Para>
      <Code>
        {`class User {
  name = "JavaScript";
  showName = ()=> { console.log(this.name); }
}

const user = new User();
const { showName } = user;  // Breaking clas context here
showName()  // "JavaScript"`}
      </Code>

      <Para>
        Still <B>"JavaScript"</B> was printed on console, because the class's
        arrow function always refers to <BI>this</BI> of the class, which
        <BI>never changes</BI>. Therefore <B>"JavaScript"</B> was printed on the
        console, otherwise undefined should have been printed.
      </Para>

      <Para>
        Because the class's arrow function always refers to <BI>this</BI> of the
        class, which <B>never changes</B>, arrow functions are often said to be
        <B>"auto-bound methods"</B>.
      </Para>

      <Heading as='h4'>
        Arrow function not to be used with call, apply and bind
      </Heading>
      <Para>
        The <BI>call()</BI>, <BI>apply()</BI> and <BI>bind()</BI> methods are
        not suitable as arrow functions, as these methods were designed to allow
        methods to execute with <B>different scopes</B>, but arrow functions on
        the other hand establish
        <BI>this</BI> only based on the scope of the context in which the arrow
        function is defined.
      </Para>

      <Code>
        {`const obj = { a: 10 };
var a = 100;
const sum = (num1, num2) => this.a + num1 + num2;

sum.call(obj, 5, 50);	// 155
//Because:  100 +    5   +  50 = 155
//     	    this.a  num1    num2
`}
      </Code>
      <Para>
        Although the expected result was <B>65</B> ( 10 + 5 + 50), we got
        <B>155</B>, proving that arrow functions point <BI>this</BI> to the
        enclosing scope, which is the <BI>window</BI> here.
      </Para>

      <Para>
        Same behavior is observed with <BI>bind()</BI> and <BI>apply()</BI>
        <Space />
        methods.
      </Para>

      <Note>
        Class fields are defined on the <B>instance</B>, not on the
        <B>prototype</B>, so every instance creation would create a new function
        reference and allocate a new closure, potentially leading to more memory
        usage than a normal unbound method.
      </Note>
    </>
  );
};

export default JSArrowFunctionsAsClassField;
