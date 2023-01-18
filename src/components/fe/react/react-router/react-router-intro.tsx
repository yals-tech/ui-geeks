import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';

const ReactRouterIntro = () => {
  return (
    <>
      <Para>
        React Router is a routing library built on top of React that updates the
        UI, keeping it in sync with the URL. We'll see the implementation
        details for version 6.
      </Para>

      <Heading as='h2'>Installation</Heading>
      <Para>Run below command to install latest react-router-dom package.</Para>
      <Code
        language={CodeLanguageTypes.JSX}
      >{`npm install react-router-dom@6`}</Code>
    </>
  );
};

export default ReactRouterIntro;
