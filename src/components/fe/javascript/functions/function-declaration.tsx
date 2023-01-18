import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, Indent, NewLine } from '../../../shared/util/util';

const JSFunctionsDeclaration = () => {
  return (
    <>
      <Heading as='h2'>Function Declaration</Heading>
      <Para>
        <B>function</B> keyword is used to declare a function.
      </Para>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        <B>function </B>
        <BI>{`<`}name-of-function</BI>
        {`>`}(
        <BI>
          {`<`}parameters{`>`}
        </BI>
        ) {`{`}
        <NewLine />
        <Indent>...</Indent>
        <NewLine />
        <Indent>
          <I>
            {`<`}body of function{`>`}
          </I>
        </Indent>
        <NewLine />
        {`}`}
      </Para>

      <Para>
        <B>name-of-function</B>: A valid identifier/name for the created
        function.
      </Para>

      <Para>
        <B>parameters</B>: These are named parameters/arguments. A function can
        have 0 (zero) or more parameters.
      </Para>

      <Para>
        <B>return</B>: statement is used to return any valid value from the
        function. This value is returned to the <I>caller</I> of the function,
        <B>terminating</B> the function. If no <I>return</I> statement is given,
        then JavaScript returns <I>undefined</I>.
      </Para>

      <Code>
        {`function add(a, b) { return a + b; } 
// <name-of-function> is "add", while <parameters> are "a" and "b".`}
      </Code>
    </>
  );
};

export default JSFunctionsDeclaration;
