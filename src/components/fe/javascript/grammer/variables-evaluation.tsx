import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, NewLine, OrderedList } from '../../../shared/util/util';

const JSVariableEvaluation = () => {
  const namingRules: Array<IOrderedListItemType> = [
    {
      label: (
        <>
          Variable declared using the <B>var/let/const</B> with no assignment,
          has the value of <BI>undefined</BI>.
        </>
      )
    },
    {
      label: (
        <>
          Attempting to access an undeclared variable results in
          <B>ReferenceError</B>.
        </>
      )
    },
    {
      label: (
        <>
          The <BI>undefined</BI> value behaves as <BI>false</BI> in boolean
          context and <BI>NaN</BI> in numeric context.
          <Code>
            {`undefined + 10    // NaN 
undefined && true    // false`}
          </Code>
        </>
      )
    },
    {
      label: (
        <>
          The <BI>null</BI> value behaves as <BI>false</BI> in boolean context
          and <BI>0 (Zero)</BI> in numeric context.
          <Code>
            {`null + 10   // 10
null && true    // false`}
          </Code>
        </>
      )
    }
  ];

  return (
    <>
      <Heading as='h2'>Evaluating Variables</Heading>

      <Para>
        Below given rules are applied while evaluating variables.
        <NewLine />
        <NewLine />
        <OrderedList unOrdered expanded items={namingRules} />
      </Para>
    </>
  );
};

export default JSVariableEvaluation;
