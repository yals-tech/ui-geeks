import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const ReactJSXWithChildren = () => {
  return (
    <>
      <Heading as='h2'>Specifying Children with JSX</Heading>
      <Para>
        If a tag is empty, we may close it immediately with {`/>`}. For example:
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = <img src={imagePath} />`}
        </Code>
        <Para>
          But JSX may contain children too, everything between opening and
          closing tag is considered as the children of the element.
        </Para>
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = <div>
  <h1>Adding children</h1>
  <span>h1 and span are children of the parent div</span>
</div>`}
        </Code>
      </Para>

      <Para>
        JSX removes whitespaces at the beginning and end of the line. It also
        removed blank lines. New lines adjacent to tags are removed. New lines
        that occur in the middle of string literals are condensed into a single
        space.
      </Para>

      <Para>
        <IU>Example:</IU> All of the below {`<div>`} render the same output.
        <Code language={CodeLanguageTypes.JSX}>
          {`<div>Hello from React</div>

<div>
  Hello from React
</div>

<div>
  Hello 
  from 
  React
</div>

<div>

  Hello from React
</div>
`}
        </Code>
      </Para>

      <Para>
        <B>Booleans, null and undefined are Ignored</B>
        <NewLine />
        false, null, undefined and true are valid children but are not rendered.
        Although these values can be used for conditionally rendering React
        elements.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        <Code language={CodeLanguageTypes.JSX}>
          {`const ConditionalRender = (props) => { 
  return <div>
    {props.showContent && <CustomButton>}
  </div>
}`}
        </Code>
      </Para>

      <Para>
        Above code will render <B>CustomButton</B> component, only if <Space />
        <BI>showContent</BI> variable has <BI>truthy value</BI>.
      </Para>

      <Para>
        One caveat in conditional rendering is that some <BI>"falsy" values</BI>
        , such as <B>zero (0)</B>, are still rendered by React.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        <Code language={CodeLanguageTypes.JSX}>
          {`const ConditionalRender = (props) => { 
  return <div>
    { 
      props.items.length && 
      <span>Items Length: {props.items.length}</span>
    }
  </div>
}`}
        </Code>
      </Para>

      <Para>
        Above code will render <I>{`<span>Item Length: 0</span>`}</I>.
      </Para>

      <Para>
        To fix the above problem, make sure that the expression before <Space />
        <B>{`&&`}</B> is always <I>boolean</I>.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const ConditionalRender = (props) => { 
  return <div>
    { 
      props.items.length > 0 && 
      <span>Items Length: {props.items.length}</span>
    }
  </div>
}
`}
      </Code>

      <Para>
        Above code will not render anything, if <Space />
        <BI>props.items.length === 0</BI>.
      </Para>
    </>
  );
};

export default ReactJSXWithChildren;
