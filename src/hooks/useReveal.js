import { useEffect, useRef, useState } from 'react';

// Fires once when the ref'd element first enters the viewport (mirrors AOS's
// `once: true`) — resets only if the component unmounts and remounts (route change).
// Pass `immediate: true` to skip the viewport check entirely and reveal on mount
// (e.g. a fixed set of sections that should all animate in together on page load).
//
// `threshold` is IntersectionObserver's ratio-of-the-ELEMENT'S-OWN-AREA-visible —
// fine for small elements, but for anything taller than the viewport (a whole
// terminal window, a long list) that ratio may never be reachable, so the reveal
// never fires. Use `rootMargin` instead to require more/less scroll — it shrinks
// the effective viewport rather than demanding a fraction of the element's area.
export function useReveal({ threshold = 0, rootMargin = '0px 0px -10% 0px', immediate = false } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (immediate) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, immediate]);

  return { ref, revealed, className: `reveal${revealed ? ' reveal-in' : ''}` };
}

// Sizes the typewriter effect (steps/width/duration) to the text it reveals.
// speedMultiplier < 1 plays the animation faster (e.g. 0.6 = 40% faster).
export function typeVars(text, extra = 1, speedMultiplier = 1) {
  const len = Math.max(String(text).length + extra, 1);
  return {
    '--reveal-type-ch': `${len + 1}ch`,
    '--reveal-type-steps': len,
    '--reveal-type-duration': `${(Math.min(1.6, 0.4 + len * 0.04) * speedMultiplier).toFixed(2)}s`,
  };
}
