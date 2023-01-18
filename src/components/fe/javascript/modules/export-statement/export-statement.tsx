import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import JSModulesDefaultExport from './default-export';
import JSModulesExportIntro from './export-intro';
import JSModulesNamedExport from './named-export';
import JSModulesReExport from './re-export';
import JSModulesWildCardExport from './wild-card-export';

const JSModulesExport = () => {
  return (
    <>
      <Heading as='h2'>export Statement</Heading>
      <Para>
        <JSModulesExportIntro />
        <JSModulesNamedExport />
        <JSModulesDefaultExport />
        <JSModulesReExport />
        <JSModulesWildCardExport />
      </Para>
    </>
  );
};

export default JSModulesExport;
