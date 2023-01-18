import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const ReactVirtualDOM = () => {
  return (
    <>
      <Heading as='h2'>What is Virtual DOM</Heading>
      <Para>
        The <B>virtual DOM (VDOM)</B> is a programming concept where an ideal,
        or "virtual", representation of a UI is kept in memory and synced with
        the "real" DOM by a library such as ReactDOM. This process is called
        <BI>reconciliation</BI>.
      </Para>

      <Para>
        The term "virtual DOM" is usually associated with <Space />
        <BI>React elements</BI> since they are the objects representing the user
        interface. React, however, also uses internal objects called <Space />
        <BI>"fibers"</BI> to hold additional information about the component
        tree.
      </Para>

      <Heading as='h3'>Is the Shadow DOM the same as the Virtual DOM</Heading>
      <Para>
        <B>No</B>, they are different. The <I>Shadow DOM</I> is a browser
        technology designed primarily for scoping variables and CSS in
        <Space /> <BI>web components</BI>. The virtual DOM is a concept
        implemented by libraries in JavaScript on top of browser APIs.
      </Para>

      <Heading as='h3'>What is React Fiber</Heading>
      <Para>
        <B>Fiber</B> is the new <BI>reconciliation engine</BI> in <Space />
        <B>React 16</B>. Its main goal is to enable incremental rendering of the
        virtual DOM
      </Para>
    </>
  );
};

export default ReactVirtualDOM;
