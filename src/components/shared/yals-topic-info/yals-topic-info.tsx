import classNames from 'classnames';
import React, { useContext } from 'react';
import {
  AppPrefix,
  MAX_WORD_PER_MIN,
  THEME_CONSTANT
} from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import IconCalendar from '../../icons/icon-calendar';
import IconHourGlass from '../../icons/icon-hour-glass';
import './yals-topic-info.scss';
import { IYALSTopicInfoProps } from './yals-topic-info.types';
const YALSTopicInfo = (props: IYALSTopicInfoProps) => {
  const { wordCount = 0, lastUpdate = new Date() } = props;
  const topicInfoClasses = classNames({
    [`${AppPrefix}-topic-info`]: true
  });

  const appContext = useContext(AppContext);
  const fillColor =
    appContext.theme === THEME_CONSTANT.DARK_THEME ? '#c0c0c0' : '';

  return (
    <div className={topicInfoClasses} key={`${wordCount}_${lastUpdate}`}>
      <div className='mb-2'>
        <IconCalendar height={15} width={15} fillColor={fillColor} />
        <span className='info-text'>
          Last modified on {new Date(lastUpdate).toDateString()}
        </span>
      </div>

      {wordCount > 0 && (
        <div>
          <IconHourGlass height={15} width={15} fillColor={fillColor} />
          <span className='info-text'>
            {Math.ceil(wordCount / MAX_WORD_PER_MIN)} minutes read
          </span>
        </div>
      )}
    </div>
  );
};

export default YALSTopicInfo;
