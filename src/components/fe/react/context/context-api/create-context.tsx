import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactCreateContext = () => {
  return (
    <>
      <Heading as='h3'>React.createContext</Heading>
      <Para>
        This method creates a <BI>Context</BI> object. When React renders a
        component that <I>subscribes</I> to this <BI>Context</BI> object it will
        read the <I>current context value</I> form the closest matching
        <Space /> <B>Provider</B> above it in the tree.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const ReactContext = React.createContext(defaultValue)`}
        </Code>
      </Para>

      <Para>
        <B>defaultValue</B>: The <I>defaultValue</I> argument is only used when
        a component does not have a matching Provider above it in the tree.
      </Para>

      <Note>
        Passing <B>undefined</B> as a <B>Provider value</B> does not cause
        components to use <B>defaultValue</B>.
      </Note>
    </>
  );
};

export default ReactCreateContext;
