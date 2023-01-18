import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToQText } from '../util/util';

const useCurrentPath = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToQText();
  }, [location.pathname]);

  return location.pathname;
};

export default useCurrentPath;
