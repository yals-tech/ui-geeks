import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HomePageWrapper from '../../../shared/home-page-wrapper/home-page-wrapper';
import NavigationMenu from '../../../shared/navigation-menu/navigation-menu';
import { JS_ROUTE_PATH } from '../js-menu-items';
import {
  IBlogContentType,
  JS_CHALLENGE_CONTENT
} from './javascript-challenge-content';
import { JS_CHALLENGE_BREADCRUMB_LINKS } from './js-challenge-breadcrumb-links';
import { JS_CHALLENGE_LINK } from './js-challenge-link-tree';
import { JS_CHALLENGE_MENU_ITEMS } from './js-challenge-menu-items';

const RenderComponent = (props: any) => {
  const { challengeURL } = props;
  const blog = JS_CHALLENGE_CONTENT.find(
    (blg: IBlogContentType) => blg.url === challengeURL
  );

  if (blog) {
    return <>{blog.content}</>;
  }

  return null;
};

const JSCodeChallenge = () => {
  const params = useParams();
  const { challengeURL } = params;

  const [closeMobileMenuCtr, setCloseMobileMenuCtr] = useState(0);
  const handleMenuClick = () => {
    setCloseMobileMenuCtr((prev: number) => prev + 1);
  };

  return (
    <HomePageWrapper
      menuLinks={JS_CHALLENGE_LINK}
      menuItems={JS_ROUTE_PATH}
      breadcrumbLink={JS_CHALLENGE_BREADCRUMB_LINKS}
      isCustomHome={true}
      language={'JavaScript'}
      closeMobileMenuCtr={closeMobileMenuCtr}
      customMenuContent={
        <NavigationMenu
          menuList={JS_CHALLENGE_MENU_ITEMS}
          menuTitle={'Code Challenges'}
          onMenuClick={handleMenuClick}
        />
      }
    >
      <RenderComponent challengeURL={challengeURL} />
    </HomePageWrapper>
  );
};

export default JSCodeChallenge;
