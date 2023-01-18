import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import HomePageWrapper from '../../shared/home-page-wrapper/home-page-wrapper';
import { ReactBreadcrumbLink } from './react-breadcrumb-links';
import './react-home.scss';
import { REACT_LINK } from './react-link-tree';
import { REACT_ROUTE_PATH } from './react-menu-items';

const ReactHome = () => {
  return (
    <HomePageWrapper
      menuLinks={REACT_LINK}
      menuItems={REACT_ROUTE_PATH}
      breadcrumbLink={ReactBreadcrumbLink}
      language={'React'}
    >
      <Outlet />
    </HomePageWrapper>
  );
};

export default memo(ReactHome);
