import React from 'react';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../../shared/util/util';

const importType = [
  {
    label: 'Named import'
  },
  {
    label: 'Default import'
  },
  {
    label: 'Namespace import'
  },
  {
    label: 'Side-effect import'
  }
];
const JSModulesImportIntro = () => {
  return (
    <>
      <Para>
        The <I>import</I> declaration is used to import members which are
        exported from other modules. The imported members are <I>read-only</I>
        <Space />
        with
        <Space />
        <I>live bindings</I>, because the importing module cannot modify them,
        they are only updated by the source module which exported them.
      </Para>

      <Para>
        In order to use the <I>import</I> declaration, the file must be
        interpreted by the runtime as a <I>module</I>. In HTML, this is done by
        adding the
        <BI>type="module"</BI> attribute to the <B>{`<script>`}</B> tag. There
        is also a function-like <I>dynamic import()</I>, which does not require
        scripts of <BI>type="module"</BI> attribute.
      </Para>

      <Para>
        There are four forms of import declaration:
        <OrderedList unOrdered items={importType} />
      </Para>
    </>
  );
};

export default JSModulesImportIntro;
