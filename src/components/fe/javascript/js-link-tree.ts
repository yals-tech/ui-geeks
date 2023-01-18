export const JSLINK = [
  {
    label: 'Introduction',
    link: '/javascript/introduction',
    lastUpdate: '10/15/2022',
    wordCount: 680,
    tags: [
      'Interpreted',
      'Compiled',
      'Functions',
      'Prototype',
      'Multi Paradigm',
      'Single Threaded',
      'Dynamic Language',
      'Object Oriented',
      'OOPS',
      'Imperative',
      'Declarative'
    ],
    children: [
      {
        label: 'Interpreted or Just-in-time Compiled',
        shortLabel: 'Interpreted/Compiled'
      },
      {
        label: 'First Class Functions'
      },
      {
        label: 'Prototype-based'
      },
      {
        label: 'Multi-paradigm'
      },
      {
        label: 'Single Threaded'
      },
      {
        label: 'Dynamic Language'
      },
      {
        label: 'Object-oriented'
      },
      {
        label: 'Imperative'
      },
      {
        label: 'Declarative'
      }
    ]
  },
  {
    label: 'History of JavaScript',
    link: '/javascript/history',
    lastUpdate: '10/15/2022',
    wordCount: 335,
    tags: ['History']
  },
  {
    label: 'Include JavaScript code',
    link: '/javascript/include-code',
    lastUpdate: '10/15/2022',
    wordCount: 495,
    tags: ['Scripts', 'Async', 'Defer'],
    children: [
      {
        label: 'async'
      },
      {
        label: 'defer'
      }
    ]
  },
  {
    label: 'JavaScript Console',
    link: '/javascript/console',
    lastUpdate: '10/15/2022',
    wordCount: 185,
    tags: ['Console'],
    children: [
      {
        label: 'Accessing Console'
      },
      {
        label: 'REPL'
      }
    ]
  },
  {
    label: 'Data types',
    link: '/javascript/data-types',
    lastUpdate: '10/15/2022',
    wordCount: 1010,
    tags: [
      'Types',
      'Datatypes',
      'number',
      'string',
      'BigInt',
      'null',
      'undefined',
      'boolean'
    ],
    children: [
      {
        label: 'Number',
        children: [
          {
            label: 'parseInt()'
          },
          {
            label: 'parseFloat()'
          }
        ]
      },
      {
        label: 'String'
      },
      {
        label: 'BigInt'
      },
      {
        label: 'Symbol'
      },
      {
        label: 'null'
      },
      {
        label: 'undefined'
      },
      {
        label: 'Boolean'
      }
    ]
  },
  {
    label: 'Grammar and types',
    link: '/javascript/grammer',
    lastUpdate: '10/15/2022',
    wordCount: 1840,
    tags: [
      'Grammer',
      'Comments',
      'Single Line Comment',
      'Multi Line Comment',
      'Variables',
      'let',
      'const',
      'var',
      'Naming Rules',
      'Type Conversion',
      'Literals',
      'Temporal Dead Zone',
      'TDZ'
    ],
    children: [
      {
        label: 'Comments',
        children: [
          {
            label: 'Single Line Comment'
          },
          {
            label: 'Multi Line Comment'
          }
        ]
      },
      {
        label: 'Variables'
      },
      {
        label: 'let'
      },
      {
        label: 'const'
      },
      {
        label: 'var'
      },

      {
        label: 'Variable Naming Rules'
      },
      {
        label: 'Evaluating Variables'
      },
      {
        label: 'Variable Scope'
      },
      {
        label: 'Variable Hoisting'
      },
      {
        label: 'Data type Conversion'
      },
      {
        label: 'Literals',
        children: [
          {
            label: 'Numeric Literals'
          },
          {
            label: 'String Literals'
          },
          {
            label: 'Template Literals'
          },
          {
            label: 'Tagged Templates'
          },
          {
            label: 'Boolean Literals'
          },
          {
            label: 'Array Literals'
          },
          {
            label: 'Object Literals'
          },
          {
            label: 'RegExp Literals'
          }
        ]
      },
      {
        label: 'Temporal Dead Zone (TDZ)'
      }
    ]
  },
  {
    label: 'Operators',
    link: '/javascript/operators',
    lastUpdate: '10/15/2022',
    wordCount: 1590,
    tags: [
      'Operators',
      'Binary Operators',
      'Arithmetic Opertors',
      'Relational Opertors',
      'Equality Opertors',
      'Strict Equality',
      'Strict Inequality',
      'Assignment Operators',
      'Logical Operators',
      'Delete Operator',
      'typeof Operator',
      'void Operator',
      'in Operator',
      'instanceof Operator',
      'Ternary Operator',
      'Operator Precedence',
      'Short-circuit'
    ],
    children: [
      {
        label: 'Binary Operators',
        children: [
          {
            label: 'Arithmetic Operators'
          },
          {
            label: 'Relational Operators'
          },
          {
            label: 'Equality Operators',
            children: [
              {
                label: 'Type Coercion'
              },
              {
                label: 'Strict Equality',
                altLabel: 'Strict Equality "===" Operator',
                shortLabel: 'Strict Equality'
              },
              {
                label: 'Strict InEquality',
                altLabel: 'Strict InEquality "!==" Operator',
                shortLabel: 'Strict InEquality'
              }
            ]
          },
          {
            label: 'Assignment Operators'
          },
          {
            label: 'Binary Logical Operators',
            children: [
              {
                label: 'Logical AND (&&) operator'
              },
              {
                label: 'Logical OR (||) operator'
              },
              {
                label: 'Short-circuit Evaluation'
              }
            ]
          }
        ]
      },
      {
        label: 'Unary Operators',
        children: [
          {
            label: 'Logical NOT (!) Operator'
          },
          {
            label: 'Unary Operator "+"'
          },
          {
            label: 'delete Operator'
          },
          {
            label: 'typeof Operator'
          },
          {
            label: 'void Operator'
          },
          {
            label: 'in Operator'
          },
          {
            label: 'instanceof Operator'
          }
        ]
      },
      {
        label: 'Ternary (?:) Operator'
      },
      {
        label: 'Operator Precedence'
      }
    ]
  },
  {
    label: 'Control Structures',
    link: '/javascript/control-structures',
    lastUpdate: '10/15/2022',
    wordCount: 585,
    tags: [
      'Conditional Statements',
      'if else',
      'if-else',
      'switch case',
      'loop',
      'Iterations',
      'for Loop',
      'while Loop',
      'do while Loop',
      'for of Loop',
      'for...of Loop',
      'for in Loop',
      'for...in Loop'
    ],
    children: [
      {
        label: 'Conditional Statements',
        children: [
          {
            label: 'if-else'
          },
          {
            label: 'switch-case'
          }
        ]
      },
      {
        label: 'Looping/Iteration Statements',
        shortLabel: 'Looping Statements',
        children: [
          {
            label: 'while loop'
          },
          {
            label: 'do-while loop'
          },
          {
            label: 'for loop'
          },
          {
            label: 'for...of loop'
          },
          {
            label: 'for...in loop'
          }
        ]
      }
    ]
  },
  {
    label: 'Objects',
    link: '/javascript/objects',
    lastUpdate: '10/15/2022',
    wordCount: 265,
    tags: [
      'object',
      'Creating Objects',
      'Accessing Objects',
      'Dot Notation',
      'Bracket Notation',
      '[]'
    ],
    children: [
      {
        label: 'Accessing object properties',
        children: [
          {
            label: 'Using Dot Notation'
          },
          {
            label: 'Using Bracket Notation'
          }
        ]
      }
    ]
  },
  {
    label: 'Arrays',
    link: '/javascript/arrays',
    lastUpdate: '10/15/2022',
    wordCount: 795,
    tags: [
      'Array',
      'Accessing Array Elements',
      'Array Methods',
      'tostring()',
      'concat()',
      'join()',
      'pop()',
      'push()',
      'unshift()',
      'shift()',
      'slice()',
      'splice()',
      'sort()',
      'reverse()'
    ],
    children: [
      {
        label: 'Accessing Array Items'
      },
      {
        label: 'Array Methods',
        children: [
          {
            label: 'toString()'
          },
          {
            label: 'concat()'
          },
          {
            label: 'join(separator)'
          },
          {
            label: 'pop()'
          },
          {
            label: 'push()'
          },
          {
            label: 'unshift()'
          },
          {
            label: 'shift()'
          },
          {
            label: 'slice()'
          },
          {
            label: 'splice()'
          },
          {
            label: 'sort()'
          },
          {
            label: 'reverse()'
          }
        ]
      }
    ]
  },
  {
    label: 'Functions',
    link: '/javascript/functions',
    lastUpdate: '10/15/2022',
    wordCount: 915,
    tags: [
      'Functions',
      'Function Declaration',
      'Function Expression',
      'Invocation',
      'Arguments',
      'Rest Parameters',
      'Anonymous Functions',
      'IIFE',
      'Inner Functions'
    ],
    children: [
      {
        label: 'Function Declaration'
      },
      {
        label: 'Function Expression'
      },
      {
        label: 'Function Invocation/Calling',
        shortLabel: 'Invocation'
      },
      {
        label: 'arguments'
      },
      {
        label: 'Rest Parameters'
      },
      {
        label: 'Anonymous Functions',
        children: [
          {
            label: 'IIFE (Immediately Invoked Function Expression)',
            shortLabel: 'IIFE'
          }
        ]
      },
      {
        label: 'Inner Functions'
      }
    ]
  },
  {
    label: 'Closures',
    link: '/javascript/closures',
    lastUpdate: '10/15/2022',
    wordCount: 1425,
    tags: [
      'Closures',
      'Lexical Scope',
      'Private Member',
      'Scope Chain',
      'Closure Problems'
    ],
    children: [
      {
        label: 'Lexical Scope'
      },
      {
        label: 'Creating Private Methods/Properties using Closures',
        shortLabel: 'Creating Private Members'
      },
      {
        label: 'Closure Scope Chain'
      },
      {
        label: 'Problem Creating Closures in Loop'
      },
      {
        label: 'Solutions to the Above Problem'
      }
    ]
  },
  {
    label: 'Arrow functions',
    link: '/javascript/arrow-functions',
    lastUpdate: '10/15/2022',
    wordCount: 1075,
    tags: ['Arrow Functions', 'Class Fields'],
    children: [
      {
        label: 'Limitations of Arrow Function'
      },
      {
        label: 'Arrow Functions as Class Fields'
      },
      {
        label: 'Arrow function not to be used with call, apply and bind',
        shortLabel: 'Not use with call, apply and bind'
      },
      {
        label: 'No Binding of "arguments" object'
      },
      {
        label: 'Returning "Object Literals"'
      },
      {
        label: 'Line Breaks in Arrow Functions'
      },
      {
        label: 'Parsing Order'
      }
    ]
  },
  {
    label: 'JavaScript Modules',
    link: '/javascript/modules',
    lastUpdate: '10/15/2022',
    wordCount: 1020,
    tags: [
      'Modules',
      'JavaScript Modules',
      'export',
      'Named Export',
      'Default Export',
      'Re-exporting',
      'import',
      'Named Import',
      'Default Import',
      'Namespace Import',
      'Side Effect Namespace'
    ],
    children: [
      {
        label: 'export Statement',
        children: [
          {
            label: 'Named Export'
          },
          {
            label:
              'Named export can be renamed while exporting from the module',
            shortLabel: 'Rename Named export'
          },
          {
            label: 'Default Export'
          },
          {
            label: 'Re-exporting'
          },
          {
            label: 'Wild-card (*) export statement',
            shortLabel: 'Wild-card export'
          }
        ]
      },
      {
        label: 'import Statement',
        children: [
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
        ]
      }
    ]
  },
  {
    label: 'The "this" keyword',
    link: '/javascript/this-keyword',
    lastUpdate: '10/15/2022',
    wordCount: 2360,
    tags: [
      'this',
      'Value of this',
      'apply()',
      'bind()',
      'call()',
      'this in Class',
      'this in Function',
      'this in Global',
      'derived Class',
      'new Opertor',
      'new.target',
      'new()',
      'this in Event'
    ],
    children: [
      {
        label: 'Value of "this"',
        children: [
          {
            label: 'Value of "this" in the Global Context',
            shortLabel: 'In Global Context'
          },
          {
            label: 'Value of "this" in the Function Context',
            shortLabel: 'In Function Context',
            children: [
              {
                label: 'When "this" is not set by the function call',
                shortLabel: '"this", not set by function'
              },
              {
                label: 'When "this" is set by the function call',
                shortLabel: '"this", set by function',
                children: [
                  {
                    label: 'call()'
                  },
                  {
                    label: 'apply()'
                  },
                  {
                    label: 'bind()'
                  }
                ]
              }
            ]
          },
          {
            label: 'Value of "this" in the Class Context',
            shortLabel: 'In Class Context',
            children: [
              {
                label: 'Value of "this" in Derived Classes',
                shortLabel: 'In Derived Classes'
              }
            ]
          },
          {
            label: 'The "new" Operator',
            children: [
              {
                label: 'Using "new" with Functions'
              },
              {
                label: 'new.target'
              },
              {
                label: 'Using "new" with Classes'
              }
            ]
          },
          {
            label: 'Value of "this" in the Inline Event Handler',
            shortLabel: 'In Event Handler'
          }
        ]
      }
    ]
  },
  {
    label: 'Class',
    link: '/javascript/class-keyword',
    lastUpdate: '10/15/2022',
    wordCount: 1220,
    tags: [
      'Class',
      'Class Declaration',
      'Class Expression',
      'constructor()',
      'this in Class',
      'private Fields',
      'protoytype',
      'static',
      'Base Class',
      'Derived Class',
      'MIX INS'
    ],
    children: [
      {
        label: 'Class Declaration'
      },
      {
        label: 'Class Expression'
      },
      {
        label: 'constructor'
      },
      {
        label: 'static Methods and Properties'
      },
      {
        label: 'Binding "this" with prototype and static methods',
        shortLabel: 'Binding "this" to prototype/static'
      },
      {
        label: 'Private Field Declarations'
      },
      {
        label: 'Inheritance',
        children: [
          {
            label: 'Base/Parent/Inherited Class'
          },
          {
            label: 'Child/Derived Class'
          },
          {
            label: 'MIX-INS'
          }
        ]
      }
    ]
  },
  {
    label: 'Inheritance and the Prototype chain',
    link: '/javascript/prototype-chain',
    lastUpdate: '10/15/2022',
    wordCount: 750,
    tags: [
      'Inheritance',
      'prototype',
      '__proto__',
      'setPrototypeOf',
      'Object.setPrototypeOf()',
      'Object.create()'
    ],
    children: [
      {
        label: 'Inheriting Properties',
        children: [
          {
            label: '__proto__'
          }
        ]
      },
      {
        label: 'Prototypes with Constructors'
      },
      {
        label: 'Object.setPrototypeOf()'
      },
      {
        label: 'Object.create()'
      }
    ]
  },
  {
    label: 'Strict mode',
    link: '/javascript/strict-mode',
    lastUpdate: '10/15/2022',
    wordCount: 535,
    tags: ['Strict mode'],
    children: [
      {
        label: 'Invoking strict mode',
        shortLabel: 'Invoking'
      },
      {
        label: 'Restrictions applied by strict mode',
        shortLabel: 'Restrictions'
      }
    ]
  },
  {
    label: 'Hoisting',
    link: '/javascript/hoisting',
    lastUpdate: '10/15/2022',
    wordCount: 295,
    tags: [
      'Hoisting',
      'Function Hoisting',
      'Variable Hoisting',
      'Class Hoisting'
    ],
    children: [
      {
        label: 'Function Hoisting'
      },
      {
        label: 'Variable Hoisting'
      },
      {
        label: 'Class Hoisting'
      }
    ]
  },
  {
    label: 'Exception Handling',
    link: '/javascript/exception-handling',
    lastUpdate: '10/15/2022',
    wordCount: 275,
    tags: ['Exception Handling', 'throw', 'try', 'catch', 'finally', 'error()'],
    children: [
      {
        label: 'throw'
      },
      {
        label: 'try block'
      },
      {
        label: 'catch block'
      },
      {
        label: 'finally block'
      },
      {
        label: 'Error() constructor'
      }
    ]
  },
  {
    label: 'Iterators and Generators',
    link: '/javascript/iterators-and-generators',
    lastUpdate: '10/15/2022',
    wordCount: 840,
    tags: ['Iterators', 'Generators', 'Iterables', 'Iterators and Generators'],
    children: [
      {
        label: 'Iterators'
      },
      {
        label: 'Generator'
      },
      {
        label: 'Iterables'
      }
    ]
  }
];
