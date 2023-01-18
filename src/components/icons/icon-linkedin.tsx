import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconLinkedIn = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.linkedin} />;
};

export default memo(IconLinkedIn);
