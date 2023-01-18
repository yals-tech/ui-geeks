import React, { memo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useQTextScroll from '../../../custom-hooks/use-qtext-scroll';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import YALSBox from '../../shared/yals-box/yals-box';
import { JS_BLOG_MENU_ITEMS } from './blogs/js-blogs-menu-items';
import { JS_CHALLENGE_MENU_ITEMS } from './code-challenges/js-challenge-menu-items';
import './javascript-home.scss';
import { JSBreadcrumbLink } from './js-breadcrumb-links';
import { JSLINK } from './js-link-tree';
import { JS_ROUTE_PATH } from './js-menu-items';

const JSHome = () => {
  useQTextScroll();
  return (
    <HomePageWrapper
      menuLinks={JSLINK}
      menuItems={JS_ROUTE_PATH}
      breadcrumbLink={JSBreadcrumbLink}
      language='JavaScript'
      customMenuContent={
        <>
          <YALSBox>
            <Link to={JS_BLOG_MENU_ITEMS[0].url}>
              JavaScript Blogs ({JS_BLOG_MENU_ITEMS.length})
            </Link>
          </YALSBox>

          <YALSBox>
            <Link to={JS_CHALLENGE_MENU_ITEMS[0].url}>
              Code Challenges ({JS_CHALLENGE_MENU_ITEMS.length})
            </Link>
          </YALSBox>
        </>
      }
    >
      <Outlet />
    </HomePageWrapper>
  );
};

export default memo(JSHome);
