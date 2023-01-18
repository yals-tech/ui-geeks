import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI, I, NewLine, OrderedList } from '../../../../shared/util/util';

const limitationList = [
  {
    label: (
      <>
        Arrow functions don't have their own bindings to
        <BI>this</BI>, <BI>arguments</BI> or
        <BI>super</BI>.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions don't have access to the <BI>new.target</BI> keyword.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions aren't suitable for <BI>call</BI>, <BI>apply</BI> and
        <BI>bind</BI> methods, which generally rely on establishing a scope.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions can't be used as <BI>constructors</BI>, it will throw an
        error when used with the <BI>new</BI> keyword.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions can't use <BI>yield</BI>, within its body.
      </>
    )
  },
  {
    label: (
      <>
        Arrow functions do not have a <BI>prototype</BI> property.
      </>
    )
  }
];
const conciseBodyList = [
  {
    label: (
      <>
        The <I>parentheses</I> are <B>removed</B> around the argument
        <B>"num"</B>, parentheses can be removed if the function has
        <BI>only one argument</BI>.
      </>
    )
  },
  {
    label: (
      <>
        The <I>return</I> statement is <B>removed</B>, this can be done if the
        function contains <BI>only one statement</BI>.
      </>
    )
  }
];

const paranthesesRules = [
  {
    label: (
      <>
        If the arrow function has <B>more than one argument</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Rest parameters</B> always require parentheses.
        <NewLine />
        <I>{`(a, b, …obj) => expression`}</I>
      </>
    )
  },
  {
    label: (
      <>
        <B>Default parameters</B> always require parentheses.
        <NewLine />
        <I>{`(a = 10, b = 5, c ) => expression`}</I>
      </>
    )
  }
];

const JSArrowFunctionsLimitations = () => {
  return (
    <>
      <Heading as='h4'>Limitations of Arrow Function</Heading>
      <Para>
        There are some limitations with arrow function as compared to
        traditional function:
      </Para>

      <Para>
        An arrow function expression is a compact alternative to a traditional
        function expression, but is limited and can't be used in all situations.
      </Para>
      <OrderedList expanded items={limitationList} />

      <NewLine />

      <Para>
        Let's see how we can decompose traditional functions to arrow functions.
        <Code>
          {`// Traditional function
function isEven(num) {
  return num % 2 === 0;
}
`}
        </Code>
      </Para>

      <Para>
        Equivalent arrow function of above traditional function.
        <Code>{`const isEven = (num) => {
  return num % 2 === 0
};`}</Code>
        Above compact alternative is known as
        <B>arrow function with block body</B>.
      </Para>

      <Para>
        We can further decompose the above arrow function. Below given compact
        alternative is known as the <B>arrow function with a concise body</B>.
      </Para>
      <Code>{`const isEven = num => num % 2 === 0;`}</Code>
      <Para>
        Below changes were made to make it more concise:
        <OrderedList unOrdered expanded items={conciseBodyList} />
      </Para>

      <Para>
        Parentheses around arguments <B>cannot</B> be removed for below cases:
        <OrderedList unOrdered expanded items={paranthesesRules} />
      </Para>
    </>
  );
};

export default JSArrowFunctionsLimitations;
