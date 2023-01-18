import classNames from 'classnames';
import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppPrefix, THEME_CONSTANT } from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import { ImagePaths } from '../../../util/image-path-constants';
import HalfCircleIcon from '../../icons/half-circle-icon';
import YalsButton from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import { default as YALSFlex } from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import YALSScrollIndicator from '../../shared/yals-scroll-indicator/yals-scroll-indicator';
import YALSSearch from '../../shared/yals-search/yals-search';
import './home-header.scss';

const HomeHeader = (props: any) => {
  const { onThemeChange } = props;
  const appHeader = classNames({ [`${AppPrefix}-home-header`]: true });
  const appContext = useContext(AppContext);

  return (
    <>
      <div className={appHeader}>
        <YALSScrollIndicator />
        <YALSFlex
          justifyContent={FlexJustifyContentTypes.SpaceBetween}
          alignItems={FlexAlignItemsTypes.Center}
        >
          <ul className='ul-main-menu'>
            <li>
              <Link to='/'>
                <img
                  src={ImagePaths.APP_LOGO}
                  height='25px'
                  width='40px'
                  alt='UI Geeks Logo'
                  className='app-logo'
                />

                <div className='app-name'>UI Geeks</div>
              </Link>
            </li>
          </ul>

          <div className='right-actions'>
            <div className='theme-switch'>
              <YalsButton
                variant={YALSButtonVariantTypes.Clear}
                onClick={onThemeChange}
                title='Change Theme'
              >
                <HalfCircleIcon
                  fillColor={
                    appContext.theme === THEME_CONSTANT.DARK_THEME
                      ? 'white'
                      : 'black'
                  }
                />
              </YalsButton>
            </div>

            <YALSSearch />
          </div>
        </YALSFlex>
      </div>
    </>
  );
};

export default memo(HomeHeader);
