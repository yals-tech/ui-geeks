import classNames from 'classnames';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import useScrollPosition from '../../../custom-hooks/use-scroll-position';
import useCurrentPath from '../../../custom-hooks/useCurrentRoute';
import { AppPrefix } from '../../../util/app-constants';
import './yals-scroll-indicator.scss';
const YALSScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollPosition = useScrollPosition();
  const currentPath = useCurrentPath();
  const isHomePage = currentPath === '/';

  const scrollIndicatorClasses = classNames({
    [`${AppPrefix}-scroll-indicator`]: true
  });

  const calculateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const maxScrollHeight = document.body.scrollHeight;
    return ((scrollPosition + windowHeight) / maxScrollHeight) * 100;
  };

  useLayoutEffect(() => {
    setScrollPercentage(() => calculateScrollPercentage());
  }, [scrollPosition, currentPath]);

  useEffect(() => {
    window.setTimeout(() => {
      setScrollPercentage(() => calculateScrollPercentage());
    }, 100);
  }, []);

  if (isHomePage) {
    return null;
  }

  return (
    <div
      className={scrollIndicatorClasses}
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
};

export default YALSScrollIndicator;
