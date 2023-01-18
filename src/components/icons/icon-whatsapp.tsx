import React, { memo } from 'react';
import BaseIcon from './base-icons';
import { IconsProps } from './base-icons.types';
import { IconPath } from './icons.path';

const IconWhatsapp = (props: IconsProps) => {
  return <BaseIcon {...props} d={IconPath.whatsapp} />;
};

export default memo(IconWhatsapp);
