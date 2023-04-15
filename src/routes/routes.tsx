import React, { lazy, Suspense, useEffect, useState } from 'react';

import { Route, Routes } from 'react-router';
const Home = lazy(() => import('../components/home/home'));

import HomeFooter from '../components/home/home-footer/home-footer';
import HomeHeader from '../components/home/home-header/home-header';
import ContentLoader from '../components/shared/content-loader/content-loader';
import { AppPrefix, THEME_CONSTANT } from '../util/app-constants';
import { AppContext } from '../util/app-context';
import { THEME } from '../util/util';
import JSRoutes from './js-routes';
import ReactRoutes from './react-routes';

const Quotes = lazy(() => import('../components/quotes/quotes'));

const YalsPrivacyPolicy = React.lazy(
  () => import(`../components/shared/yals-privacy-policy/yals-privacy-policy`)
);
const YalsTermsConditions = React.lazy(
  () =>
    import(`../components/shared/yals-terms-conditions/yals-terms-conditions`)
);

const AppRouter = (props: any) => {
  const {} = props;
  const [theme, setTheme] = useState(THEME_CONSTANT.DARK_THEME);

  const onThemeChange = () => {
    const themeValue =
      theme === THEME_CONSTANT.LIGHT_THEME
        ? THEME_CONSTANT.DARK_THEME
        : THEME_CONSTANT.LIGHT_THEME;
    THEME.setTheme(themeValue);
    setTheme(() => themeValue);
  };

  useEffect(() => {
    setTheme(() => THEME.getTheme());
  }, []);

  return (
    <Suspense fallback={<ContentLoader />}>
      <AppContext.Provider value={{ theme: theme }}>
        <div className={`app-body theme-${theme}`}>
          <HomeHeader onThemeChange={onThemeChange} />
          <div className={`${AppPrefix}-content-section`}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/privacy-policy' element={<YalsPrivacyPolicy />} />
              <Route
                path='/terms-of-service'
                element={<YalsTermsConditions />}
              />

              <Route path='/quotes' element={<Quotes />} />
              <Route path='/javascript/*' element={<JSRoutes />} />
              <Route path='/react/*' element={<ReactRoutes />} />
              <Route path='*' element={<p>There's nothing here!</p>} />
            </Routes>
          </div>
          <HomeFooter />
        </div>
      </AppContext.Provider>
    </Suspense>
  );
};

export default AppRouter;
