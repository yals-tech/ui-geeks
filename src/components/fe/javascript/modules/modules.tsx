import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ModuleQuestions } from '../questionnaires/module-questionnaire';
import JSModulesExport from './export-statement/export-statement';
import JSModulesImport from './import-statement/import-statement';
import JSModulesIntro from './modules-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Modules</B> are used to split code and <I>import</I> when needed.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>export</BI> uses a <B>"live binding"</B> mechanism for updating
        the references.
      </>
    )
  },
  {
    label: (
      <>
        To use an <I>export/import</I> statement, code must be interpreted as a
        <B>module</B> at runtime. In HTML, it is done by adding <Space />
        <B>type="module"</B> to the <I>{`<script>`}</I> tag.
      </>
    )
  },
  {
    label: (
      <>
        Modules are automatically interpreted in <B>strict mode</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Named exports</B> have a unique name. A module can have multiple
        <Space /> <I>named exports</I>. The <BI>"as"</BI> can be used to rename
        them while importing.
      </>
    )
  },
  {
    label: (
      <>
        There can be only <B>one default export</B> in a module.
      </>
    )
  },
  {
    label: <>Re-exporting/Aggregation can be used to merge exports.</>
  },
  {
    label: (
      <>
        The <B>wild-card (*)</B> <I>export</I> statement, re-exports all
        <Space /> <I>named</I> exports.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>import</BI> declaration is used to <I>import</I> the exported
        members.
      </>
    )
  },
  {
    label: (
      <>
        A module can have <I>named, default, namespace</I> and <Space />
        <I>side-effect</I> imports.
      </>
    )
  },
  {
    label: (
      <>
        The <B>side-effect</B> import does not <I>import</I> anything, instead
        it <B>executes</B> the imported module's code.
      </>
    )
  }
];

const JSModules = () => {
  useDOMTitle('UI-Geeks: JavaScript | Modules');

  return (
    <Container>
      <Heading>JavaScript Modules</Heading>
      <Para>
        <JSModulesIntro />
        <JSModulesExport />
        <JSModulesImport />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ModuleQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSModules);
