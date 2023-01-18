import React from 'react';
import { ALL_OF_ABOVE, EMPTY_LINE } from '../../../../util/app-constants';
import { I } from '../../../shared/util/util';
import { YALSCheckRadioTypes } from '../../../shared/yals-check-radio/yals-check-radio.types';

export const HistoryQuestions = [
  {
    id: 1,
    question: <>JavaScript was created by {EMPTY_LINE} at NetScape in 1995.</>,
    options: [
      {
        label: 'Dennis Ritchie',
        id: 1
      },
      {
        label: 'Bjarne Stroustrup',
        id: 2
      },
      {
        label: 'Brenden Eich',
        id: 3
      },
      {
        label: 'James Gosling',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_1',
    answer: 3,
    explanation: `It was created by Brenden Eich at NetScape in 1995. It was first released with Netscape 2 in 1996.`
  },
  {
    id: 2,
    question: <>First standard version of ECMAScript was released on:</>,
    options: [
      {
        label: 'June, 95',
        id: 1
      },
      {
        label: 'Dec, 95',
        id: 2
      },
      {
        label: 'June, 97',
        id: 3
      },
      {
        label: 'Dec, 97',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_2',
    answer: 3,
    explanation: `Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard in 1997.`
  },
  {
    id: 3,
    question: (
      <>
        ES4 was abandoned due to political differences concerning language
        complexity.
      </>
    ),
    options: [
      {
        label: 'true',
        id: 1
      },
      {
        label: 'false',
        id: 2
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_3',
    answer: 1,
    explanation: `Yes, Fourth edition was abandoned, due to political differences concerning language complexity.`
  },
  {
    id: 4,
    question: (
      <>
        The <I>let</I> keyword was introduced in?
      </>
    ),
    options: [
      {
        label: 'ES5',
        id: 1
      },
      {
        label: `ES6`,
        id: 2
      },
      {
        label: `ES7`,
        id: 3
      },
      {
        label: `ES8`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_4',
    answer: 2,
    explanation: `ECMAScript 2015 (ES6), added let, const, for...of, maps, sets, WeakMap, promises, etc.`
  },
  {
    id: 5,
    question: <>async/await was introduced in?</>,
    options: [
      {
        label: 'ES5',
        id: 1
      },
      {
        label: `ES7`,
        id: 2
      },
      {
        label: `ES8`,
        id: 3
      },
      {
        label: `ES9`,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_5',
    answer: 2,
    explanation: `Block-scope, destructuring, async/await, exponential operator (**), Array.prototype.includes() were added in ES7.`
  },
  {
    id: 6,
    question: <>ES11 introduced</>,
    options: [
      {
        label: 'BigInt',
        id: 1
      },
      {
        label: `globalThis`,
        id: 2
      },
      {
        label: `nullish coalesing (??) operator`,
        id: 3
      },
      {
        label: ALL_OF_ABOVE,
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_6',
    answer: 4,
    explanation: `ES11 introduced BigInt, nullish coalescing (??) and globalThis.`
  },
  {
    id: 7,
    question: (
      <>Both JAVA and JavaScript are registered trademarks of Oracle.</>
    ),
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
    name: 'hist_7',
    answer: 1,
    explanation: `Both JAVA & JavaScript are registered trademarks of Oracle in the U.S. and other countries.`
  },
  {
    id: 8,
    question: <>JavaScript was originally going to be called "LiveScript".</>,
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
    name: 'hist_8',
    answer: 1,
    explanation: `It was originally going to be called "LiveScript" but later renamed as "JavaScript".`
  },
  {
    id: 9,
    question: <>JavaScript introduced replaceAll() for string in:</>,
    options: [
      {
        label: 'ES6',
        id: 1
      },
      {
        label: `ES8`,
        id: 2
      },
      {
        label: `ES10`,
        id: 3
      },
      {
        label: 'ES12',
        id: 4
      }
    ],
    type: YALSCheckRadioTypes.Radio,
    name: 'hist_9',
    answer: 4,
    explanation: `ES12 introduced replaceAll() for string along with Promise.any, AggregateError, WeakRefAdded, logical assignment operators (??=, &&= , ||=), Array.sort() made more precise.`
  },
  {
    id: 10,
    question: <>JavaScript is also used in non-browser environments?</>,
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
    name: 'hist_9',
    answer: 1,
    explanation: `JavaScript is known as a scripting language for the web, but it also runs on non-browser environments with the introduction of NodeJs.`
  }
];
