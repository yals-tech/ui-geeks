import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const ReactHelloWorld = () => {
  return (
    <>
      <Heading as='h2'>Hello World</Heading>

      <Para>
        <BI>React</BI> is the entry point to the React library. If we load
        <Space /> <I>React</I> from a <Space /> <B>{`<script>`}</B> tag, the
        top-level APIs are available on the <BI>React</BI> global.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`// If we use ES6 with npm, we can write:
import React from 'react'

// If we use ES5 npm, we can write:
var React = require('react')
`}
      </Code>

      <Para>The smallest React example looks like this:</Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, World</h1>);`}
      </Code>

      <Para>
        <B>ReactDOM.createRoot</B>: This method creates a root node, on which
        the react app will be mounted/hosted. Everything inside the root node is
        managed by React DOM.
      </Para>

      <Para>
        <B>render()</B>: This method renders/displays the app content on the
        root node.
      </Para>

      <Para>Above code will display a heading saying "Hello, World".</Para>
    </>
  );
};

export default ReactHelloWorld;
