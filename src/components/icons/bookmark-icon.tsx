import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const BookmarkIcon = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.bookmark} />;
};

export default memo(BookmarkIcon);
