import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const ThumbsUpIcon = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.thumbsUp} />;
};

export default memo(ThumbsUpIcon);
