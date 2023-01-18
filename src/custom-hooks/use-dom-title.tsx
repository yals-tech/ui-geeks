import { useEffect } from 'react';

const useDOMTitle = (title: string) => {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'UI Geeks | UI Learning Platform';
    };
  }, []);
};

export default useDOMTitle;
