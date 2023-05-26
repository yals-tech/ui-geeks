import React from 'react';

import useDOMTitle from '../../custom-hooks/use-dom-title';
import Home from './components/home';
import './profile.scss';

const ProfileComponent = () => {
  useDOMTitle('Sunil Kumar | Profile | UI Geeks');
  return <Home />;
};

export default ProfileComponent;
