import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactJSXWithChildren from './children-with-jsx';
import ReactJSXPreventsXSS from './jsx-xss';
import ReactJSXRenderingElements from './rendering-elements';
import ReactWhyJSX from './why-jsx';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>JSX</B> is a syntax extension to JavaScript, which produces <Space />
        <B>React elements</B>.
      </>
    )
  },
  {
    label: (
      <>
        React separates concerns with loosely coupled units called <Space />
        <B>components</B>.
      </>
    )
  },
  {
    label: (
      <>
        JavaScript expressions can be embedded inside <Space />
        <B>curly braces ({`{}`})</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Double quotes</B> and <B>curly braces</B> can be used to add
        <Space /> <I>attributes</I> to JSX.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Boolean</BI>, <BI>null</BI> and <BI>undefined</BI> are ignored while
        rendering on UI.
      </>
    )
  },
  {
    label: (
      <>
        JSX prevents <B>Injection Attacks</B>, because React DOM <I>escapes</I>
        <Space /> embedded values.
      </>
    )
  },
  {
    label: (
      <>
        <B>Babel</B> compiles JSX to <I>React.createElement()</I>, which returns
        an object.
      </>
    )
  },
  {
    label: (
      <>
        <B>Props</B> default to <BI>true</BI> and <I>spread operators (...)</I>
        <Space /> can be used to add multiple attributes.
      </>
    )
  },
  {
    label: (
      <>
        <B>React elements</B> are <I>plain objects</I> and are cheap to create.
        React only updates the required changes to real DOM.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `What is JSX`,
    description: `Syntax extension to JavaScript, produces React elements`
  },

  {
    topic: `Why JSX`,
    description: `Because rendering logic is inherently coupled with UI`
  },

  {
    topic: `Embedding Expressions`,
    description: `Embedding JS, attributes, childrens`
  },

  {
    topic: `JSX Represents Objects`,
    description: `Babel compiles the JSX to return object`
  },

  {
    topic: `Rendering Elements`,
    description: `Add elements to Virtual DOM, update only what's necessary `
  }
];

const ReactJSX = () => {
  useDOMTitle('UI-Geeks: React | JSX');

  return (
    <Container>
      <YALSPreface list={prefaceList} />

      <Heading>JSX</Heading>
      <Para>
        It is a syntax extension to JavaScript. JSX may look like a template
        language, but it comes with the full power of JavaScript. JSX produces
        React <BI>"elements"</BI>.
        <Code
          language={CodeLanguageTypes.JSX}
        >{`const element = <h1>Hello, World<h1>`}</Code>
      </Para>

      <Para>
        <ReactWhyJSX />
        <ReactJSXWithChildren />
        <ReactJSXPreventsXSS />
        <ReactJSXRenderingElements />
      </Para>

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactJSX;
