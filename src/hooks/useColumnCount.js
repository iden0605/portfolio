import { useEffect, useState } from 'react';

// Tracks how many columns a responsive CSS grid is currently rendering,
// so JS-driven stagger delays can group items by row instead of index.
export function useColumnCount(breakpoint = 900, columns = 2) {
  const [count, setCount] = useState(
    typeof window !== 'undefined' && window.innerWidth >= breakpoint ? columns : 1
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setCount(mq.matches ? columns : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint, columns]);

  return count;
}
