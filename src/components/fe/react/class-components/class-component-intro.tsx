import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const ReactClassComponentIntro = () => {
  return (
    <>
      <Para>
        We can also use <BI>ES6 class</BI> to define a component. The defined
        <Space /> <I>class</I> should <B>extend</B> <BI>React.Component</BI>.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`class Welcome extends React.Component {
  render() {
    return <h1>Hello from React!</h1>
  }	
}
`}
      </Code>

      <Para>
        <B>render()</B>: A class component should have a render() function,
        which returns the React element.
      </Para>

      <Note>
        Before <B>version 16.8</B>, only class components can be <B>stateful</B>
        <Space /> components. Function components were used as <B>stateless</B>
        <Space /> components. But with the introduction of <B>Hooks in v16.8</B>
        , function components can also be <B>stateful</B>. React prefers
        function components over class components for
        <B>performance benefits</B>.
      </Note>

      <Note>
        Always start component names with a <B>Capital letter</B>. React treats
        components starting with <B>lowercase letters</B> as <B>DOM</B> tags.
        For example, <B>{`<div />`}</B> represents an HTML tag, but <Space />
        <B>{`<Welcome />`}</B> <Space /> represents a component and requires
        <Space /> <B>Welcome</B> to be in scope.
      </Note>
    </>
  );
};

export default ReactClassComponentIntro;
