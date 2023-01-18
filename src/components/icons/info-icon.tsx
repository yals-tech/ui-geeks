import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const InfoIcon = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.info} />;
};

export default memo(InfoIcon);
