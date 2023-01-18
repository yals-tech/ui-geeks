import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const ReactWhyJSX = () => {
  return (
    <>
      <Heading as='h2'>Why JSX</Heading>
      <Para>
        React embraces the fact that rendering logic is inherently coupled with
        other UI logic like handling events, state changes, etc. Therefore,
        instead of artificially separating <I>technologies</I> by putting markup
        and logic in separate files, React <BI>separates concerns</BI> with
        loosely coupled units called <B>"components"</B> that contain both.
      </Para>

      <Para>
        React doesn't require using JSX, but most people find it helpful as a
        visual aid when working with UI inside the JavaScript code.
      </Para>

      <Heading as='h2'>Embedding Expressions in JSX</Heading>
      <Para>
        Any valid JavaScript expression can be embedded inside the curly braces
        ({`{}`}) in JSX.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        <Code language={CodeLanguageTypes.JSX}>
          {`function greetUser(userName) {
  return \`Hello, \${userName}\`;
}
const element = <h1>{greetUser("John")}</h1>
`}
        </Code>
      </Para>

      <Para>
        After compilation, JSX expressions become regular JavaScript function
        calls and evaluate to JavaScript objects. This means JSX can be assigned
        to variables, passed as an argument of a function or can be called
        inside loops, etc.
      </Para>

      <Heading as='h2'>Specifying Attributes with JSX</Heading>
      <Para>
        Double quotes can be used to specify string literals as attributes. For
        example:
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = <a href="https://ui-geeks.in">UI Geeks</a>`}
        </Code>
      </Para>

      <Para>
        Also, curly braces can be used to embed JavaScript expressions as an
        attribute value. For example:
        <Code language={CodeLanguageTypes.JSX}>
          {`const url = "https://ui-geeks.in";
const element = <a href={url}>UI Geeks</a>`}
        </Code>
      </Para>

      <Para>
        Since JSX is closer to JavaScript than HTML, React DOM uses <Space />
        <B>camelCase</B> property naming convention instead of HTML attribute
        names. For example, <BI>class</BI> becomes <BI>className</BI> in JSX and
        <BI>onclick</BI> becomes <BI>onClick</BI>.
      </Para>
    </>
  );
};

export default ReactWhyJSX;
