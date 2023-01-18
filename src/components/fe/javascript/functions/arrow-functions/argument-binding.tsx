import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { BI } from '../../../../shared/util/util';

const JSArrowFunctionsArgumentBinding = () => {
  return (
    <>
      <Heading as='h4'>No Binding of "arguments" object</Heading>
      <Para>
        The
        <BI>arguments</BI> is a reserved word which holds the list of arguments
        passed to the function. The arrow functions do not have their own
        <BI>arguments</BI> object.
      </Para>
      <Code>{`const show = () => arguments[0];
show();	// "ReferenceError: arguments is not defined"`}</Code>
    </>
  );
};

export default JSArrowFunctionsArgumentBinding;
