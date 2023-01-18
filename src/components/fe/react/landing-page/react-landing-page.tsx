import React, { useEffect, useState } from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';
import LandingPageWrapper from '../../../shared/landing-page-wrapper/landing-page-wrapper';
import ReactDefinition from '../introduction/definition';
import { REACT_LINK } from '../react-link-tree';
import { getReactGroupedMenu } from '../react-menu-items';

const ReactLandingPage = () => {
  const [menuTree, setMenuTree] = useState<Array<any>>([]);

  useEffect(() => {
    setMenuTree(() => getReactGroupedMenu());
  }, []);

  return (
    <LandingPageWrapper
      linksMenu={REACT_LINK}
      imagePath={ImagePaths.REACT.ICON}
      title='React'
      wordCloudUrl={ImagePaths.REACT.WORD_CLOUD}
      menuTree={menuTree}
    >
      <ReactDefinition />
    </LandingPageWrapper>
  );
};

export default ReactLandingPage;
