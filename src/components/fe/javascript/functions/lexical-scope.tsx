import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine, OrderedList } from '../../../shared/util/util';

const scopeTypeList = [
  {
    label: (
      <>
        <B>Global Scope</B>
        <NewLine />
        Variables defined in global scope are available throughout the source
        code.
      </>
    )
  },
  {
    label: (
      <>
        <B>Function Scope</B>
        <NewLine />
        Variables defined in function scope are available in that function body
        only i.e they are local to that function.
      </>
    )
  },
  {
    label: (
      <>
        <B>Lexical Scope</B>
        <NewLine />
        This is also known as <I>block-scope</I> and was introduced in
        <B>ES6</B>. Variables defined in lexical scope are available only within
        the enclosing block.
      </>
    )
  }
];

const JSFunctionLexicalScope = () => {
  return (
    <>
      <Heading as='h2'>Lexical Scope</Heading>
      <Para>
        The word <B>"lexical"</B> refers to the fact that lexical scoping uses
        the <B>location</B> where a variable is declared within the source code,
        to determine where that variable can be <BI>accessible</BI>.
      </Para>

      <Para>There are three types of scope in JavaScript:</Para>

      <Para>
        <OrderedList expanded items={scopeTypeList} />
      </Para>

      <Para>
        In ES6, JavaScript introduced the<BI>let</BI> and <BI>const</BI>
        <Space /> keywords, which allows to create block-scoped variables.
      </Para>

      <Code>
        {`if(true) { const x = 1; }
else { const x = 2; }
console.log(x);	// ReferenceError`}
      </Code>

      <Para>
        <I>
          The above statement gives <B>ReferenceError</B>, because <B>"x"</B> is
          a block-scoped variable and is not accessible here.
        </I>
      </Para>

      <Para>
        In contrast to the above example, if we declare a variable using
        <BI>var</BI>, it would create a <I>global scope</I> and the variable
        should be available after the <I>if-else</I> block.
      </Para>

      <Code>
        {`if(true) { var x = 1; }
else { var x = 2; }
console.log(x);	// 1`}
      </Code>
    </>
  );
};

export default JSFunctionLexicalScope;
