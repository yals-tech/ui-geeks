import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../../../shared/yals-flex/yals-flex.types';
import YalsImage from '../../../shared/yals-image/yals-image';

const ReactJSXRenderingElements = () => {
  return (
    <>
      <Heading as='h2'>Rendering Elements</Heading>
      <Para>
        Elements are the smallest building blocks of React apps. An element
        describes what we want to see on the UI.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const element = <h1>Hello from React!</h1>`}
      </Code>

      <Para>
        Unlike browser DOM elements, React elements are plain objects, and are
        cheap to create. React DOM takes care of updating the DOM to match the
        React elements. React elements are immutable, which means, once we
        create an element, we can't change its children or attributes.
      </Para>

      <Para>
        React only updates what's necessary. React DOM compares the element and
        its children to the previous one, and only applies the DOM updates
        necessary to bring the DOM to the updated state.
      </Para>

      <YalsFlex justifyContent={FlexJustifyContentTypes.Center}>
        <YalsImage
          imagePath='https://legacy.reactjs.org/c158617ed7cc0eac8f58330e49e48224/granular-dom-updates.gif'
          alt={`React only updates what's necessary`}
          height='300px'
        />
      </YalsFlex>
    </>
  );
};

export default ReactJSXRenderingElements;
