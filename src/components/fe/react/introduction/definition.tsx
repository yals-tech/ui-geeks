import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const ReactDefinition = () => {
  return (
    <>
      <Para>
        React is a declarative, efficient, and flexible JavaScript library for
        building <BI>user interfaces</BI>. React helps to build encapsulated
        components that manage their own <Space /> <I>state</I>, then compose
        them to make complex UIs. React is used to build <Space />
        <BI>Single Page Application (SPA)</BI>.
      </Para>

      <Heading as='h2'>Single Page Application</Heading>
      <Para>
        A Single-Page Application (SPA) is an application that <Space />
        <B>loads a single HTML</B> page and all the necessary assets (such as
        JavaScript and CSS) required for the application to run. Any
        interactions with the page or subsequent pages <Space />
        <B>do not require a round trip</B> to the server which means the page is
        <B>not reloaded</B>. All the views of the app are loaded and unloaded
        into the same page itself.
      </Para>
    </>
  );
};

export default ReactDefinition;
