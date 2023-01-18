import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const strictChanges = [
  {
    label: (
      <>
        Changes some silently ignored <I>errors</I> to be thrown, i.e,
        <I>errors</I> which are ignored in <I>non-strict mode</I> will throw
        errors in <I>strict mode</I>.
      </>
    )
  },
  {
    label: (
      <>
        Fixes mistakes that make it difficult for JavaScript engines to perform
        optimizations, i.e, strict mode code can sometimes be made to run faster
        than non-strict mode code.
      </>
    )
  },
  {
    label: (
      <>
        Prohibits some syntax likely to be defined in future versions of
        <Space /> <I>ECMAScript</I>.
      </>
    )
  }
];
const JSStrictModeRestrictions = () => {
  return (
    <>
      <Heading as='h2'>Restrictions applied by strict mode</Heading>

      <Para>
        Below are a few of the restrictions implemented by the strict mode.
      </Para>

      <Para>
        <B>On class and Modules</B>
        <Para>
          <I>Class</I> and <I>JavaScript modules</I> code automatically runs in
          strict mode.
        </Para>
      </Para>

      <Para>
        <B>On global variables</B>
        <Para>
          Strict mode makes it impossible to accidentally create <B>global</B>
          <Space /> variables.
          <Code>
            {`"use strict";
let misTypedVar;
mistypedvar = 10;
`}
          </Code>
        </Para>

        <Para>
          In above example, assuming no <I>global</I> variable
          <BI>"mistypedvar"</BI> exists, this will throw a
          <BI>ReferenceError</BI>, due to spelling mistake. On the contrary,
          <B>non-strict mode</B> would have declared a new <Space />
          <I>global variable</I> named <BI>"mistypedvar"</BI>.
        </Para>
      </Para>

      <Para>
        <B>On assignment</B>
        <Para>
          Strict mode makes <I>assignment</I> to <BI>non-writable</BI>
          <Space /> <I>global variables</I> throw an <Space />
          <I>exception</I>.
          <Code>{`let undefined = 10; // throws TypeError`}</Code>
        </Para>
      </Para>

      <Para>
        <B>On deleting undeletable</B>
        <Para>
          In strict mode, attempting to <I>delete</I> <I>undeletable</I>
          <Space /> properties throws errors.
          <Code>{`delete Math.PI; // throws TypeError`}</Code>
        </Para>
      </Para>

      <Para>
        <B>On function parameters</B>
        <Para>
          Strict mode requires that <I>function</I> <BI>parameter names</BI> to
          be <I>unique</I>.
        </Para>
      </Para>

      <Para>
        <B>On setting properties on primitive values</B>
        <Para>
          Strict mode in <I>ES6</I> <BI>forbids setting properties</BI> on
          <Space /> <I>primitive</I> values.
          <Code>{`(10).text = "Ten";  // TypeError`}</Code>
        </Para>
      </Para>

      <Para>
        <B>On duplicate property names</B>
        <Para>
          In <I>ES5</I> strict mode code, <BI>duplicate property names</BI> were
          considered a<B>SyntaxError</B>. But with the introduction of
          <BI>"computed property names"</BI>, making duplication possible at run
          time, therefore, <I>ES6</I> removed this restriction.
        </Para>
      </Para>

      <Para>
        <B>On "with" keyword</B>
        <Para>
          Strict mode <BI>prohibits</BI> <I>with</I> keyword.
        </Para>
      </Para>

      <Para>
        <B>On eval()</B>
        <Para>
          <BI>eval()</BI> of strict mode code
          <BI>does not introduce new variables</BI> into the surrounding scope.
        </Para>
      </Para>

      <Para>
        <B>On "arguments" object</B>
        <Para>
          Strict mode code doesn't alias properties of <BI>arguments</BI>
          <Space /> object.
        </Para>

        <Para>
          In <BI>non-strict mode</BI> code, a <I>function</I> whose argument is
          let say <B>"arg"</B>, then setting <B>"arg"</B> also sets
          <BI>arguments[0]</BI> and vice-versa. In below code, the value of
          <BI>arguments[0]</BI> is also changed on changing <BI>"arg"</BI>.`
        </Para>
        <Code>
          {`function normalFunc(arg) {
  arg = 10;
  return [arg, arguments[0]];
}

const res = normalFunc(15);
console.log(res[0]);  // 10
console.log(res[1]);  // 10
// The value of arguments[0] was also changed.`}
        </Code>

        <Para>
          But on the strict mode, setting <BI>"arg"</BI> does not change
          <BI>arguments[0]</BI>.
        </Para>

        <Code>
          {`function strictFunc(arg) {
  "use strict";
  arg = 10;
  return [arg, arguments[0]];
}

const res = strictFunc(15);
console.log(res[0]);  // 10
console.log(res[1]);  // 15
// The value of arguments[0] was not changed.`}
        </Code>
      </Para>

      <Para>
        <B>On arguments.callee</B>
        <Para>
          In strict mode, <BI>arguments.callee is no longer supported</BI>. In
          <Space /> <I>non-strict mode</I> code, <I>argument.callee</I> refers
          to the enclosing function.
        </Para>
      </Para>
    </>
  );
};

export default JSStrictModeRestrictions;
