import React from 'react';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import { I } from '../../../../../shared/util/util';
import JSApply from './apply-binding';
import JSBind from './bind-binding';
import JSCall from './call-binding';
import JSThisNotSetByFunction from './not-set-by-function';
import JSThisSetByFunction from './set-by-function';
const JSValueOfThisInFunctionContext = () => {
  return (
    <>
      <Heading as='h3'>Value of "this" in the Function Context</Heading>
      <Para>
        Inside a function, the value of <I>this</I> depends on how the function
        is called.
      </Para>

      <Para>
        <JSThisNotSetByFunction />
        <JSThisSetByFunction />
        <JSCall />
        <JSApply />
        <JSBind />
      </Para>
    </>
  );
};

export default JSValueOfThisInFunctionContext;
