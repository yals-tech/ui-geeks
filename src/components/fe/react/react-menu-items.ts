import { getGroupedMenu } from '../../../util/util';
import { IMenuItem } from '../../shared/navigation-menu/navigation-menu.types';
const routePrefix = '/react/';
export const REACT_ROUTE_PATH: Array<IMenuItem> = [
  {
    url: `${routePrefix}introduction`,
    label: 'Introduction',
    group: 'Basic Concepts'
  },
  {
    url: `${routePrefix}jsx`,
    label: 'JSX',
    group: 'Basic Concepts'
  },
  {
    url: `${routePrefix}components`,
    label: 'Components',
    group: 'Basic Concepts'
  },
  {
    url: `${routePrefix}class-component`,
    label: 'Class Component',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}function-component`,
    label: 'Function Component',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}controlled-component`,
    label: 'Controlled Component',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}uncontrolled-component`,
    label: 'Uncontrolled Component',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}fragments`,
    label: 'Fragments',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}lists`,
    label: 'Lists',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}forms`,
    label: 'Forms',
    group: 'Core Concepts'
  },
  {
    url: `${routePrefix}hooks`,
    label: 'Hooks',
    group: 'Advanced Concepts'
  },
  {
    url: `${routePrefix}context`,
    label: 'Context',
    group: 'Advanced Concepts'
  },
  {
    url: `${routePrefix}render-props`,
    label: 'Render Props',
    group: 'Advanced Concepts'
  },
  {
    url: `${routePrefix}error-boundary`,
    label: 'Error Boundary',
    group: 'Advanced Concepts'
  },
  {
    url: `${routePrefix}react-router`,
    label: 'React Router',
    group: 'Advanced Concepts'
  }
];

export const REACT_PRIMARY_ROUTES = {
  HOME_PAGE: { url: '/react/home', label: 'React' },
  STATE: `${routePrefix}function-component`,
  FORM_HANDLING: `${routePrefix}forms`,
  DEMO: {
    url: '/react/demoes',
    label: 'React Demoes'
  }
};

export const getReactGroupedMenu = () => {
  return getGroupedMenu(REACT_ROUTE_PATH);
};
