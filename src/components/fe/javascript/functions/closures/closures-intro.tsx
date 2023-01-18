import React from 'react';
import Code from '../../../../shared/code/code';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../../shared/util/util';
import JSFunctionLexicalScope from '../lexical-scope';

const JSFunctionClosuresIntro = () => {
  return (
    <>
      <Para>
        A <B>closure</B> is the <BI>combination</BI> of a
        <BI>function bundled together</BI> (enclosed) with the references to its
        <B>surrounding state</B> (the <B>lexical</B> <Space />
        <I>environment variables</I>). In other words, a closure gives us access
        to an out function's scope from an inner function,
        <BI>when the parent function has returned</BI>. In JavaScript closures
        are <BI>created every time a function is created</BI>.
      </Para>

      <Para>
        Let's learn about <B>Lexical Scope</B>, in order to understand closures
        better.
      </Para>

      <Para>
        <JSFunctionLexicalScope />
      </Para>

      <Para>
        Since we know about <I>lexical scope</I>, now let's try to understand
        closures.
      </Para>

      <Para>
        In closure, the <I>lexical environment</I> consists of any local
        variables that were <I>in-scope</I> at the time of closure creation.
        Let's try to understand this with the help of an example.
      </Para>

      <Code>
        {`function makeAdder(x) {
  return function(y) { return x + y; }
}
`}
      </Code>

      <Para>
        <B>Lexical environment contains</B>: variable <B>x</B>
      </Para>

      <Code>{`const add5 = makeAdder(5);`}</Code>

      <Para>
        Because the <BI>makerAdder()</BI> function is returned, <B>"x"</B>
        <Space />
        should have been gone, but since it formed closure, "x" is still
        available in <BI>lexical scope</BI>.
        <NewLine />
        <NewLine />
        <I>
          The value of the lexical environment variable <B>x</B> would be
          <B>5</B>.
        </I>
      </Para>

      <Code>{`const add10 = makeAdder(10);`}</Code>
      <Para>
        <I>
          The value of the lexical environment variable <B>x</B> would be
          <B>10</B>.
        </I>
      </Para>

      <Code>
        {`console.log(add5(2))	// 7
console.log(add10(2))	// 12
`}
      </Code>

      <Para>
        Both <BI>add5()</BI> and <BI>add10()</BI> are closures. They share the
        same function body definition, but store different lexical environments.
        In
        <BI>add5()</BI>, lexical environment <B>x</B> is 5, while in
        <B>add10()</B> it is 10.
      </Para>

      <Para>
        In essence, <BI>makeAdder()</BI> is a <B>function factory</B>. It
        creates functions that can add a specific value to their arguments.
      </Para>
    </>
  );
};

export default JSFunctionClosuresIntro;
