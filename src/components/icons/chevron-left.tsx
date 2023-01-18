import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const ChevronLeft = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.chevronLeft} />;
};

export default memo(ChevronLeft);
