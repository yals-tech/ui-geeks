import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import {
  B,
  BI,
  I,
  IU,
  NewLine,
  OrderedList
} from '../../../../shared/util/util';

const scopeItems = [
  {
    label: (
      <>
        <B>Local Scope</B> (Own scope)
      </>
    )
  },
  {
    label: (
      <>
        <B>Enclosing Scope</B> (Can be block, function or module scope)
      </>
    )
  },
  {
    label: <B>Global Scope</B>
  }
];

const JSClosureScopeChain = () => {
  return (
    <>
      <Heading as='h3'>Closure Scope Chain</Heading>

      <Para>
        Every closure has three scopes:
        <OrderedList items={scopeItems} />
      </Para>

      <Para>
        When nested functions themselves contain nested functions, this
        effectively creates a chain of function scopes.
      </Para>

      <Code>
        {`const globalVal = 10; // Global Scope
function sum(a) {
  // outer scope
  return function(b) {
    // outer scope
    return function(c){
      // local scope
      return a + b + c + globalVal;
    }
  }
}

const result = sum(1)(2)(3);
console.log(result)	// 16`}
      </Code>

      <Para>
        There's a series of nested functions, all of which have access to the
        outer scope. In this context, it can be said that closures have access
        to all outer function scopes.
      </Para>

      <Para>
        Closures can access members in <BI>module scope</BI> too. We'll learn
        about <B>modules</B> in later sections, but for now, let's just try to
        understand module scope with closures.
      </Para>

      <Code>
        {`// my-module.js
let x = 5;
export const getX = () => x;
export const setX = (val) => { x = val; };
`}
      </Code>

      <Para>
        Here, the module <I>exports</I> a pair of <I>getter-setter</I>
        <Space />
        functions, which close over the module-scoped variable <B>"x"</B>. Even
        when <B>"x"</B> is not directly accessible from other modules, it can be
        read/written with the help of exported functions.
      </Para>

      <Code>
        {`import { getX, setX } from "./my-module.js";
console.log(getX()) // 5
setX(6);
console.log(getX()) // 6`}
      </Code>

      <Para>
        Closures can close over imported values as well, which are regarded as
        <B>"live bindings"</B>, because when the original value changes, the
        imported members changes automatically.
      </Para>

      <Code>
        {`// my-module.js
export let x =1;
Yesexport const setX = (val) => { x = val; };
`}
      </Code>

      <Code>
        {`// closure-creator.js
import { x } from "./my-module.js";
export const getX = () => x;
// Live binding is created for variable "x"`}
      </Code>

      <Code>
        {`// main-program.js
import { getX } from "./closure-creator.js";
import { setX } from "./my-module.js";
console.log(getX())	// 1
setX(2);
console.log(getX())	// 2
`}
      </Code>

      <Para>
        <BI>setX(2);</BI>
        <NewLine />
        Above statement updated the value of <B>"x"</B>, placed in
        <Space />
        <IU>my-module.js</IU>, and at the same time updated the value of
        <B>"x"</B> in <IU>closure-creator.js</IU> with the help of
        <B>live binding</B>.
      </Para>
    </>
  );
};

export default JSClosureScopeChain;
