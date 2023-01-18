import React from 'react';
import Code from '../../../../shared/code/code';
import Para from '../../../../shared/para/para';
import { B, BI, I, NewLine } from '../../../../shared/util/util';

const JSUnaryOperatorsIntro = () => {
  return (
    <>
      <Para>
        A unary operator requires a single operand, either before or after the
        operator.
      </Para>

      <Para>
        <BI>operator</BI> <I>operand</I>
        <NewLine />
        <Para>
          This form is called <B>prefix</B> unary operator.
        </Para>
      </Para>
      <Code>
        {`let x = 10;
++x;    // 11`}
      </Code>
      <NewLine />
      <Para>
        <I>operand</I> <BI>operator</BI>
        <NewLine />
        <Para>
          This form is called <B>postfix</B> unary operator.
        </Para>
      </Para>
      <Code>
        {`let x = 10;
x++;    // 11`}
      </Code>
    </>
  );
};

export default JSUnaryOperatorsIntro;
