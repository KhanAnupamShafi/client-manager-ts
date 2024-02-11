import { useEffect, useRef } from 'react';

const useDebounce = (
  callback: (term: string) => void,
  delay: number
) => {
  const ref = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (ref.current !== null) {
        clearTimeout(ref.current);
      }
    };
  }, []);

  const debouncedCallback = (term: string) => {
    if (ref.current !== null) {
      clearTimeout(ref.current);
    }

    ref.current = setTimeout(() => {
      callback(term);
    }, delay);
  };
  return debouncedCallback;
};

export default useDebounce;
