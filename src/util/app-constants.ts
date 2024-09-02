export const AppPrefix = 'ui-geeks';

export const EMPTY_LINE = `_____________`;
export const NONE_OF_ABOVE = `None of the above`;
export const ALL_OF_ABOVE = `All of the above`;
export const MAX_WORD_PER_MIN = 200;
export const DeviceType = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  Desktop: 'desktop',
  LargeDesktop: 'large-desktop'
};

export const TYPER_SPEED = 350;

export const THEME_CONSTANT = {
  KEY: 'theme',
  LIGHT_THEME: 'light',
  DARK_THEME: 'dark'
};

export const SOCIAL_URL = {
  LINKEDIN: 'https://www.linkedin.com/in/sunil-kumar-83146843',
  WEBSITE: 'https://ui-geeks.in'
};

export const PROFILE_URL = '/profile/sunil-kumar';

export const APP_INFO = {
  TAG_LINE: 'UI-Geeks is an online learning platform.',
  DESC: 'Learn Core and Advanced Concepts of JavaScript, TypeScript, React, Angular, SCSS, CSS, NodeJs and other UI terminologies.'
};

export const BOOKS = {
  REACT: {
    DESC: 'This React Js Core Concepts handbook contains the core concepts of ReactJs along with React-Router. The book does not try to cover every concept of React & React Router, instead it focuses on the minimum amount of knowledge required to work as an individual contributor.',
    REACT_NOTION_PRESS: {
      url: 'https://notionpress.com/read/react-js-core-concepts',
      price: '₹249'
    },
    AMAZON_KINDLE: {
      IN: {
        url: 'https://www.amazon.in/dp/B0C6Z1BQRK',
        price: '₹99'
      },
      US: {
        url: 'https://www.amazon.com/dp/B0C6Z1BQRK',
        price: '$3.29'
      }
    },
    AMAZON_PAPERBACK: {
      US: {
        url: 'https://www.amazon.com/dp/B0C7JJB6TF',
        price: '$14.99'
      }
    }
  },
  JAVASCRIPT: {
    DESC: 'This JavaScript Core Concepts handbook contains the core concepts of JavaScript. The book does not try to cover every concept of JavaScript/ECMAScript, instead it focuses on the minimum amount of knowledge required to work as an individual contributor.',
    AMAZON_KINDLE: {
      IN: {
        url: 'https://www.amazon.in/dp/B0CBGBFJCS',
        price: '₹99'
      },
      US: {
        url: 'https://www.amazon.com/dp/B0CBGBFJCS',
        price: '$3.29'
      }
    },
    AMAZON_PAPERBACK: {
      US: {
        url: 'https://www.amazon.com/dp/B0C9SH1KLW',
        price: '$20.99'
      }
    }
  }
};

