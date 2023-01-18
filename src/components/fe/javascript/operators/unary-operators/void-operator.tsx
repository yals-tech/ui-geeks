import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I, IU, NewLine } from '../../../../shared/util/util';
import YALSFlex from '../../../../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../../../../shared/yals-flex/yals-flex.types';

const JSUnaryVoidOperator = () => {
  return (
    <>
      <Heading as='h3'>void Operator</Heading>
      <Para>
        This operator specifies an expression to be evaluated without returning
        a value.
      </Para>
      <I>Syntax:</I>
      <NewLine />
      <YALSFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        width='400px'
      >
        <Para>
          <B>void</B> expression
        </Para>
        <Para>
          <IU>OR</IU>
        </Para>
        <Para>
          <B>void</B>(expression)
        </Para>
      </YALSFlex>

      <Code>
        {`const res = void 3 + 5
console.log(res)    // undefined`}
      </Code>
    </>
  );
};

export default JSUnaryVoidOperator;
