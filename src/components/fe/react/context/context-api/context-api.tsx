import React from 'react';
import Heading from '../../../../shared/heading/heading';
import ReactClassContextType from './class-context-type';
import ReactContextConsumer from './context-consumer';
import ReactContextDisplayName from './context-display-name';
import ReactContextProvider from './context-provider';
import ReactCreateContext from './create-context';
import ReactContextIssues from './issues-in-context';

const ReactContextAPI = () => {
  return (
    <>
      <Heading as='h2'>Context API</Heading>
      <ReactCreateContext />
      <ReactContextProvider />
      <ReactClassContextType />
      <ReactContextConsumer />
      <ReactContextDisplayName />
      <ReactContextIssues />
    </>
  );
};

export default ReactContextAPI;
