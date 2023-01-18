import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconTwitter = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.twitter} />;
};

export default memo(IconTwitter);
