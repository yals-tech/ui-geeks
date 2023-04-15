import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const JSArrays = lazy(
  () => import(`../components/fe/javascript/arrays/arrays`)
);

const JSBlog = lazy(
  () => import('../components/fe/javascript/blogs/javascript-blog')
);
const JSClass = lazy(() => import('../components/fe/javascript/class/class'));
const JSCodeChallenge = lazy(
  () =>
    import(
      '../components/fe/javascript/code-challenges/javascript-code-challenge'
    )
);
const JSConsole = lazy(
  () => import('../components/fe/javascript/console/console')
);
const JSControlStructures = lazy(
  () =>
    import('../components/fe/javascript/control-structures/control-structures')
);
const JSExceptionHandling = lazy(
  () =>
    import('../components/fe/javascript/exception-handling/exception-handling')
);
const JSArrowFunctions = lazy(
  () =>
    import(
      '../components/fe/javascript/functions/arrow-functions/arrow-functions'
    )
);
const JSFunctionClosures = lazy(
  () => import('../components/fe/javascript/functions/closures/closures')
);
const JSFunctions = lazy(
  () => import('../components/fe/javascript/functions/function')
);
const JSGrammer = lazy(
  () => import('../components/fe/javascript/grammer/grammer')
);
const JSHistory = lazy(
  () => import('../components/fe/javascript/history/history')
);
const JSHoisting = lazy(
  () => import('../components/fe/javascript/hoisting/hoisting')
);
const JSInclude = lazy(
  () =>
    import('../components/fe/javascript/include-javascript/include-javascript')
);
const JSIntroduction = lazy(
  () => import('../components/fe/javascript/introduction/introduction')
);
const JSIteratorsGenerators = lazy(
  () =>
    import(
      '../components/fe/javascript/iterators-generators/iterators-generators'
    )
);
const JSHome = lazy(
  () => import('../components/fe/javascript/javascript-home')
);
const JSHomeDemoComponent = lazy(
  () =>
    import(
      '../components/fe/javascript/js-home-demo-component/js-home-demo-component'
    )
);
const JSLandingPage = lazy(
  () =>
    import('../components/fe/javascript/landing-page/javascript-landing-page')
);
const JSModules = lazy(
  () => import('../components/fe/javascript/modules/modules')
);
const JSObjects = lazy(
  () => import('../components/fe/javascript/objects/objects')
);
const JSOperators = lazy(
  () => import('../components/fe/javascript/operators/operators')
);
const JSPrototypeChain = lazy(
  () => import('../components/fe/javascript/prototype-chain/prototype-chain')
);
const JSStrictMode = lazy(
  () => import('../components/fe/javascript/strict-mode/strict-mode')
);
const JSTypes = lazy(
  () => import('../components/fe/javascript/the-types/the-types')
);
const JSThis = lazy(() => import('../components/fe/javascript/this/this'));

const JSRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<JSLandingPage />} />
      <Route path='/demoes' element={<JSHomeDemoComponent />} />
      <Route path='/' element={<JSHome />}>
        <Route path='introduction' element={<JSIntroduction />} />
        <Route path='history' element={<JSHistory />} />
        <Route path='include-code' element={<JSInclude />} />
        <Route path='console' element={<JSConsole />} />
        <Route path='data-types' element={<JSTypes />} />
        <Route path='grammer' element={<JSGrammer />} />
        <Route path='operators' element={<JSOperators />} />
        <Route path='control-structures' element={<JSControlStructures />} />
        <Route path='objects' element={<JSObjects />} />
        <Route path='arrays' element={<JSArrays />} />
        <Route path='functions' element={<JSFunctions />} />
        <Route path='closures' element={<JSFunctionClosures />} />
        <Route path='arrow-functions' element={<JSArrowFunctions />} />
        <Route path='modules' element={<JSModules />} />
        <Route path='this-keyword' element={<JSThis />} />
        <Route path='class-keyword' element={<JSClass />} />
        <Route path='prototype-chain' element={<JSPrototypeChain />} />
        <Route path='strict-mode' element={<JSStrictMode />} />
        <Route path='hoisting' element={<JSHoisting />} />
        <Route path='exception-handling' element={<JSExceptionHandling />} />
        <Route
          path='iterators-and-generators'
          element={<JSIteratorsGenerators />}
        />
      </Route>

      <Route path='blogs/:blogId' element={<JSBlog />} />
      <Route
        path='code-challenges/:challengeURL'
        element={<JSCodeChallenge />}
      />
    </Routes>
  );
};

export default JSRoutes;
