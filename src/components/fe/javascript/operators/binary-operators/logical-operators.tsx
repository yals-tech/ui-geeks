import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, NewLine, OrderedList } from '../../../../shared/util/util';

const ANDCircuitEvaluation = () => {
  return (
    <>
      false && <B>expression</B>, is short-circuit evaluated to <BI>false</BI>.
      This means the expression will not be evaluated/executed.
      <Code>
        {`// Example 1:
const val = evt && evt.target && evt.target.value`}
      </Code>
      <Para>
        <BI>expression1</BI> = evt <NewLine />
        <BI>expression2</BI> = evt.target <NewLine />
        <BI>expression3</BI> = evt.target.value <NewLine />
        <NewLine />
        <BI>expression2</BI> will not be evaluated until
        <BI>expression1</BI> results <BI>true</BI> and
        <BI>expression3</BI> will not be evaluated until
        <BI>expression2</BI> results <BI>true</BI>.
      </Para>
      <Code>
        {`// Example 2:
callback && callback();`}
      </Code>
      <Para>
        <BI>callback()</BI> will be executed if it's defined i.e., callback as{' '}
        <BI>expression1</BI> results <B>true</B>.
        <NewLine />
        <NewLine />
      </Para>
    </>
  );
};

const ORCircuitEvaluation = () => {
  return (
    <>
      <B>true</B> || expression, is short-circuit evaluated to true.
      <Code>
        {`// Example 1:
const msg = null;
const res = msg || "Default Message";`}
      </Code>
      <Para>
        <BI>expression1</BI> = msg <NewLine />
        <BI>expression2</BI> = "Default Message" <NewLine />
        <NewLine />
        <Para>
          <B>"Default Message"</B> is assigned to the <BI>res</BI> variable,
          because <BI>expression1</BI>
          <Space />
          is not <B>true</B>, therefore <BI>expression2</BI> is returned.
        </Para>
      </Para>
      <Code>
        {`// Example 2:
const res = 0 || "Hello";`}
      </Code>
      <Para>
        <B>"Hello"</B> is assigned to the res variable, because the Logical OR
        operator treats <I>0, "", NaN, null, undefined</I> as <B>falsy</B>
        <Space />
        value, therefore <B>0 (zero)</B> was not returned.
      </Para>
      <Para>
        But what if we want <B>0 (zero)</B> to be returned, basically to treat
        only <I>null</I> and <I>undefined</I> as <BI>falsy</BI> value. We can
        use the
        <B>Nullish Coalescing Operator (??)</B>.
        <Code>
          {`res = 0 ?? "Hello"    // 0 
res = null ?? "Hello"   // "Hello"
res = undefined ?? "Hello"    // "Hello"`}
        </Code>
      </Para>
    </>
  );
};

const JSBinaryLogicalOperators = () => {
  return (
    <>
      <Para>
        <Heading as='h3'>Binary Logical Operators</Heading>
        Logical operators are typically used with <BI>boolean values</BI>
        <Space /> and return a boolean value. However, if they are used with
        <Space /> <I>non-boolean</I> <Space />
        values, they may return <B>non-boolean values</B>.
      </Para>

      <Heading as='h4'>Logical AND (&&) operator</Heading>
      <Para>
        <I>operand1</I> <BI>&&</BI> <I>operand2</I>
      </Para>
      <Para>
        When used with <B>boolean values</B>, returns true if both
        <Space /> <I>operands</I> are <BI>true</BI>, otherwise returns
        <BI>false</BI>.
      </Para>

      <Code>{`false && true     // false
true && true      // true`}</Code>
      <NewLine />
      <Para>
        When used with <B>non-boolean</B> values, returns <I>operand1</I> if it
        can be converted to <I>false</I>, otherwise returns <I>operand2</I>.
      </Para>
      <Code>
        {`"JS" && "Program"   // "Program"
// Because first operand "JS" cannot be converted to false

false && "Program"    // false
// Because first operand is false

"Program" && false    // false
// Because first operand "Program" can't be converted to false, 
// hence the second operand is returned. `}
      </Code>

      <Note>
        If any operand is <B>false</B>, final result will always be <B>false</B>
        .
      </Note>

      <Heading as='h4'>Logical OR (||) operator</Heading>
      <Para>
        <I>operand1</I> <BI>||</BI> <I>operand2</I>
      </Para>

      <Para>
        When used with <B>boolean values</B>, returns <B>true</B>, if any
        operand is <I>true</I>, otherwise returns <B>false</B>.
      </Para>
      <Code>{`true || false     // true`}</Code>

      <Para>
        When used with <B>non-boolean values</B>, returns <BI>operand1</BI>, if
        it can be converted to <BI>true</BI>, otherwise returns
        <BI>operand2</BI>.
      </Para>

      <Code>
        {`"JS" || "Program"   // "JS"
        
false || "Program"    // "Program"
// Because operand1 can't be converted to true, therefore, returned operand2`}
      </Code>

      <Heading as='h3'>Short-circuit Evaluation</Heading>
      <Para>
        Because logical operators are evaluated from left to right, they are
        tested for possible <BI>"short-circuit"</BI> evaluation using below
        rules:
      </Para>

      <OrderedList
        expanded
        items={[
          {
            label: <ANDCircuitEvaluation />
          },
          {
            label: (
              <>
                <ORCircuitEvaluation />
              </>
            )
          }
        ]}
      />
    </>
  );
};

export default JSBinaryLogicalOperators;
