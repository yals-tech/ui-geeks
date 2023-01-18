import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import {
  B,
  BI,
  I,
  Indent,
  NewLine,
  OrderedList
} from '../../../shared/util/util';

const JSFunctionIIFE = () => {
  return (
    <>
      <Heading as='h3'>IIFE (Immediately Invoked Function Expression)</Heading>

      <Para>
        JavaScript provides a mechanism for simultaneously declaring and
        invoking a function, using a single expression, it is called <B>IIFE</B>
        .
      </Para>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        <B>{`(function() { `}</B>
        <NewLine />
        <Indent>...</Indent>
        <NewLine />
        <Indent>
          <I>
            {`<`}body of function{`>`}
          </I>
        </Indent>
        <NewLine />
        <B>{`})( );`}</B>
      </Para>

      <Para>
        It is a design pattern which is also known as a
        <B>"Self-Executing Anonymous Function"</B> and contains two major parts:
      </Para>

      <Para>
        <OrderedList
          expanded
          items={[
            {
              label: (
                <>
                  First is the anonymous function with
                  <BI>lexical scope</BI>. This prevents accessing variables
                  within the IIFE scope from outside code, as well as avoids
                  polluting global scope.
                </>
              )
            },
            {
              label: (
                <>
                  The second part <B>"( )"</B> (
                  <I>
                    Parenthesis, placed at the end of the function declaration
                  </I>
                  ), creates the immediately invoked function expression,
                  through which the JavaScript engine will directly interpret
                  the function.
                </>
              )
            }
          ]}
        />
      </Para>
    </>
  );
};

export default JSFunctionIIFE;
