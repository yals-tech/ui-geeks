import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, I, IU, NewLine } from '../../../../shared/util/util';

const JSModulesWildCardExport = () => {
  return (
    <>
      <Heading as='h3'>Wild-card (*) export statement</Heading>
      <Para>
        Wild card <I>export</I> statement re-exports all the
        <Space />
        <I>named exports</I> of a given
        <Space />
        <I>module</I>, as the <I>named exports</I> of the current <I>module</I>.
        But the <I>default export</I> of the given module is not re-exported.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        {`export * from "<module-path>.js"`}
      </Para>

      <Code>{`export  * from "./exported-module.js";`}</Code>

      <Para>
        If there are two or more wild-card export statements that implicitly
        <Space /> <I>re-exports</I> the same name,
        <B>neither one is re-exported</B>.
      </Para>

      <Code>
        {`// "module-1.js"
export const a = 10;

// "module-2.js"
export const a = 10;

// "module-aggregator.js"
export * from "./module-1.js";

export * from "./module-2.js";
`}
      </Code>

      <Code>
        {`// "main-program.js"
import * as md from "./module-aggregator.js";
console.log(md.a);  // undefined
`}
      </Code>
      <Para>
        Aggregator <I>re-exported</I> the same member <B>"a"</B>, therefore, it
        was not exported.
      </Para>
    </>
  );
};

export default JSModulesWildCardExport;
