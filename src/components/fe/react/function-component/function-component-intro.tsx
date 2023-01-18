import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Para from '../../../shared/para/para';
import { B, BI, I } from '../../../shared/util/util';

const ReactFunctionComponentIntro = () => {
  return (
    <>
      <Para>This is the simplest way to define a component.</Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`function Welcome(props) {
  return <h1>Hello, {props.userName}</h1>
}`}
      </Code>

      <Para>
        Above function is a valid React <I>component</I> because it accepts a
        single <I>input</I> <BI>"props"</BI> (which stands for <B>properties</B>
        ) <I>object argument</I> and it returns a React element. Such components
        are called <BI>"function components"</BI> because they are literally
        JavaScript <I>functions</I>.
      </Para>
    </>
  );
};

export default ReactFunctionComponentIntro;
