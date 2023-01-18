import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { getOnPageItems } from '../../../util/util';
import ChevronRight from '../../icons/chevron-right';
import Heading from '../heading/heading';
import OnPageItems from '../on-page-items/on-page-items';
import './navigation-menu.scss';
import { IMenuItem, INavigationMenuProps } from './navigation-menu.types';

const NavigationMenu = (props: INavigationMenuProps) => {
  const {
    menuList,
    menuTitle,
    menuLinks,
    showMainLinkOnly = false,
    onMenuClick
  } = props;
  const menuClasses = classNames({ [`${AppPrefix}-menu-wrapper`]: true });
  const currentPath = useCurrentPath();
  const isSelectedRoute = (url: string) => currentPath === url;

  const deviceType = useDeviceType();

  const [showSubMenu, setShowSubMenu] = useState(true);
  const [itemsLength, setItemsLength] = useState(0);

  const handleMenuClick = (itm: IMenuItem) => {
    const item = getOnPageItems(itm.url, menuLinks || []);
    if (item && item.children) {
      setShowSubMenu((prev: boolean) => !prev);
      return;
    }

    onMenuClick && onMenuClick(itm);
  };

  const getOnPageItem = () => {
    const items = getOnPageItems(currentPath, menuLinks || []);
    if (items) {
      setItemsLength(() => (items.children ? items.children.length : 0));
    }
  };

  useEffect(() => {
    setShowSubMenu(() => true);
    getOnPageItem();
  }, [currentPath]);

  return (
    <div className={menuClasses}>
      {menuTitle && (
        <div className='menu-title'>
          <Heading as='h5'>{menuTitle}</Heading>
        </div>
      )}

      <ul className='menu-ul'>
        {showMainLinkOnly && (
          <li key={menuList[0].url}>
            <Link
              to={menuList[0].url}
              onClick={handleMenuClick.bind(this, menuList[0])}
            >
              <span className='link-label'>Learn Now</span>
            </Link>
          </li>
        )}

        {!showMainLinkOnly &&
          menuList.map((itm: IMenuItem) => {
            return (
              <li key={itm.url}>
                <Link
                  to={itm.url}
                  className={isSelectedRoute(itm.url) ? 'selected' : ''}
                  onClick={handleMenuClick.bind(this, itm)}
                >
                  <span className='link-label'> {itm.label}</span>
                  {deviceType !== DeviceType.LargeDesktop &&
                    itemsLength > 0 &&
                    isSelectedRoute(itm.url) && (
                      <span
                        className={`arrow ${
                          showSubMenu ? 'arrow-down' : 'arrow-right'
                        }`}
                      >
                        <ChevronRight />
                      </span>
                    )}
                </Link>

                {showSubMenu &&
                  deviceType !== DeviceType.LargeDesktop &&
                  menuLinks &&
                  isSelectedRoute(itm.url) && (
                    <div className='sub-menu'>
                      <OnPageItems
                        allItems={menuLinks}
                        onMenuClick={onMenuClick}
                      />
                    </div>
                  )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default memo(NavigationMenu);
