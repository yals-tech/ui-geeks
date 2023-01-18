import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactContextConsumer = () => {
  return (
    <>
      <Heading as='h3'>Context.Consumer</Heading>
      <Para>
        It is a <B>React component</B> that <BI>subscribes</BI> to <Space />
        <I>context changes</I>. This component lets us subscribe to a context
        within a <B>function component</B>.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`<ReactContext.Consumer>
  { value => { /* Render elements based on context value */ }
</ReactContext.Consumer>
`}
        </Code>
      </Para>

      <Para>
        This component requires a <B>function as a child</B>. The function
        receives the current context value and returns a React node. The
        <Space /> <BI>value</BI> argument will be equal to the <Space />
        <BI>value prop</BI> of the closest <BI>Provider</BI> for this context in
        the tree.
      </Para>
    </>
  );
};

export default ReactContextConsumer;
