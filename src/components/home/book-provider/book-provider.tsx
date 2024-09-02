import React from 'react';
import { ImagePaths } from '../../../util/image-path-constants';
import './book-provider.scss';
interface IBookProviderType {
  url: string;
  price: string;
  type: 'kindle' | 'notion';
}

export const BookProviderLink = ({ url, price, type }: IBookProviderType) => {
  const icon =
    type === 'kindle' ? ImagePaths.KINDLE_ICON : ImagePaths.NOTION_PRESS_ICON;
  return (
    <div className='flex'>
      <a href={url} target='_blank' className='book-type-box'>
        <div className='book-provider'>
          <img className={`logo logo-${type}`} src={icon} />
        </div>
      </a>
    </div>
  );
};
