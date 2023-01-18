import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HomePageWrapper from '../../../shared/home-page-wrapper/home-page-wrapper';
import NavigationMenu from '../../../shared/navigation-menu/navigation-menu';
import { JS_ROUTE_PATH } from '../js-menu-items';
import { IBlogContentType, JS_BLOG_CONTENT } from './javascript-blog-content';
import { JS_BLOG_LINK } from './js-blog-link-tree';
import { JS_BLOGS_BREADCRUMB_LINKS } from './js-blogs-breadcrumb-links';
import { JS_BLOG_MENU_ITEMS } from './js-blogs-menu-items';

const RenderComponent = (props: any) => {
  const { blogId } = props;
  const blog = JS_BLOG_CONTENT.find(
    (blg: IBlogContentType) => blg.url === blogId
  );

  if (blog) {
    return <>{blog.content}</>;
  }

  return null;
};

const JSBlog = () => {
  const params = useParams();
  const { blogId } = params;

  const [closeMobileMenuCtr, setCloseMobileMenuCtr] = useState(0);
  const handleMenuClick = () => {
    setCloseMobileMenuCtr((prev: number) => prev + 1);
  };

  return (
    <HomePageWrapper
      menuLinks={JS_BLOG_LINK}
      menuItems={JS_ROUTE_PATH}
      breadcrumbLink={JS_BLOGS_BREADCRUMB_LINKS}
      isCustomHome={true}
      language={'JavaScript'}
      closeMobileMenuCtr={closeMobileMenuCtr}
      customMenuContent={
        <NavigationMenu
          menuList={JS_BLOG_MENU_ITEMS}
          menuTitle={'JavaScript Blogs'}
          onMenuClick={handleMenuClick}
        />
      }
    >
      <RenderComponent blogId={blogId} />
    </HomePageWrapper>
  );
};

export default JSBlog;
