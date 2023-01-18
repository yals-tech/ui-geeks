import classNames from 'classnames';
import React, { memo, useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../custom-hooks/use-device-type';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import {
  AppPrefix,
  DeviceType,
  THEME_CONSTANT
} from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';
import { B, NewLine } from '../util/util';
import YALSButton from '../yals-button/yals-button';
import {
  YALSButtonVariantTypes,
  YALSSizeTypes
} from '../yals-button/yals-button.types';
import './next-prev-btn.scss';
import { INextPrevBtnProp } from './next-prev-btn.types';

const NextPrevButtons = (props: INextPrevBtnProp) => {
  const { allItems } = props;
  const navigate = useNavigate();
  const currentPath = useCurrentPath();
  const deviceType = useDeviceType();
  const appContext = useContext(AppContext);

  const prevNextBtnClasses = classNames({
    [`${AppPrefix}-prev-next-btn`]: true
  });

  const [prevIndex, setPrevIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(-1);

  const getNextPrevItems = () => {
    let prev = -1;
    let next = -1;

    const itemIndex = allItems.findIndex((itm) => itm.link === currentPath);

    if (itemIndex > 0) {
      prev = itemIndex - 1;
    }

    if (itemIndex < allItems.length - 1) {
      next = itemIndex + 1;
    }

    setPrevIndex(() => prev);
    setNextIndex(() => next);
  };

  useEffect(() => {
    getNextPrevItems();
  }, [currentPath]);

  const onHandleClick = (indx: number) => {
    navigate(allItems[indx].link);
  };

  return (
    <div className={prevNextBtnClasses}>
      <Row>
        <Col className='prev-btn-wrapper' lg={6} md={6} sm={12}>
          {prevIndex > -1 && (
            <YALSButton
              onClick={onHandleClick.bind(this, prevIndex)}
              outline={false}
              size={YALSSizeTypes.Large}
              variant={
                appContext.theme === THEME_CONSTANT.LIGHT_THEME
                  ? YALSButtonVariantTypes.Dark
                  : YALSButtonVariantTypes.Secondary
              }
              block={deviceType === DeviceType.Mobile}
            >
              <div className='prev-button'>
                <ChevronLeft fillColor='white' width={22} height={20} />
                <B>Prev</B>
                <NewLine />
              </div>

              <span className='route-link'>{allItems[prevIndex].label}</span>
            </YALSButton>
          )}
        </Col>

        <Col className='next-btn-wrapper' lg={6} md={6} sm={12}>
          {nextIndex > -1 && (
            <YALSButton
              onClick={onHandleClick.bind(this, nextIndex)}
              outline={false}
              size={YALSSizeTypes.Large}
              variant={
                appContext.theme === THEME_CONSTANT.LIGHT_THEME
                  ? YALSButtonVariantTypes.Dark
                  : YALSButtonVariantTypes.Secondary
              }
              block={deviceType === DeviceType.Mobile}
            >
              <div className='next-button'>
                <B>Next</B>
                <ChevronRight fillColor='white' width={22} height={20} />
                <NewLine />
              </div>
              <span className='route-link'>{allItems[nextIndex].label}</span>
            </YALSButton>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default memo(NextPrevButtons);
