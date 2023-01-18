import classNames from 'classnames';
import React, { memo } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import TextCarousal from '../../shared/text-carousal/text-carousal';
import { NewLine } from '../../shared/util/util';
import YALSButton from '../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../shared/yals-button/yals-button.types';
import YalsFlex from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './language-component.scss';
import { ILanguageProp } from './language-component.types';
const LanguageComponent = (props: ILanguageProp) => {
  const {
    title,
    tag,
    contentList,
    imagePath,
    homePagePath,
    theme,
    demoComponent,
    demoLink
  } = props;
  const navigate = useNavigate();

  const deviceType = useDeviceType();
  const introHeader = classNames({
    [`${AppPrefix}-language`]: true,
    [`theme-${theme}`]: theme
  });

  const handleRedirect = () => {
    navigate(homePagePath);
  };

  const handleRedirectToDemo = () => {
    if (demoLink) {
      navigate(demoLink.url);
    }
  };

  const showDemo =
    demoComponent &&
    [DeviceType.Desktop, DeviceType.LargeDesktop].includes(deviceType);

  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);

  return (
    <div className={introHeader}>
      <div className='language-section'>
        <Row>
          <Col
            sm={12}
            md={showDemo ? 8 : 12}
            lg={showDemo ? 8 : 12}
            xxl={showDemo ? 8 : 12}
          >
            <YalsFlex
              justifyContent={FlexJustifyContentTypes.Center}
              alignItems={FlexAlignItemsTypes.Center}
            >
              <div>
                {imagePath && (
                  <img
                    src={imagePath}
                    alt={imagePath}
                    className='language-icon'
                  />
                )}

                <h2>{title}</h2>
                <h3>{tag}</h3>
                <div className='carousal-content'>
                  <TextCarousal contentList={contentList} uniqueKey={theme} />
                </div>

                <NewLine />
                <YALSButton
                  variant={YALSButtonVariantTypes.Dark}
                  outline={false}
                  onClick={handleRedirect}
                >
                  Learn Now
                </YALSButton>

                {isMobile && demoLink && (
                  <YALSButton
                    variant={YALSButtonVariantTypes.Secondary}
                    onClick={handleRedirectToDemo}
                    className='ms-2'
                  >
                    Demoes
                  </YALSButton>
                )}
              </div>
            </YalsFlex>
          </Col>

          {showDemo && (
            <Col md={4} sm={4} lg={4} xxl={4}>
              <>{demoComponent}</>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default memo(LanguageComponent);
