import React, { memo, Suspense, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useQTextScroll from '../../../custom-hooks/use-qtext-scroll';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { getOnPageItems } from '../../../util/util';
import ListIcon from '../../icons/list-icon';
import ContentLoader from '../../shared/content-loader/content-loader';
import NavigationMenu from '../../shared/navigation-menu/navigation-menu';
import NextPrevButtons from '../../shared/next-prev-btn/next-prev-btn';
import ScrollTopButton from '../../shared/scroll-top-btn/scroll-top-btn';
import YALSBreadcrumb from '../../shared/yals-breadcrumb/yals-breadcrumb';
import YALSButton from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import {
  default as YalsFlex,
  default as YALSFlex
} from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import YALSModal from '../../shared/yals-modal/yals-modal';
import Container from '../container/container';
import OnPageItems from '../on-page-items/on-page-items';
import YALSShare from '../yals-share/yals-share';
import YALSTopicInfo from '../yals-topic-info/yals-topic-info';
import { IHomePageWrapperProps } from './home-page-wrapper.types';

const MenuDivider = () => {
  return (
    <YALSFlex
      justifyContent={FlexJustifyContentTypes.Start}
      className='menu-divider'
    >
      <div className={`${AppPrefix}-sep`}></div>
    </YALSFlex>
  );
};

const RenderMenus = (props: any) => {
  const {
    menuItems,
    isCustomHome,
    menuLinks,
    onMenuClick,
    customMenuContent,
    language
  } = props;

  const deviceType = useDeviceType();

  const showLeftCustomMenu =
    isCustomHome ||
    (deviceType !== DeviceType.LargeDesktop && customMenuContent);

  return (
    <>
      {menuItems && !isCustomHome && (
        <NavigationMenu
          menuLinks={menuLinks}
          menuList={menuItems}
          onMenuClick={onMenuClick}
        />
      )}

      {showLeftCustomMenu && (
        <>
          {!isCustomHome && <MenuDivider />}

          <div className={`${AppPrefix}-left-section-custom-menu`}>
            {customMenuContent}
          </div>

          {isCustomHome && <MenuDivider />}

          {isCustomHome && menuItems && (
            <NavigationMenu
              menuLinks={menuLinks}
              menuList={menuItems}
              onMenuClick={onMenuClick}
              menuTitle={`${language} Concepts`}
              showMainLinkOnly={true}
            />
          )}
        </>
      )}
    </>
  );
};

const HomePageWrapper = (props: IHomePageWrapperProps) => {
  const {
    menuLinks,
    menuItems,
    breadcrumbLink,
    children,
    isCustomHome = false,
    customMenuContent,
    language,
    closeMobileMenuCtr = 0
  } = props;

  const deviceType = useDeviceType();
  useQTextScroll();

  const [showMenu, setShowMenu] = useState(false);
  const [hasSubMenu, setHasSubMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev: boolean) => !prev);
  };

  const hideMenu = () => {
    setShowMenu(() => false);
  };

  const currentPath = useCurrentPath();

  const getCurrentRouteMenu = () => {
    const crntItem = menuLinks.find((itm: any) => itm.link === currentPath);
    return crntItem || {};
  };

  const showRightMenu =
    ((!isCustomHome && customMenuContent) || hasSubMenu) &&
    deviceType === DeviceType.LargeDesktop;

  useEffect(() => {
    const items = getOnPageItems(currentPath, menuLinks || []);

    if (items) {
      setHasSubMenu(() => {
        return items.children ? items.children.length > 0 : false;
      });
    }
  }, [currentPath, menuLinks]);

  useEffect(() => {
    if (closeMobileMenuCtr > 0) {
      hideMenu();
    }
  }, [closeMobileMenuCtr]);

  const currentLinkItem = getCurrentRouteMenu();

  return (
    <Row className={`terminology-${language}`}>
      {deviceType != DeviceType.Mobile && (
        <Col
          lg={2}
          md={3}
          sm={4}
          xxl={2}
          className={`${AppPrefix}-left-section`}
        >
          <RenderMenus
            menuItems={menuItems}
            isCustomHome={isCustomHome}
            menuLinks={menuLinks}
            customMenuContent={customMenuContent}
            language={language}
          />
        </Col>
      )}

      <Col
        lg={deviceType === DeviceType.Mobile ? 12 : 10}
        md={deviceType === DeviceType.Mobile ? 12 : 9}
        sm={deviceType === DeviceType.Mobile ? 12 : 8}
        xxl={deviceType === DeviceType.Mobile ? 12 : showRightMenu ? 8 : 10}
      >
        {breadcrumbLink && (
          <YALSBreadcrumb
            items={breadcrumbLink}
            currentMenuItem={getCurrentRouteMenu()}
          />
        )}

        {deviceType === DeviceType.Mobile && (
          <>
            {!showMenu && (
              <YALSFlex
                className='mobile-menu-wrapper'
                justifyContent={FlexJustifyContentTypes.Center}
                alignItems={FlexAlignItemsTypes.Center}
              >
                <YALSButton
                  onClick={toggleMenu}
                  variant={YALSButtonVariantTypes.Clear}
                >
                  <ListIcon height={25} width={25} />
                </YALSButton>
              </YALSFlex>
            )}

            {showMenu && (
              <YALSModal
                modalHeader='Navigation'
                show={showMenu}
                onHide={toggleMenu}
                fullScreen={true}
                modalContent={
                  <YalsFlex flexDirection={FlexDirectionTypes.Column}>
                    <RenderMenus
                      menuItems={menuItems}
                      isCustomHome={isCustomHome}
                      menuLinks={menuLinks}
                      customMenuContent={customMenuContent}
                      language={language}
                      onMenuClick={hideMenu}
                    />
                  </YalsFlex>
                }
              />
            )}
          </>
        )}

        {currentLinkItem && (
          <YALSTopicInfo
            wordCount={currentLinkItem.wordCount}
            lastUpdate={currentLinkItem.lastUpdate}
          />
        )}

        <Suspense fallback={<ContentLoader />}>{children}</Suspense>

        {deviceType === DeviceType.Mobile && customMenuContent && (
          <>{customMenuContent}</>
        )}

        {menuLinks.length > 1 && (
          <Container>
            <YALSShare />
            <NextPrevButtons allItems={menuLinks} />
          </Container>
        )}
        <ScrollTopButton />
      </Col>

      {showRightMenu && (
        <Col xxl={2} className={`${AppPrefix}-right-section`}>
          {hasSubMenu && (
            <div className='sub-menu'>
              <OnPageItems allItems={menuLinks} onMenuClick={hideMenu} />
            </div>
          )}

          <>{customMenuContent}</>
        </Col>
      )}
    </Row>
  );
};

export default memo(HomePageWrapper);
