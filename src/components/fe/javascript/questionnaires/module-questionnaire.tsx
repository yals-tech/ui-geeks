import React from 'react';
import { EMPTY_LINE, NONE_OF_ABOVE } from '../../../../util/app-constants';
import Code from '../../../shared/code/code';
import Space from '../../../shared/space/space';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const ModuleQuestions = [
  {
    id: 1,
    question: (
      <>The export uses a {EMPTY_LINE} mechanism for updating the references.</>
    ),
    options: [
      {
        label: 'Lazy Binding',
        id: 1
      },
      {
        label: 'Live Binding',
        id: 2
      },
      {
        label: 'Batch Binding',
        id: 3
      },
      {
        label: 'Require Binding',
        id: 3
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'module_1',
    answer: 2
  },
  {
    id: 2,
    question: (
      <>
        To use an export/import statement, code must be interpreted as a
        <Space /> {EMPTY_LINE} at runtime.
      </>
    ),
    options: [
      {
        label: 'Module',
        id: 1
      },
      {
        label: 'Script',
        id: 2
      },
      {
        label: 'Text',
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'module_2',
    answer: 1
  },
  {
    id: 3,
    question: <>Modules are automatically interpreted in strict mode.</>,
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: `false`,
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'module_3',
    answer: 1
  },
  {
    id: 4,
    question: (
      <>
        What value would be exported from below code.
        <Code>{`export default 5 + 10;`}</Code>
      </>
    ),
    options: [
      {
        label: 'undefined',
        id: 1
      },
      {
        label: 'null',
        id: 2
      },
      {
        label: '15',
        id: 3
      },
      {
        label: 'ReferenceError',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'module_4',
    answer: 3
  },
  {
    id: 5,
    question: <>The {EMPTY_LINE} are one which have a unique name.</>,
    options: [
      {
        label: 'Named exports',
        id: 1
      },
      {
        label: `Default exports`,
        id: 2
      },
      {
        label: `Namespace exports`,
        id: 3
      },
      {
        label: NONE_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'module_5',
    answer: 1
  }
];
