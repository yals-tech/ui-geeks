import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const HomeIcon = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.home_d1} d2={IconPath.home_d2} />;
};

export default memo(HomeIcon);
