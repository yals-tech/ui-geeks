import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import {
  default as YALSFlex,
  default as YalsFlex
} from '../../shared/yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../../shared/yals-flex/yals-flex.types';
import './home-intro.scss';
const languagesList = [
  'JavaScript',
  'React',
  'Angular',
  'CSS',
  'SCSS',
  'TypeScript',
  'Next.Js',
  'Node Js'
];
const HomeIntro = () => {
  const homeIntro = classNames({ [`${AppPrefix}-home-intro`]: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const [, setInterval] = useState(0);

  const updateWordIndex = () => {
    setCurrentIndex((prev: number) => {
      let nextIndex = 0;

      if (prev < languagesList.length - 1) {
        nextIndex = prev + 1;
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    const int = window.setInterval(() => {
      updateWordIndex();
    }, 3000);

    setInterval(() => int);

    return () => {
      if (int) {
        window.clearInterval(int);
      }
    };
  }, []);

  return (
    <>
      <YALSFlex
        className={homeIntro}
        justifyContent={FlexJustifyContentTypes.SpaceAround}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='bg-image'
        >
          <img
            src={ImagePaths.APP_IMAGE_WEBP}
            alt='ui-geeks background'
            width={'100%'}
            height={'100%'}
          />
        </YalsFlex>

        <YALSFlex
          justifyContent={FlexJustifyContentTypes.Center}
          alignItems={FlexAlignItemsTypes.Center}
          className='intro-section'
        >
          <div>
            <h1 className={`${AppPrefix}-name`}>UI Learning Platform</h1>
            <h2 className={`${AppPrefix}-sub-name`}>
              <span className={`${AppPrefix}-animate-top`} key={currentIndex}>
                {languagesList[currentIndex]}
              </span>
            </h2>
            <h3 className={`${AppPrefix}-tagline`}>
              "Let's understand UI better"
            </h3>
          </div>
        </YALSFlex>
      </YALSFlex>
    </>
  );
};

export default HomeIntro;
