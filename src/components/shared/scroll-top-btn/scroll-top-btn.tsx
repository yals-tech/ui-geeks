import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import useScrollPosition from '../../../custom-hooks/use-scroll-position';
import { AppPrefix } from '../../../util/app-constants';
import ArrowUpIcon from '../../icons/arrow-up-icon';
import YALSButton from '../yals-button/yals-button';
import YALSFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import './scroll-top-btn.scss';

const ScrollTopButton = () => {
  const scrollPosition = useScrollPosition();
  const [showBtn, setShowBtn] = useState(false);

  const scrollTopBtnClasses = classNames({
    [`${AppPrefix}-scroll-top-btn`]: true
  });

  useEffect(() => {
    setShowBtn(() => scrollPosition > 600);
  }, [scrollPosition]);

  const onHandleClick = () => {
    window.scrollTo(0, 0);
  };

  if (!showBtn) {
    return null;
  }

  return (
    <YALSFlex
      className={scrollTopBtnClasses}
      justifyContent={FlexJustifyContentTypes.Center}
      alignItems={FlexAlignItemsTypes.Center}
    >
      <YALSButton
        onClick={onHandleClick}
        noHighlight={true}
        title='Click to scroll top'
      >
        <ArrowUpIcon fillColor='white' height={30} width={30} />
      </YALSButton>
    </YALSFlex>
  );
};

export default memo(ScrollTopButton);
