import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconHalfCircle = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.halfCircle} />;
};

export default memo(IconHalfCircle);
