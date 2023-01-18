import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I, IU, NewLine } from '../../../../shared/util/util';
import YALSFlex from '../../../../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../../../../shared/yals-flex/yals-flex.types';

const JSUnaryTypeOfOperator = () => {
  return (
    <>
      <Heading as='h3'>typeof Operator</Heading>
      <Para>
        This returns a string indicating the type of the operand. Parentheses
        around <I>typeof</I> are optional.
      </Para>
      <I>Syntax:</I>
      <NewLine />
      <YALSFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        width='400px'
      >
        <Para>
          <B>typeof</B> operand
        </Para>
        <Para>
          <IU>OR</IU>
        </Para>
        <Para>
          <B>typeof</B>(operand)
        </Para>
      </YALSFlex>

      <Code>
        {`const show = () => { console.log("Hello"); }
typeof show   // "function"

const name= "JavaScript";
typeof name   // "string"

const arr = [1, 5];
typeof(arr)   // "object"`}
      </Code>
    </>
  );
};

export default JSUnaryTypeOfOperator;
