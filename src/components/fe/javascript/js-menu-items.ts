import { getGroupedMenu } from '../../../util/util';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';

export const JS_routePrefix = '/javascript/';
export const JS_ROUTE_PATH: Array<IMenuItem> = [
  {
    url: `${JS_routePrefix}introduction`,
    label: 'Introduction',
    group: 'Introduction'
  },
  {
    url: `${JS_routePrefix}history`,
    label: 'History',
    group: 'Introduction'
  },
  {
    url: `${JS_routePrefix}include-code`,
    label: 'Including Scripts',
    group: 'Introduction'
  },
  {
    url: `${JS_routePrefix}console`,
    label: 'Console',
    group: 'Introduction'
  },
  {
    url: `${JS_routePrefix}data-types`,
    label: 'Data types',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}grammer`,
    label: 'Grammer and Types',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}operators`,
    label: 'Operators',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}control-structures`,
    label: 'Control Structures',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}objects`,
    label: 'Objects',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}arrays`,
    label: 'Arrays',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}functions`,
    label: 'Functions',
    group: 'Fundamental Concepts'
  },
  {
    url: `${JS_routePrefix}closures`,
    label: 'Closures',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}arrow-functions`,
    label: 'Arrow Functions',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}modules`,
    label: 'Modules',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}this-keyword`,
    label: 'this Keyword',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}class-keyword`,
    label: 'Class',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}prototype-chain`,
    label: 'Prototype Chain',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}strict-mode`,
    label: 'Strict Mode',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}hoisting`,
    label: 'Hoisting',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}exception-handling`,
    label: 'Exception Handling',
    group: 'Advanved Concepts'
  },
  {
    url: `${JS_routePrefix}iterators-and-generators`,
    label: 'Iterators and Generators',
    group: 'Advanved Concepts'
  }
];

export const JS_PRIMARY_ROUTES = {
  HOME_PAGE: { url: '/javascript/home', label: 'React' },
  ARRAY: `${JS_routePrefix}arrays`,
  STRING: `${JS_routePrefix}data-types?qtext=String`,
  DEMO: {
    url: 'javascript/demoes',
    label: 'JavaScript Demoes'
  }
};

export const getJSGroupedMenu = () => {
  return getGroupedMenu(JS_ROUTE_PATH);
};
