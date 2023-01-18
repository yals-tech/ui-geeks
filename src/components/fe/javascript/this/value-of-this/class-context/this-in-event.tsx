import React from 'react';
import Code from '../../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../../shared/code/code.types';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import { B, BI, I } from '../../../../../shared/util/util';

const JSThisInEventListener = () => {
  return (
    <>
      <Heading as='h3'>Value of "this" in the Inline Event Handler</Heading>
      <Para>
        When code is called from an <BI>inline on-event handler</BI>, it's
        <BI>this</BI> is set to the <B>DOM element</B>, on which the listener is
        placed.
      </Para>

      <Code language={CodeLanguageTypes.HTML}>
        {`<button onclick="console.log(this.tagName)">Demo Button</button>`}
      </Code>

      <Para>
        When the user clicks on the button, it logs <B>"button"</B>, which shows
        that <BI>this</BI> here is pointing to the DOM element (<I>button</I>).
      </Para>
    </>
  );
};

export default JSThisInEventListener;
