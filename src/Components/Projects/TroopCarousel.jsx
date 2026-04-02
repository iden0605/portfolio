import React, { useState, useEffect, useRef } from 'react';
import './TroopCarousel.css';

function TroopCarousel({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState(null);
  const buttonRefs = useRef([]);

  // Preload all GIFs on mount so switching feels instant
  useEffect(() => {
    items.forEach(item => {
      if (item.gif) {
        const img = new Image();
        img.src = item.gif;
      }
    });
  }, [items]);

  const measureButton = (index) => {
    const btn = buttonRefs.current[index];
    if (btn) {
      setHighlightStyle({
        left: btn.offsetLeft,
        top: btn.offsetTop,
        width: btn.offsetWidth,
        height: btn.offsetHeight,
      });
    }
  };

  // Use double rAF on mount so sprite images have time to lay out before measuring
  useEffect(() => {
    let raf1, raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => measureButton(selectedIndex));
    });
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); };
  }, []);

  const handleSelect = (index) => {
    if (index === selectedIndex) return;
    measureButton(index);
    setSelectedIndex(index);
    setFading(true);
    setTimeout(() => {
      setDisplayIndex(index);
      setFading(false);
    }, 150);
  };

  const current = items[displayIndex];

  return (
    <div className="troop-carousel">
      <div className={`troop-gif-panel${fading ? ' troop-gif-fading' : ''}`}>
        {current.gif ? (
          current.gif.endsWith('.mp4') ? (
            <video
              src={current.gif}
              autoPlay
              loop
              muted
              playsInline
              className="troop-gif"
            />
          ) : (
            <img
              src={current.gif}
              alt={`${current.name} attack`}
              loading="lazy"
              className="troop-gif"
            />
          )
        ) : (
          <div className="troop-gif-placeholder">GIF coming soon</div>
        )}
      </div>

      <div className="troop-info">
        <div className="troop-label">
          <span className="troop-name">{current.name}</span>
          <span className="troop-attack-divider">—</span>
          <span className="troop-attack-name">{current.attackName}</span>
        </div>
        <p className="troop-description">{current.description}</p>
      </div>

      <div className="troop-selector-row">
        {highlightStyle && (
          <div className="troop-selector-highlight" style={highlightStyle} />
        )}
        {items.map((item, index) => (
          <button
            key={item.name}
            ref={el => { buttonRefs.current[index] = el; }}
            className={`troop-selector${index === selectedIndex ? ' troop-selector--active' : ''}`}
            onClick={() => handleSelect(index)}
            title={item.name}
          >
            <div className="troop-sprite-wrapper">
              <img src={item.sprite} alt={item.name} className="troop-sprite" />
            </div>
            <span className="troop-selector-name">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TroopCarousel;
