import classNames from 'classnames';
import React, { memo, useContext, useEffect, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { AppPrefix, THEME_CONSTANT } from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import HomeIcon from '../../icons/home-icon';
import './yals-breadcrumb.scss';
import { IYALSBreadcrumbProps } from './yals-breadcrumb.types';

const YALSBreadcrumb = (props: IYALSBreadcrumbProps) => {
  const { items, currentMenuItem } = props;

  const appContext = useContext(AppContext);

  const [breadCrumbItems, setBreadCrumbItems] = useState(items);

  const breadcrumbClasses = classNames({
    [`${AppPrefix}-breadcrumb`]: true
  });

  useEffect(() => {
    if (currentMenuItem) {
      setBreadCrumbItems(() => [...items, currentMenuItem]);
    }
  }, [currentMenuItem]);

  return (
    <Breadcrumb className={breadcrumbClasses}>
      {breadCrumbItems.slice(0, breadCrumbItems.length - 1).map((itm: any) => {
        return (
          <Breadcrumb.Item
            key={itm.label}
            href={`#${itm.link}`}
            active={!itm.link}
            aria-label={itm.label}
            className={!itm.link ? 'inactive-item' : ''}
          >
            {itm.label === 'Home' ? (
              <HomeIcon
                fillColor={
                  appContext.theme === THEME_CONSTANT.DARK_THEME
                    ? '#dedede'
                    : ''
                }
              />
            ) : (
              itm.label
            )}
          </Breadcrumb.Item>
        );
      })}
      <Breadcrumb.Item active>
        {breadCrumbItems[breadCrumbItems.length - 1].label}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default memo(YALSBreadcrumb);
