import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import JSModulesDefaultImport from './default-import';
import JSModulesImportIntro from './import-intro';
import JSModulesNamedImport from './named-import';
import JSModulesNamespaceImport from './namespace-import';
import JSModulesSideEffectImport from './side-effect-import';

const JSModulesImport = () => {
  return (
    <>
      <Heading as='h2'>import Statement</Heading>
      <Para>
        <JSModulesImportIntro />
        <JSModulesNamedImport />
        <JSModulesDefaultImport />
        <JSModulesNamespaceImport />
        <JSModulesSideEffectImport />
      </Para>
    </>
  );
};

export default JSModulesImport;