export const BOOK_LINKS = {
  REACT: {
    COMPLETE_BOOK_URL:
      'https://drive.google.com/file/d/1GwwU2UOXDXKAajkq6abJwobYcuNZgwsw',
    CHAPTERS: [
      {
        id: '/react/introduction',
        label: 'Introduction',
        url: 'https://drive.google.com/file/d/1i-6TVOjJPNAPvNfIVUUbGLFeRa2tAdjp'
      },
      {
        id: '/react/jsx',
        label: 'JSX',
        url: 'https://drive.google.com/file/d/1DHGEtCivGzwO-00WZcyf6SGU9lGwd0-V'
      },
      {
        id: '/react/components',
        label: 'Components',
        url: 'https://drive.google.com/file/d/16IOlcBVxNkE8qZwfXTfdXUfq8inSNP70'
      },
      {
        id: '/react/class-component',
        label: 'Class Components',
        url: 'https://drive.google.com/file/d/1YHLhSLceTh8OLknZdj8zV22KCmb79h16'
      },
      {
        id: '/react/function-component',
        label: 'Function Components',
        url: 'https://drive.google.com/file/d/1g11IjyO_7wxV3_G-OoicMIPQkINUnj0J'
      },
      {
        id: ['/react/controlled-component', '/react/uncontrolled-component'],
        label: 'Controlled & Uncontrolled Components',
        url: 'https://drive.google.com/file/d/1dOnZ_4UbADqRhnJSw60bZkY2HX-tT_ol'
      },
      {
        id: '/react/lists',
        label: 'List & Keys',
        url: 'https://drive.google.com/file/d/1RhmF8RNdvQOh5PaoIWIhs1MxrT4lF0xc'
      },
      {
        id: '/react/context',
        label: 'Context API',
        url: 'https://drive.google.com/file/d/1yolysJbupUEY0EYwuAF-UlvVPk0mAhHp'
      },
      {
        id: '/react/fragments',
        label: 'Fragments',
        url: 'https://drive.google.com/file/d/1UIxBusSoo1mangvuaPeqa6ED12gOEuLg'
      },
      {
        id: '/react/hooks',
        label: 'Hooks',
        url: 'https://drive.google.com/file/d/10IsswPmWK8WBLSLgG6veSwVqnkzXgyiu'
      },
      {
        id: '/react/react-router',
        label: 'React Router',
        url: 'https://drive.google.com/file/d/1beY4ZZ0jsYlbDfeNiNNZjPIhah7-YS0M'
      }
    ]
  },
  JAVASCRIPT: {
    COMPLETE_BOOK_URL:
      'https://drive.google.com/file/d/1EIkNiLO9Qv5a9bsl9mMWiZcwFQWk3Ymv',
    CHAPTERS: [
      {
        id: '/javascript/introduction',
        label: 'Introduction',
        url: 'https://drive.google.com/file/d/1OTmVKnXS1or6P-MizZP59MswukfB1Qwa'
      },
      {
        id: '/javascript/include-code',
        label: 'Including Scripts',
        url: 'https://drive.google.com/file/d/1CDhGyWWP_g1Siv6HgTsjw3RZ1JSmbLdr'
      },
      {
        id: '/javascript/data-types',
        label: 'Data Types',
        url: 'https://drive.google.com/file/d/1X82Dnyv809wMFVuyMo0G00gE7B9l6CUS'
      },
      {
        id: '/javascript/grammer',
        label: 'Grammer and Types',
        url: 'https://drive.google.com/file/d/1Yz2gUNU-PA7f6WCcjux-bYXsMcxx-F09'
      },
      {
        id: '/javascript/operators',
        label: 'Operators',
        url: 'https://drive.google.com/file/d/1o6539Zn_Tgmb81xW5ytrzVUJ2OkHOPTO'
      },
      {
        id: '/javascript/control-structures',
        label: 'Control Structures',
        url: 'https://drive.google.com/file/d/1ndQEiEAo9Iqxe-ox3oXIx3RsQ59ZU_89'
      },
      {
        id: '/javascript/arrays',
        label: 'Arrays',
        url: 'https://drive.google.com/file/d/1b6HcxPc9iw0uta8mOt-qyt-MuXElEz7C'
      },
      {
        id: '/javascript/objects',
        label: 'Objects',
        url: 'https://drive.google.com/file/d/1CeiLi5-ucBM02R9hzTqeEZphStFV-4Qk'
      },
      {
        id: '/javascript/functions',
        label: 'Functions',
        url: 'https://drive.google.com/file/d/1Mnn8QlkXXzSwrQbcZCDXARc6P3bR8xMt'
      },
      {
        id: '/javascript/closures',
        label: 'Closures',
        url: 'https://drive.google.com/file/d/1d_vdI0r_dzj1pYW2neS0THjQrORXVZfN'
      },
      {
        id: '/javascript/arrow-functions',
        label: 'Arrow Functions',
        url: 'https://drive.google.com/file/d/1o_26JJFZJPA3SOOMrKoTmP30Q4KaK5rg'
      },
      {
        id: '/javascript/modules',
        label: 'Modules',
        url: 'https://drive.google.com/file/d/1xpAsnd5sJjyQXGvfdo0ovXwi6VhGw4jg'
      },
      {
        id: '/javascript/this-keyword',
        label: 'this Keyword',
        url: 'https://drive.google.com/file/d/1QDsR1tkVYQPeBAeidsCB-Rh3zPhubudX'
      },
      {
        id: '/javascript/class-keyword',
        label: 'Class',
        url: 'https://drive.google.com/file/d/1LAkdrZEGfuyjZBGKLCpS5jOZKZ5rZk2n'
      },
      {
        id: '/javascript/prototype-chain',
        label: 'Prototype Chain',
        url: 'https://drive.google.com/file/d/1QexujL-HEG8CaMgkCIvP66vypr_TPpHE'
      },
      {
        id: '/javascript/strict-mode',
        label: 'Strict Mode',
        url: 'https://drive.google.com/file/d/1SJGx3qlzJw5jHSyD75dR4OMNQWrhi1ik'
      },
      {
        id: '/javascript/hoisting',
        label: 'Hoisting',
        url: 'https://drive.google.com/file/d/1Vfx7jOXcswlVkFBa_7qmuJSe2W8lswqD'
      },
      {
        id: '/javascript/exception-handling',
        label: 'Exception Handling',
        url: 'https://drive.google.com/file/d/1LQx-YHGZ80LH1aYuMNo0yIOwGfKy2yfx'
      },
      {
        id: '/javascript/iterators-and-generators',
        label: 'Iterators and Generators',
        url: 'https://drive.google.com/file/d/19P6MPzxpV7ula1wzFw89zRPxU_EJAr9z'
      }
    ]
  }
};
