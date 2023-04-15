import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ReactClassComponents = lazy(
  () => import(`../components/fe/react/class-components/class-components`)
);

const ReactComponents = lazy(
  () => import('../components/fe/react/components/components')
);
const ReactContext = lazy(
  () => import('../components/fe/react/context/context')
);
const ReactControlledComponent = lazy(
  () =>
    import('../components/fe/react/controlled-component/controlled-components')
);
const ReactErrorBoundary = lazy(
  () => import('../components/fe/react/error-boundary/error-boundary')
);
const ReactForms = lazy(() => import('../components/fe/react/forms/forms'));
const ReactFragments = lazy(
  () => import('../components/fe/react/fragments/fragments')
);
const ReactFunctionComponents = lazy(
  () => import('../components/fe/react/function-component/function-component')
);
const ReactHooks = lazy(() => import('../components/fe/react/hooks/hooks'));
const ReactIntroduction = lazy(
  () => import('../components/fe/react/introduction/introduction')
);
const ReactJSX = lazy(() => import('../components/fe/react/jsx/jsx'));
const ReactLandingPage = lazy(
  () => import('../components/fe/react/landing-page/react-landing-page')
);
const ReactLists = lazy(
  () => import('../components/fe/react/lists-and-keys/lists')
);
const ReactHome = lazy(() => import('../components/fe/react/react-home'));
const ReactHomeDemoComponent = lazy(
  () =>
    import(
      '../components/fe/react/react-home-demo-component/react-home-demo-component'
    )
);
const ReactRouterComponents = lazy(
  () => import('../components/fe/react/react-router/react-router')
);
const ReactRenderProps = lazy(
  () => import('../components/fe/react/render-props/render-props')
);
const ReactUnControlledComponent = lazy(
  () =>
    import(
      '../components/fe/react/uncontrolled-component/uncontrolled-component'
    )
);

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
