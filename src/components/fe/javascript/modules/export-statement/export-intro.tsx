import React from 'react';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../../shared/util/util';

const exportType = [
  {
    label: 'Named export'
  },
  {
    label: 'Default export'
  }
];
const JSModulesExportIntro = () => {
  return (
    <>
      <Para>
        The <B>export</B> declaration is used to <I>export</I> values from a
        JavaScript module. Exported modules can then be imported into other
        programs with the <I>import declaration</I> or <I>dynamic import</I>.
        When a module updates the value of a binding that is exported, the
        update will be visible in its imported value. This update mechanism is
        called <B>live binding</B>.
      </Para>

      <Para>
        In order to use the <I>export</I> declaration, the file must be
        interpreted by the runtime as a <I>module</I>. In HTML, this is done by
        adding the <BI>type="module"</BI> attribute to the <BI>{`<script>`}</BI>
        <Space />
        tag. Modules are automatically interpreted in <B>strict mode</B>.
      </Para>

      <Para>
        Every module can have two types of export:
        <OrderedList unOrdered items={exportType} />
      </Para>
    </>
  );
};

export default JSModulesExportIntro;
