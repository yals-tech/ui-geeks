import classNames from 'classnames';
import React, { memo, useState } from 'react';
import useDeviceType from '../../../custom-hooks/use-device-type';
import { AppPrefix, DeviceType } from '../../../util/app-constants';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import YalsModal from '../yals-modal/yals-modal';
import './yals-image.scss';
import { IYALSImageProps } from './yals-image.types';

const YALSImage = (props: IYALSImageProps) => {
  const {
    imagePath,
    imageTitle,
    alt,
    height = 'auto',
    width = 'auto',
    imageAlign = FlexJustifyContentTypes.Center
  } = props;

  const deviceType = useDeviceType();

  const [showInModal, setShowInModal] = useState(false);

  const imageClasses = classNames({ [`${AppPrefix}-image`]: true });

  const toggleImageModal = () => {
    setShowInModal((prev) => !prev);
  };

  const showImageInFullScreen = () => {
    if (showInModal) {
      return;
    }

    setShowInModal((prev) => true);
  };

  const ImageContent = (imageProps: any) => {
    const { imageHeight, imageWidth } = imageProps;

    return (
      <div className={imageClasses} onClick={showImageInFullScreen}>
        <img
          height={imageHeight || height}
          width={imageWidth || width}
          src={imagePath}
          alt={alt}
          style={{ cursor: showInModal ? 'auto' : 'pointer' }}
        />
        {imageTitle && <div className='img-title'>{imageTitle}</div>}
      </div>
    );
  };

  if (!showInModal) {
    return (
      <YalsFlex
        justifyContent={
          deviceType === DeviceType.Mobile
            ? FlexJustifyContentTypes.Center
            : imageAlign
        }
        alignItems={FlexAlignItemsTypes.Center}
        height='100%'
      >
        <ImageContent />
      </YalsFlex>
    );
  }

  return (
    <YalsModal
      modalHeader={alt}
      show={true}
      onHide={toggleImageModal}
      fullScreen={true}
      modalContent={
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          height='100%'
          width='100%'
        >
          <ImageContent imageHeight='100%' imageWidth='100%' />
        </YalsFlex>
      }
    />
  );
};

export default memo(YALSImage);
