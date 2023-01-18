import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { I, IU, NewLine } from '../../../../shared/util/util';

const JSModulesSideEffectImport = () => {
  return (
    <>
      <Heading as='h3'>Side-effect import</Heading>
      <Para>
        This does not import anything from the module, instead the module is
        imported for <I>side-effects</I>. As a <I>side-effect</I>, this import
        declaration executes the imported module's code. This is often used for
        <Space />
        <I>polyfills</I>, which mutate the global variables.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <I>{`import "<path-of-the-module>";`}</I>
      </Para>

      <Code>{`import "./module.js";`}</Code>
    </>
  );
};

export default JSModulesSideEffectImport;
