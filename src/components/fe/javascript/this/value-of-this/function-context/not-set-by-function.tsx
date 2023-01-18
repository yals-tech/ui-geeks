import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { BI, I, IU, NewLine } from '../../../../../shared/util/util';
const JSThisNotSetByFunction = () => {
  return (
    <>
      <Heading as='h4'>When "this" is not set by the function call</Heading>

      <Para>
        <IU>In Non-Strict Mode:</IU>
        <NewLine />
        In this <I>non-strict</I> mode, <I>this</I> will default to the
        <Space />
        <I>global object</I>, which is a <BI>window</BI> in the browser.
      </Para>

      <Code>{`function getThis() { return this; }
getThis() === window; // true
`}</Code>

      <NewLine />
      <Para>
        <IU>In Strict Mode:</IU>
        <NewLine />
        In this <I>strict mode</I>, the value of <I>this</I> will default to
        <BI>undefined</BI>.
      </Para>
      <Code>
        {`function getThisInStrictMode() { 
  "use strict";
  return this; 
}

getThisInStrictMode() === undefined;  // true`}
      </Code>
    </>
  );
};

export default JSThisNotSetByFunction;
