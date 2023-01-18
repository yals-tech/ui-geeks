import React from 'react';
import useCurrentPath from '../../../../custom-hooks/useCurrentRoute';
import { isIOS } from '../../../../util/util';
import Code from '../../../shared/code/code';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { JS_PRIMARY_ROUTES } from '../js-menu-items';
import JSHomeDemoArrayMethods, {
  JSHomeDemoArrayMethodsCode
} from './array-methods';
import JSHomeDemoDeviceInfo, {
  JSHomeDemoDeviceInfoCode
} from './device-information';
import JSHomeDemoStringMethods, {
  JSHomeDemoStringMethodsCode
} from './string-methods';
import JSHomeDemoWordCounter, {
  JSHomeDemoWordCounterCode
} from './word-counter';

const JSHomeDemoComponent = () => {
  const current = useCurrentPath();
  const isFullPageDemo = current.indexOf('/demoes') > -1;

  const demoComponents = [
    {
      id: 2,
      label: 'String manipulation.',
      moreDetail: {
        label: 'Learn more about String methods',
        link: JS_PRIMARY_ROUTES.STRING
      },
      tabs: [
        {
          id: 1,
          content: <JSHomeDemoStringMethods />,
          label: 'Output'
        },
        {
          id: 2,
          content: <Code>{JSHomeDemoStringMethodsCode}</Code>,
          label: 'Code'
        }
      ]
    },
    {
      id: 3,
      label: 'Array methods.',
      moreDetail: {
        label: 'Learn more about Array methods',
        link: JS_PRIMARY_ROUTES.ARRAY
      },
      tabs: [
        {
          id: 1,
          content: <JSHomeDemoArrayMethods />,
          label: 'Output'
        },
        {
          id: 2,
          content: <Code>{JSHomeDemoArrayMethodsCode}</Code>,
          label: 'Code'
        }
      ]
    },
    {
      id: 4,
      label: 'Word Counter.',
      moreDetail: {
        label: 'Learn more about String methods',
        link: JS_PRIMARY_ROUTES.STRING
      },
      tabs: [
        {
          id: 1,
          content: <JSHomeDemoWordCounter />,
          label: 'Output'
        },
        {
          id: 2,
          content: <Code>{JSHomeDemoWordCounterCode}</Code>,
          label: 'Code'
        }
      ]
    }
  ];

  if (!isIOS()) {
    demoComponents.unshift({
      id: 1,
      label: 'Know your device.',
      moreDetail: {
        label: 'Learn other powerfull features of JavaScript',
        link: JS_PRIMARY_ROUTES.HOME_PAGE.url
      },
      tabs: [
        {
          id: 1,
          content: <JSHomeDemoDeviceInfo />,
          label: 'Output'
        },
        {
          id: 2,
          content: <Code>{JSHomeDemoDeviceInfoCode}</Code>,
          label: 'Code'
        }
      ]
    });
  }

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={isFullPageDemo ? JS_PRIMARY_ROUTES.HOME_PAGE.url : undefined}
      homePageLabel={isFullPageDemo ? 'JavaScript' : undefined}
      language='JavaScript'
    />
  );
};

export default JSHomeDemoComponent;
