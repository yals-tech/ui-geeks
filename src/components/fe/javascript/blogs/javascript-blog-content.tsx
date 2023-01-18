import React, { lazy, ReactNode } from 'react';
const JSBlogGetUserLocation = lazy(
  () => import('./blog-components/get-user-location')
);

export interface IBlogContentType {
  id: number;
  label: string;
  url: string;
  content: ReactNode | string;
}

export interface IBlogMenuType {
  label: string;
  link: string;
}

export const JS_BLOG_CONTENT: Array<IBlogContentType> = [
  {
    id: 1,
    label: 'How to get user location.',
    url: 'get-user-location',
    content: <JSBlogGetUserLocation />
  }
];
