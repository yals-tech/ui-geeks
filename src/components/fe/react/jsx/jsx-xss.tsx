import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const ReactJSXPreventsXSS = () => {
  return (
    <>
      <Heading as='h2'>JSX Prevents Injection Attacks</Heading>
      <Para>
        By default, React DOM escapes any values embedded in JSX before
        rendering them. Thus it ensures that we can never inject anything that's
        not explicitly written in the application. Everything is converted to a
        string before being rendered. This helps prevent <B>XSS</B>
        (Cross-Site-Scripting) attacks.
      </Para>

      <Heading as='h2'>JSX Represents Objects</Heading>
      <Para>
        Babel compiles JSX down to <BI>React.createElement()</BI> calls and
        returns an <I>object</I>. These objects are called <Space />
        <BI>"React elements"</BI>.
      </Para>

      <Para>For example, below two examples are same:</Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const element = <h1 className="greet">Hello from React!</h1>;`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const element = React.createElement("h1", 
  { className: "greet" },
  "Hello from React!"
);`}
      </Code>

      <Heading as='h2'>Props Default to "True"</Heading>

      <Para>
        If we do not provide a value for a prop, it defaults to <BI>true</BI>.
      </Para>

      <Para>Below given expressions are equivalent.</Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`<MyDialog show />
<MyDialog show={true} />
`}
      </Code>

      <Heading as='h2'>Using Spread Attributes</Heading>
      <Para>
        If we have props as an object, and we need to pass all prop attributes
        to JSX, we can use JavaScript's spread operator (...).
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />

        <Code language={CodeLanguageTypes.JSX}>
          {`const CustomButton = (props) => {
  const { label, …rest } = props;
  return <button {...rest}>{label}</button>
}

const element = <CustomButton label="Click" className="btn" id="btnId" />
`}
        </Code>
      </Para>

      <Para>Above code will render a button with given attributes.</Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`<button className="btn" id="btnId">Click</button>`}
      </Code>
    </>
  );
};

export default ReactJSXPreventsXSS;
