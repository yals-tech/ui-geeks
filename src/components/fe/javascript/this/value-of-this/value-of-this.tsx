import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { BI, I } from '../../../../shared/util/util';
import JSValueOfThisInClassContext from './class-context/value-in-class-context';
import JSValueOfThisInFunctionContext from './function-context/value-in-function-context';
import JSValueOfThisInGlobalContext from './value-in-global-context';
const JSValueOfThis = () => {
  return (
    <>
      <Heading as='h2'>Value of "this"</Heading>
      <Para>
        The value of <I>this</I> is the property of an execution context (
        <I>Global, function or eval</I>), that is always a reference to an
        <BI>object</BI> in <I>non-strict mode</I> and can be <BI>any value</BI>
        <Space />
        in <I>strict mode</I>.
      </Para>

      <JSValueOfThisInGlobalContext />
      <JSValueOfThisInFunctionContext />
      <JSValueOfThisInClassContext />
    </>
  );
};

export default JSValueOfThis;
