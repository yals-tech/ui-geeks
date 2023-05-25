import React, { memo } from 'react';

import IconLinkedin from '../icons/icon-linkedin';

import { ImagePaths } from '../../../../util/image-path-constants';
import DownloadIcon from '../../../icons/download-icon';
import './header.scss';

const HeaderSection = () => {
  return (
    <div className='header-section'>
      <div className='p-3 mb-2 header-banner text-white'>
        <div className='row-23'>
          <div className='profile-img-container'>
            <img
              src={ImagePaths.PROFILE.SUNIL}
              className='profile-img rounded-circle'
              alt='Sunil Kumar'
            />
          </div>

          <div className='profile-designation'>
            <h3>
              Sunil Kumar
              <div className='float-end'>
                <div className='social-icon-list'>
                  <a
                    className='social-name me-3 icon-linkedin'
                    href='https://www.linkedin.com/in/sunil-kumar-83146843/'
                    rel='noreferrer'
                    target='_blank'
                    title='LinkedIn'
                  >
                    <IconLinkedin height={20} width={20} fillColor='white' />
                  </a>

                  <a
                    className='social-name '
                    download=''
                    href={ImagePaths.RESUME_DOC}
                    target='_blank'
                    rel='noreferrer'
                    title='Download Resume'
                  >
                    <DownloadIcon height={20} width={20} fillColor='white' />
                  </a>
                </div>
              </div>
            </h3>
            <h6>Lead UI Architect</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HeaderSection);
