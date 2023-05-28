import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactPropsIntro = () => {
  return (
    <>
      <Heading as='h2'>Props</Heading>
      <Para>
        Props are the input object to the component. It holds all the input
        values passed to the components. React components use <I>props</I> to
        communicate with each other.
      </Para>

      <Para>
        Let's add <BI>"prop"</BI> to our <B>Welcome</B> component.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`function Welcome(props) {
    return <h1>Hello, {props.userName}</h1>
}`}
      </Code>

      <Para>
        In the case of a <BI>class component</BI>, <B>"this"</B> refers to the
        <Space /> <I>class context</I>, therefore, <BI>"this.props"</BI> points
        to the input values of the class component.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.userName}</h1>
    }	
}`}
      </Code>

      <Para>
        Passing input <BI>props</BI> to the component.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const element = <Welcome userName="John" />;
const element1 = <Welcome userName="Jack" />;
`}
      </Code>

      <Para>
        In particular, <BI>this.props.children</BI> is a special <I>prop</I>,
        typically defined by the child tags in the JSX expression rather than
        the tag itself.
      </Para>

      <Para>
        <IU>Example:</IU>
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`class Welcome extends React.Component {
    render() {
        return <h1>
            Hello, {this.props.userName}
            {this.props.children}
        </h1>
    }	
}`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const element = <Welcome userName="John">, age is 25.</Welcome>`}
      </Code>

      <Para>
        Above will render <B>"Hello, John, age is 25."</B>, because everything
        between the opening and closing tags becomes the value of <Space />
        <BI>this.props.children</BI>.
      </Para>
    </>
  );
};

export default ReactPropsIntro;
