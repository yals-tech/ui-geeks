import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconFacebook = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.facebook} />;
};

export default memo(IconFacebook);
