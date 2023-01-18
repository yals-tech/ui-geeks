import React, { memo, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { THEME_CONSTANT } from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';
import InfoIcon from '../../icons/info-icon';
import YalsButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import YALSTabs from '../yals-tabs/yals-tabs';
import './demo-component-wrapper.scss';
import { IDemoWrapperProps } from './demo-component-wrapper.types';
const DemoComponentWrapper = (props: IDemoWrapperProps) => {
  const { demoComponentList, homePage, homePageLabel, language } = props;

  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentComponent = demoComponentList[currentIndex];

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev: number) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (currentIndex < demoComponentList.length - 1) {
      setCurrentIndex((prev: number) => prev + 1);
    }
  };

  const navigateToURL = (url?: string) => {
    if (url) {
      navigate(url);
    }
  };

  const redirectToHomePage = () => {
    navigateToURL(homePage);
  };

  const redirectToMoreDetailPage = () => {
    if (currentComponent.moreDetail) {
      navigateToURL(currentComponent.moreDetail.link);
    }
  };

  return (
    <div
      className={`demo-component ${homePageLabel ? 'full-page-demo' : ''} `}
      key={`demo-${currentComponent.id}`}
    >
      <div>
        <div>
          <>
            {homePageLabel && (
              <YalsButton onClick={redirectToHomePage} className='back-button'>
                <ChevronLeft />
                <span className='label'>{homePageLabel}</span>
              </YalsButton>
            )}

            <div>
              <>
                {demoComponentList.length > 1 && (
                  <div className='prev-next-btn'>
                    <YalsButton
                      variant={YALSButtonVariantTypes.Secondary}
                      disabled={currentIndex <= 0}
                      className='prev'
                      onClick={onPrevClick}
                      title='See pevious demo'
                    >
                      <ChevronLeft height={16} width={16} fillColor='white' />
                    </YalsButton>

                    <div className='demo-ctr'>
                      Example {currentIndex + 1} of {demoComponentList.length}
                    </div>
                    <YalsButton
                      variant={YALSButtonVariantTypes.Primary}
                      disabled={currentIndex === demoComponentList.length - 1}
                      className='next'
                      onClick={onNextClick}
                      title='See next demo'
                    >
                      <ChevronRight fillColor='white' height={16} width={16} />
                    </YalsButton>
                    {currentComponent.moreDetail && (
                      <YalsButton
                        variant={YALSButtonVariantTypes.Clear}
                        onClick={redirectToMoreDetailPage}
                        className='more-info-icon'
                        title={
                          currentComponent.moreDetail.label ||
                          'See more details'
                        }
                      >
                        <InfoIcon
                          height={25}
                          width={25}
                          fillColor={
                            appContext.theme === THEME_CONSTANT.DARK_THEME
                              ? 'white'
                              : '#46465e'
                          }
                        />
                      </YalsButton>
                    )}
                  </div>
                )}

                {currentComponent.label && (
                  <>
                    <div className='demo-title'>{currentComponent.label}</div>
                  </>
                )}
              </>
            </div>
          </>

          <YALSTabs
            id={`${language}_${currentComponent.id}`}
            tabs={currentComponent.tabs}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(DemoComponentWrapper);
