import React, { useEffect, useState } from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import { JS_BLOG_LINK } from '../blogs/js-blog-link-tree';
import { JSLINK } from '../js-link-tree';
import { getJSGroupedMenu, JS_routePrefix } from '../js-menu-items';

const JSLandingPage = () => {
  const [menuTree, setMenuTree] = useState<Array<any>>([]);

  useEffect(() => {
    setMenuTree(() => getJSGroupedMenu());
  }, []);

  const customContentMenuTree = {
    label: 'Blogs',
    children: [
      {
        url: `${JS_routePrefix}blogs/get-user-location`,
        label: 'How to get user location.'
      }
    ]
  };
  return (
    <LandingPageWrapper
      linksMenu={JSLINK}
      menuTree={menuTree}
      customContentMenuTree={customContentMenuTree}
      imagePath={ImagePaths.JS.ICON}
      title='JavaScript'
      wordCloudUrl={ImagePaths.JS.JS_WORD_CLOUD}
      blogList={JS_BLOG_LINK}
    >
      <Para>
        JavaScript (JS) is a light-weight,
        <B>interpreted</B> <Space /> or <B>just-in-time compiled</B> <Space />
        programming language with <Space /> <B>first-class functions</B>. It is
        <B>prototype-based</B>,<B> multi-paradigm</B>,<B>single threaded</B>,
        <B> dynamic language</B>, supporting <Space />
        <B>object-oriented</B>,<B> imperative</B> and <Space />
        <B>declarative</B> styles.
      </Para>
    </LandingPageWrapper>
  );
};

export default JSLandingPage;
