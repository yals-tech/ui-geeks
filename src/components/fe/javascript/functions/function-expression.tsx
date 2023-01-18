import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, Indent, NewLine } from '../../../shared/util/util';

const JSFunctionsExpression = () => {
  return (
    <>
      <Heading as='h2'>Function Expression</Heading>
      <Para>
        This is very similar to function declaration and has almost the same
        syntax. The main difference is the <B>name-of-function</B>, which can be
        omitted to create <BI>anonymous functions</BI>. Another difference is
        that
        <B>function expressions are not hoisted</B>, while function declarations
        are
        <B>hoisted</B>.
      </Para>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        const
        <BI>{`<`}name-of-function</BI>
        {`>`} = function(
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

      <Code>
        {`const add = function(a, b) { return a + b; }
// <name-of-function> is "add", while <parameters> are "a" and "b".`}
      </Code>
    </>
  );
};

export default JSFunctionsExpression;
