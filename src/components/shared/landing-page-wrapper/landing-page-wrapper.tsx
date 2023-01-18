import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { TextAlignTypes } from '../../../types/common';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { buildChildren, scrollToTop } from '../../../util/util';
import Heading from '../heading/heading';
import Para from '../para/para';
import { NewLine } from '../util/util';
import YalsButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import { RenderItem } from '../yals-menu-tree/menu-tree-component';
import YALSMenuTree from '../yals-menu-tree/yals-menu-tree';

import './landing-page-wrapper.scss';
import { ILandingPageWrapperProps } from './landing-page-wrapper.types';

const LandingPageWrapper = (props: ILandingPageWrapperProps) => {
  const {
    linksMenu,
    imagePath,
    wordCloudUrl,
    title,
    children,
    blogList,
    menuTree,
    customContentMenuTree
  } = props;

  const deviceType = useDeviceType();
  const navigate = useNavigate();

  const homeLandingClass = classNames({ [`${AppPrefix}-landing`]: true });

  const [menuList, setMenuList] = useState<Array<any>>([]);

  const buildMenuList = () => {
    const menuArr: Array<any> = [];
    linksMenu.map((itm: any) => {
      const childList = itm.children ? buildChildren(itm.children, 0, []) : [];
      menuArr.push({
        label: itm.label,
        link: itm.link,
        childList: childList
      });
    });

    setMenuList(() => menuArr);
  };

  const redirectToTopic = (itm: any) => {
    navigate(itm.link);
  };

  const redirectToIntroduction = (itm: any) => {
    navigate(linksMenu[0].link);
  };

  useEffect(() => {
    scrollToTop();
    buildMenuList();
  }, []);

  return (
    <>
      <div className={homeLandingClass}>
        <div className='js-word-count'>
          <img src={wordCloudUrl} width={'100%'} height='250px' />
        </div>

        <div className='landing-content'>
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
          >
            <img src={imagePath} alt={imagePath} className='language-icon' />
          </YalsFlex>
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.Center}
            alignItems={FlexAlignItemsTypes.Center}
          >
            <h1>{title}</h1>
          </YalsFlex>
          <NewLine />
          <NewLine />

          {children}

          <Para marginBottom='6rem' textAlign={TextAlignTypes.Center}>
            <YalsButton
              variant={YALSButtonVariantTypes.Primary}
              onClick={redirectToIntroduction}
              block={deviceType === DeviceType.Mobile}
            >
              Explore Now
            </YalsButton>
          </Para>
          <div className='content-details-section'>
            <Para>
              {menuTree && (
                <YALSMenuTree menuTree={menuTree} linksMenu={linksMenu} />
              )}

              {customContentMenuTree && (
                <div className={`${AppPrefix}-menu-tree`}>
                  <Row>
                    <Heading as='h4'>{customContentMenuTree.label}</Heading>
                    {customContentMenuTree.children.length <= 3 && (
                      <Col xl={4} lg={4} md={4} sm={12}>
                        <RenderItem
                          menus={customContentMenuTree.children}
                          url={'/javascript'}
                        />
                      </Col>
                    )}
                  </Row>
                </div>
              )}
            </Para>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(LandingPageWrapper);
