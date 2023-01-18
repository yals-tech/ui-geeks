import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../../../shared/util/util';

const behaviorList = [
  {
    label: (
      <>
        <BI>Array()</BI>, <BI>Error()</BI> and <BI>Function()</BI> behave the
        same way, when called as a<I> function</I> or <I>constructor</I>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Boolean()</BI>, <BI>Number()</BI> and <BI>String()</BI> <Space />
        <I>coerce</I> their arguments to the respective <I>primitive type</I>
        <Space /> when called as a <I>function</I>, but returns <Space />
        <I>wrapper objects</I> when <I>constructed</I> with the <BI>new</BI>
        <Space /> operator.
      </>
    )
  }
];

const ES6BehaviorList = [
  {
    label: (
      <>
        <BI>Symbol()</BI> and <BI>BigInt()</BI> can only be called without
        <BI>new</BI>. Attempting to construct then will throw <B>TypeError</B>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Proxy</BI> and <BI>Map</BI> can only be constructed with
        <BI>new</BI>. Attempting to call them as functions will throw a
        <B>TypeError</B>.
      </>
    )
  }
];

const JSNewWithClass = () => {
  return (
    <>
      <Para>
        Prior to ES6, which introduced the <BI>class</BI>, most JavaScript
        <Space /> <I>built-ins</I> are both <I>callable</I> and <Space />
        <I>constructible</I>, although many of them exhibit different behaviors.
        For example:
      </Para>
      <OrderedList expanded items={behaviorList} />

      <Para>
        But after ES6, language is stricter about which are <I>constructors</I>
        <Space /> and which are <I>functions</I>. For example:
      </Para>
      <OrderedList expanded items={ES6BehaviorList} />

      <Para>
        <Heading as='h4'>Using "new" with Classes</Heading>
        <Para>
          Classes can only be instantiated with the <BI>new</BI> operator.
          Attempting to call a <I>class</I> without <I>new</I> will throw
          <B>TypeError</B>.
        </Para>

        <Code>
          {`class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  showName(){
  console.log(this.firstName + "-" + this.lastName);
  }
}

const user = new User("JavaScript", "Language");
user.showName();  // "JavaScript-Language"`}
        </Code>
      </Para>
    </>
  );
};

export default JSNewWithClass;
