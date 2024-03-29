import classNames from 'classnames';
import React, { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { APP_INFO, AppPrefix, PROFILE_URL } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import { SOCIAL_LINKS } from '../../../util/url-constants';
import IconInstagram from '../../icons/icon-instagram';
import IconLinkedin from '../../icons/icon-linkedin';
import IconTwitter from '../../icons/icon-twitter';
import ThumbsUpIcon from '../../icons/thumbs-up-icon';
import { B, I } from '../../shared/util/util';
import YalsButton from '../../shared/yals-button/yals-button';
import YalsFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-footer.scss';

const SocialIcons = () => {
  const navigate = useNavigate();

  const iconProps = {
    width: 20,
    height: 20
  };

  const onSupportUsClick = () => {
    navigate(SOCIAL_LINKS.SUPPORT_US);
  };

  return (
    <div className='social-info'>
      <YalsButton
        noHighlight
        className='icon-support-us'
        ariaLabel='UI Geeks | Support Us Page'
        onClick={onSupportUsClick}
      >
        <ThumbsUpIcon {...iconProps} />
      </YalsButton>

      <YalsButton
        noHighlight
        className='icon-twitter'
        target='_blank'
        href={SOCIAL_LINKS.TWITTER}
        ariaLabel='UI Geeks | Twitter Home Page'
      >
        <IconTwitter {...iconProps} />
      </YalsButton>

      <YalsButton
        noHighlight
        className='icon-linkedin'
        target='_blank'
        href={SOCIAL_LINKS.LINKEDIN}
        ariaLabel='UI Geeks | LinkedIn Home Page'
      >
        <IconLinkedin {...iconProps} />
      </YalsButton>

      <YalsButton
        noHighlight
        className='icon-instagram'
        target='_blank'
        href={SOCIAL_LINKS.INSTAGRAM}
        ariaLabel='UI Geeks | Instagram Home Page'
      >
        <IconInstagram {...iconProps} />
      </YalsButton>
    </div>
  );
};
const HomeFooter = () => {
  const homeFooter = classNames({ [`${AppPrefix}-home-footer`]: true });

  const currentPath = useCurrentPath();

  const isHomePage = currentPath === '/';

  return (
    <div className={homeFooter}>
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        flexDirection={FlexDirectionTypes.Column}
        className={`detail-footer ${isHomePage && 'home-page'}`}
      >
        {isHomePage && (
          <>
            <SocialIcons />

            <div className='intro-text'>
              <div className='intro-text-title'>
                <B>{APP_INFO.TAG_LINE}</B>
              </div>
              <I>{APP_INFO.DESC}</I>
            </div>

            <div className='privacy-terms'>
              <Link className='me-2' to='/privacy-policy'>
                Privacy Policy
              </Link>
              |
              <Link className='ms-2' to='/terms-of-service'>
                Terms of Service
              </Link>
            </div>
          </>
        )}

        <div className='app-info'>
          <div className='app-name'>
            &#169; {new Date().getFullYear()} UI Geeks | UI Learning Platform.
            {!isHomePage && <SocialIcons />}
          </div>
          {isHomePage && (
            <div className='app-icon'>
              <Link to={PROFILE_URL}>
                <img
                  src={ImagePaths.APP_LOGO}
                  alt='UI Geels Logo'
                  width='60px'
                  height='37px'
                />
              </Link>
            </div>
          )}
        </div>
      </YalsFlex>
    </div>
  );
};

export default memo(HomeFooter);
