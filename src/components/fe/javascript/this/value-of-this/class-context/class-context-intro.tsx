import React from 'react';
import Code from '../../../../../shared/code/code';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I } from '../../../../../shared/util/util';
const JSValueOfThisClassContextIntro = () => {
  return (
    <>
      <Para>
        The behavior of <BI>this</BI> in <I>class</I> and <I>function</I> is
        similar, since <I>classes</I> are <Space /> <I>functions</I> under the
        hood. Within a <I>class constructor</I>, <I>this</I> is a regular
        <Space /> <I>object</I>. All <I>non-static methods</I> of the class are
        added to the <I>prototype</I> of <I>this</I>.
      </Para>

      <Note>
        static methods are not properties of <BI>this</BI>, they are properties
        of the class itself.
      </Note>

      <Code>
        {`class User {
    constructor() {
      const proto =  Object.getPrototypeOf(this);
      console.log(Object.getOwnPropertyNames(proto));
    }

    firstName() { console.log("firstName instance method"); }
    lastName() { console.log("lastName instance method"); }
    static address() { console.log("address static method"); }
}
`}
      </Code>

      <Para>
        <B>Object.getPrototypeOf()</B>: This method returns the <I>prototype</I>
        <Space /> of the given <I>object</I>, in our case prototype of
        <BI>this</BI>.
      </Para>

      <Para>
        <B>Object.getOwnPropertyNames()</B>: This method returns the array of
        property names, which are the <BI>own properties</BI> of the given
        <Space /> <I>object</I> (excluding the <I>prototype</I> properties).
      </Para>

      <Code>{`new User(); // ["constructor", "firstName", "lastName"]`}</Code>

      <Para>
        In above example, <BI>address()</BI> is not returned in array, because
        <Space /> <I>static methods</I> are properties of <I>class</I> and not
        the <I>instance</I> <BI>(this)</BI>.
      </Para>
    </>
  );
};

export default JSValueOfThisClassContextIntro;
