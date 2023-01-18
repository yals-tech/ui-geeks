import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, OrderedList } from '../../../shared/util/util';

const protoPros = [
  {
    label: (
      <>
        <B>Fast</B>, <B>standard</B> and <BI>JIT optimizable</BI>
        <Space /> method of setting prototype.
      </>
    )
  },
  {
    label: (
      <>
        High <B>readability</B> and <B>maintainability.</B>
      </>
    )
  }
];

const protoCons = [
  {
    label: (
      <>
        Classes, especially with <I>private</I> properties are
        <BI>less optimized</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Not supported in older environments and <B>may need transpilers</B>.
      </>
    )
  }
];

const JSPrototypeWithConstructor = () => {
  return (
    <>
      <Heading as='h2'>Prototypes with Constructors</Heading>
      <Para>
        The power of prototypes is that we can reuse a set of properties if they
        should be present on every instance.
      </Para>

      <Para>
        <IU>Example 1:</IU>

        <Code>{`function User(name) { this.name = name; }
`}</Code>

        <Para>
          The below statement will add the <BI>showDetail()</BI> method to every
          <Space /> <I>instance</I> created from <I>constructor function</I>
          <BI>User()</BI>. This is because every <I>instance</I> created from a
          <Space /> <I>constructor function</I> will automatically have the
          constructor's prototype property as it's <BI>[[Prototype]]</BI>.
        </Para>

        <Code>{`User.prototype.showDetails = function() {
  console.log(\`Username: \${this.name}\`);
}
`}</Code>

        <Code>
          {`const users = [new User("John"), new User("Jack")];
users.map((usr) => usr.showDetails());
// Output:
// "Username: John"
// "Username: Jack"
`}
        </Code>
      </Para>
      <Para>
        <IU>Example 2:</IU>
        <Para>
          Implementing the same using <I>classes</I>.
        </Para>

        <Code>
          {`class User{
  constructor(name) { this.name = name; }
  showDetail() { 
    console.log(\`Username: \${this.name}\`); 
  }
}
`}
        </Code>
      </Para>

      <Note>
        Because <B>prototype</B> references the same object as the [[Prototype]]
        of all instances, we can change the behavior of all instances by
        <B>mutating the prototype</B> of the constructor function.
      </Note>

      <Note>
        Extending any <B>built-in prototype</B> can be a <B>misfeature</B>. For
        example, defining
        <Space />
        <B>Array.prototype.myMethod = function () {/*......*/}</B>
        and then using myMethod() on all array instances. This misfeature is
        called <B>"Monkey Patching"</B>. Doing monkey patching risks forward
        compatibility, because if JavaScript, in future, adds
        <B>"myMethod()"</B> but with a different signature, it will break the
        code.
      </Note>

      <Para>
        Due to historical reasons, some <I>built-in</I> constructors <Space />
        <I>prototype</I> properties are <I>instances</I> themselves.
      </Para>

      <Para>
        <IU>For Example:</IU>
        <Para>
          <BI>Number.prototype is a number 0</BI> (zero).
        </Para>
        <Code>{`Number.prototype + 1; // 1`}</Code>

        <Para>Similarly, below prototypes are instances themselves</Para>
        <Code>
          {`Array.prototype.map((x) => x +1); // []
String.prototype + "a"; // "a`}
        </Code>
      </Para>

      <Para>
        <IU>
          Pros of using <B>prototype</B>
        </IU>
        <OrderedList unOrdered items={protoPros} />
      </Para>

      <Para>
        <IU>
          Cons of using <B>prototype</B>
        </IU>
        <OrderedList unOrdered items={protoCons} />
      </Para>
    </>
  );
};

export default JSPrototypeWithConstructor;
