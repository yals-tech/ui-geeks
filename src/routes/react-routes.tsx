import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactClassComponents from '../components/fe/react/class-components/class-components';
import ReactComponents from '../components/fe/react/components/components';
import ReactContext from '../components/fe/react/context/context';
import ReactControlledComponent from '../components/fe/react/controlled-component/controlled-components';
import ReactErrorBoundary from '../components/fe/react/error-boundary/error-boundary';
import ReactForms from '../components/fe/react/forms/forms';
import ReactFragments from '../components/fe/react/fragments/fragments';
import ReactFunctionComponents from '../components/fe/react/function-component/function-component';
import ReactHooks from '../components/fe/react/hooks/hooks';
import ReactIntroduction from '../components/fe/react/introduction/introduction';
import ReactJSX from '../components/fe/react/jsx/jsx';
import ReactLandingPage from '../components/fe/react/landing-page/react-landing-page';
import ReactLists from '../components/fe/react/lists-and-keys/lists';
import ReactHome from '../components/fe/react/react-home';
import ReactHomeDemoComponent from '../components/fe/react/react-home-demo-component/react-home-demo-component';
import ReactRouterComponents from '../components/fe/react/react-router/react-router';
import ReactRenderProps from '../components/fe/react/render-props/render-props';
import ReactUnControlledComponent from '../components/fe/react/uncontrolled-component/uncontrolled-component';

const ReactRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<ReactLandingPage />} />
      <Route path='/demoes' element={<ReactHomeDemoComponent />} />
      <Route path='/' element={<ReactHome />}>
        <Route path='introduction' element={<ReactIntroduction />} />
        <Route path='jsx' element={<ReactJSX />} />
        <Route path='components' element={<ReactComponents />} />
        <Route path='class-component' element={<ReactClassComponents />} />
        <Route
          path='function-component'
          element={<ReactFunctionComponents />}
        />
        <Route
          path='controlled-component'
          element={<ReactControlledComponent />}
        />
        <Route
          path='uncontrolled-component'
          element={<ReactUnControlledComponent />}
        />

        <Route path='fragments' element={<ReactFragments />} />
        <Route path='lists' element={<ReactLists />} />
        <Route path='forms' element={<ReactForms />} />
        <Route path='hooks' element={<ReactHooks />} />
        <Route path='context' element={<ReactContext />} />
        <Route path='render-props' element={<ReactRenderProps />} />
        <Route path='error-boundary' element={<ReactErrorBoundary />} />
        <Route path='react-routes' element={<ReactRouterComponents />} />
      </Route>
    </Routes>
  );
};

export default ReactRoutes;
