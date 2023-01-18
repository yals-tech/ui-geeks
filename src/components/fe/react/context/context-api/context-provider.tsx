import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactContextProvider = () => {
  return (
    <>
      <Heading as='h3'>Context.Provider</Heading>
      <Para>
        Every Context object comes with a <B>Provider React Component</B> that
        allows consuming components to subscribe to context changes.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`<ReactContext.Provider value={/* some value */} >`}
        </Code>
      </Para>

      <Para>
        The <BI>Provider</BI> component accepts a <BI>value</BI> <I>prop</I> to
        be passed to consuming components that are descendants of this Provider.
        One Provider can be connected to many consumers. Providers can be nested
        to override values deeper within the tree.
      </Para>

      <Para>
        All consumers that are descendants of a Provider will re-render whenever
        Provider's <BI>value</BI> <I>prop</I> changes. The propagation from
        Provider to consumer is not subject to the <Space />
        <I>shouldComponentUpdate()</I> method, so the consumer is updated even
        when an ancestor component skips an update.
      </Para>
    </>
  );
};

export default ReactContextProvider;
