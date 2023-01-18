import { ValueOf } from '../../../types/common';

export const GOOGLE_AD_PLACEMENT = {
  CONTENT_SECTION: 'content-section',
  RIGHT_SECTION: 'right-section'
};

export type GoogleAdPlacement = ValueOf<typeof GOOGLE_AD_PLACEMENT>;

export const GOOGLE_ADSENSE_SLOTS = {
  CONTENT_SECTION: '3669463951',
  RIGHT_SECTION: '4216258863'
};

export interface IYalsAdProps {
  placement: GoogleAdPlacement;
}
