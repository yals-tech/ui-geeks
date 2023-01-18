import React, { Fragment, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { ILabelURLType, ILinkTreeType } from '../../../types/common';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import { populateId } from '../../../util/util';
import Heading from '../heading/heading';
import YalsFlex from '../yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../yals-flex/yals-flex.types';
import YALSNavigateButton from '../yals-navigate-btn/yals-navigate-btn';

export const RenderItem = (props: any) => {
  const { menus, primaryURL, counter, deviceType } = props;
  const isLargeDevice = [DeviceType.Desktop, DeviceType.LargeDesktop].includes(
    deviceType
  );
  return (
    <>
      {menus.map((mn: any, index: number) => {
        return (
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.FlexStart}
            width='100%'
            key={`it-${mn.label}`}
          >
            {isLargeDevice && (
              <span>{counter ? `${counter + index}.` : ''} &nbsp;</span>
            )}
            <YALSNavigateButton
              to={
                !primaryURL
                  ? mn.url
                  : `${primaryURL}?qtext=${populateId(mn.label)}`
              }
              label={`${mn.shortLabel || mn.label}`}
              className={`${AppPrefix}-btn`}
            />
          </YalsFlex>
        );
      })}
    </>
  );
};
export const SubTree = (props: any) => {
  const { currentMenu, linksMenu, deviceType } = props;

  const [menuItems, setMenuItems] = useState<any>([]);
  const [setList, setSetList] = useState<any>([]);

  useEffect(() => {
    const subMenu = linksMenu.find((mn: ILinkTreeType) => {
      return mn.link === currentMenu.url;
    });

    const menuItems = subMenu && subMenu.children ? subMenu.children : [];
    setMenuItems(() => menuItems);

    const itemsPerColumn = Math.ceil(menuItems.length / 3);

    setSetList(() => [
      {
        items: menuItems.slice(0, itemsPerColumn),
        startCount: 1
      },
      {
        items: menuItems.slice(itemsPerColumn, 2 * itemsPerColumn),
        startCount: itemsPerColumn + 1
      },
      {
        items: menuItems.slice(2 * itemsPerColumn),
        startCount: 2 * itemsPerColumn + 1
      }
    ]);
  }, []);

  if (menuItems.length === 0) {
    return (
      <Row>
        <Col xl={4} lg={4} md={4} sm={12}>
          <RenderItem
            menus={[{ label: 'Introduction' }]}
            primaryURL={currentMenu.url}
            deviceType={deviceType}
            counter={1}
          />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <Row>
        {menuItems.length <= 3 ? (
          <Col xl={4} lg={4} md={4} sm={12}>
            <RenderItem
              menus={menuItems}
              primaryURL={currentMenu.url}
              counter={1}
              deviceType={deviceType}
            />
          </Col>
        ) : (
          <>
            {setList.map((set: any, index: number) => {
              return (
                <Col xl={4} lg={4} md={4} sm={12} key={`it-${set.startCount}`}>
                  <RenderItem
                    menus={set.items}
                    primaryURL={currentMenu.url}
                    counter={set.startCount}
                    deviceType={deviceType}
                  />
                </Col>
              );
            })}
          </>
        )}
      </Row>
    </>
  );
};
const MenuTreeComponent = (props: any) => {
  const { menuChildren, linksMenu } = props;

  const deviceType = useDeviceType();
  if (!menuChildren) {
    return <></>;
  }

  useEffect(() => {}, menuChildren);

  return (
    <div>
      {menuChildren.map((menu: ILabelURLType) => {
        return (
          <Fragment key={`${menu.url}`}>
            <YALSNavigateButton
              to={menu.url}
              label={<Heading as='h4'>{menu.label}</Heading>}
              className='no-link'
            />
            <SubTree
              currentMenu={menu}
              linksMenu={linksMenu}
              deviceType={deviceType}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default MenuTreeComponent;
