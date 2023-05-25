import React from 'react';
import useDeviceType from '../../../../custom-hooks/use-device-type';
import { DeviceType } from '../../../../util/app-constants';
import { ImagePaths } from '../../../../util/image-path-constants';
import YalsImage from '../../../shared/yals-image/yals-image';
import { PROFILE_CONFIG } from '../../config/profile-config';

const GenerateInfoValue = ({ info }: any) => {
  if (info.isPhone) {
    return <a href={`tel:${info.description}`}>{info.description}</a>;
  }

  if (info.isEmail) {
    return <a href={`mailto:${info.description}`}>{info.description}</a>;
  }

  if (info.isLink) {
    return (
      <a target='_blank' rel='noreferrer' href={`${info.description}`}>
        {info.description}
      </a>
    );
  }

  return info.description;
};

const PersonalInfo = () => {
  const infoList = PROFILE_CONFIG.INFO;
  const deviceType = useDeviceType();
  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);
  return (
    <div className='custom-list mb-3'>
      <div className='custom-list-wrapper'>
        <div className='header-title'>Info</div>
        <div className='heading-separator'></div>
        <div className='cus-list-box'>
          {infoList.map((info) => {
            return (
              <div className='cus-list-box-item' key={info.id}>
                <div>
                  <div className='custom-list-item-title'>{info.name}</div>

                  <div className='custom-list-item-sub-title'>
                    <GenerateInfoValue info={info} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!isMobile && (
        <>
          <div className='custom-list mb-3'>
            <div className='custom-list-wrapper'>
              <div className='header-title'>Scan QR</div>
              <div className='heading-separator'></div>
              <div className='profile-qr'>
                <YalsImage
                  height='150px'
                  width='150px'
                  imagePath={ImagePaths.PROFILE.PROFILE_QR}
                  alt='Profile | Sunil Kumar'
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
