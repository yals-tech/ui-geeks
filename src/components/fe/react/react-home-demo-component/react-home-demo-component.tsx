import React from 'react';
import useCurrentPath from '../../../../custom-hooks/useCurrentRoute';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import { REACT_PRIMARY_ROUTES } from '../react-menu-items';
import ReactHomeDemoBackgroundChange, {
  ReactHomeDemoBackgroundChangeCode
} from './background-change-demo';
import ReactHomeCounterDemo, {
  ReactHomeCounterDemoCode
} from './state-update-counter-demo';
import ReactHomeDemoStateUpdate, {
  ReactHomeDemoStateUpdateCode
} from './state-update-demo';

const ReactHomeDemoComponent = () => {
  const current = useCurrentPath();
  const isFullPageDemo = current.indexOf('/demoes') > -1;

  const demoComponents = [
    {
      id: 1,
      label: 'React state update.',
      moreDetail: {
        label: 'Learn more about state updates',
        link: REACT_PRIMARY_ROUTES.STATE
      },
      tabs: [
        {
          id: 1,
          content: <ReactHomeCounterDemo />,
          label: 'Output'
        },
        {
          id: 2,
          content: (
            <Code language={CodeLanguageTypes.JSX}>
              {ReactHomeCounterDemoCode}
            </Code>
          ),
          label: 'Code'
        }
      ]
    },
    {
      id: 2,
      label: 'Handle form values.',
      moreDetail: {
        label: 'Learn more about form handling',
        link: REACT_PRIMARY_ROUTES.FORM_HANDLING
      },
      tabs: [
        {
          id: 1,
          content: <ReactHomeDemoStateUpdate />,
          label: 'Output'
        },
        {
          id: 2,
          content: (
            <Code language={CodeLanguageTypes.JSX}>
              {ReactHomeDemoStateUpdateCode}
            </Code>
          ),
          label: 'Code'
        }
      ]
    },
    {
      id: 3,
      label: 'React DOM manipulation.',
      moreDetail: {
        label: 'Learn more about DOM manipulation',
        link: REACT_PRIMARY_ROUTES.HOME_PAGE.url
      },
      tabs: [
        {
          id: 1,
          content: <ReactHomeDemoBackgroundChange />,
          label: 'Output'
        },
        {
          id: 2,
          content: (
            <Code language={CodeLanguageTypes.JSX}>
              {ReactHomeDemoBackgroundChangeCode}
            </Code>
          ),
          label: 'Code'
        }
      ]
    }
  ];

  return (
    <DemoComponentWrapper
      demoComponentList={demoComponents}
      homePage={isFullPageDemo ? REACT_PRIMARY_ROUTES.HOME_PAGE.url : undefined}
      homePageLabel={isFullPageDemo ? 'React' : undefined}
      language='React'
    />
  );
};

export default ReactHomeDemoComponent;
