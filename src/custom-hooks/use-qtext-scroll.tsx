import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const useQTextScroll = (qTextId: string = 'qtext') => {
  const [searchParams]: any = useSearchParams();
  const id = searchParams.get(qTextId);

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 50, behavior: 'smooth' });
      }
    }
  }, [id, qTextId]);
};

export default useQTextScroll;
