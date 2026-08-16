import { useState, useRef, useEffect, useCallback } from 'react';

const SWIPE_THRESHOLD = 50;

export function useOverflowTabNav({ tabsRef, activeIndex, count, onChange }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const check = () => setIsOverflowing(el.scrollWidth > el.clientWidth + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [tabsRef, count]);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const activeChip = el.children[activeIndex];
    if (activeChip) activeChip.scrollIntoView({ inline: 'nearest', behavior: 'smooth', block: 'nearest' });
  }, [activeIndex, tabsRef]);

  const goTo = useCallback((index) => {
    if (index < 0 || index >= count) return;
    onChange(index);
  }, [count, onChange]);

  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);

  const onTouchStart = useCallback((e) => {
    if (!isOverflowing) return;
    touchStartX.current = e.touches[0].clientX;
  }, [isOverflowing]);

  const onTouchEnd = useCallback((e) => {
    if (!isOverflowing || touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
  }, [isOverflowing, goPrev, goNext]);

  return { isOverflowing, goPrev, goNext, onTouchStart, onTouchEnd };
}
