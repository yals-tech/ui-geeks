import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import YALSBox from '../yals-box/yals-box';
import {
  GOOGLE_ADSENSE_SLOTS,
  GOOGLE_AD_PLACEMENT,
  IYalsAdProps
} from './yals-ad.types';

import './yals-ad.scss';

const YALSAd = (props: IYalsAdProps) => {
  const { placement } = props;

  const [slotId, setSlotId] = useState(GOOGLE_ADSENSE_SLOTS.CONTENT_SECTION);
  const shareClasses = classNames({
    [`${AppPrefix}-ad`]: true
  });

  const getSlotId = () => {
    switch (placement) {
      case GOOGLE_AD_PLACEMENT.RIGHT_SECTION:
        return GOOGLE_ADSENSE_SLOTS.RIGHT_SECTION;
      default:
        return GOOGLE_ADSENSE_SLOTS.CONTENT_SECTION;
    }
  };

  useEffect(() => {
    setSlotId(() => getSlotId());
  }, [placement]);

  return (
    <div className={shareClasses}>
      <YALSBox>
        <div className='ad-label'>Advertisement</div>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-1688675725243845'
          data-ad-slot={slotId}
          data-ad-format='auto'
          data-full-width-responsive='true'
        ></ins>
      </YALSBox>
    </div>
  );
};

export default YALSAd;
