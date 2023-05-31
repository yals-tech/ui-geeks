import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import { getTechImageUrl } from '../../../util/util';
import { B, I } from '../../shared/util/util';
import './upcoming-topics.scss';
import { IUpcomingItemType } from './upcoming-topics.types';

const upcomingTopicList: Array<IUpcomingItemType> = [
  {
    key: 'typescript',
    label: 'TypeScript',
    description: 'TypeScript is JavaScript with syntax for types.',
    icon: getTechImageUrl('TypeScript'),
    releaseDate: '30-Jun-2023'
  },
  {
    key: 'scss',
    label: 'SCSS',
    description: 'CSS with superpowers.',
    icon: getTechImageUrl('SCSS')
  },
  {
    key: 'angular',
    label: 'Angular',
    description: 'The web development framework for building the future.',
    icon: getTechImageUrl('Angular')
  },
  {
    key: 'nodejs',
    label: 'Node Js',
    description: 'Cross-platform JavaScript runtime environment.',
    icon: getTechImageUrl('NodeJs')
  }
];
const UpcomingTopicsComponent = () => {
  const upcomingCls = classNames({
    [`${AppPrefix}-upcoming-topics`]: true
  });

  return (
    <div className={upcomingCls}>
      <div className='roadmap-header'>Future Roadmap Topics</div>
      <div className='topic-list-box'>
        <div className='topic-list'>
          {upcomingTopicList.map((itm: IUpcomingItemType) => {
            return (
              <div className={`upcoming-item upcoming-item-${itm.key}`}>
                <div className={`coming-soon ${itm.releaseDate && 'has-date'}`}>
                  <div className='label'>
                    <I>Publishing</I>
                  </div>
                  <div className='value'>
                    <B>{itm.releaseDate || 'Soon'}</B>{' '}
                  </div>
                </div>
                <div key={itm.key}>
                  <img src={itm.icon} className='icon' />
                  <h4>{itm.label}</h4>
                  <div className='desc'>{itm.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(UpcomingTopicsComponent);
