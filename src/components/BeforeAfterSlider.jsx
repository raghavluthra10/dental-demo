import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Only drag on click/press
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="slider-container"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => handleMove(e.clientX)}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => {
        if (e.touches.length > 0) handleMove(e.touches[0].clientX);
      }}
    >
      <img src={afterImage} alt="After Whitening" className="slider-image after" />
      
      <div 
        className="slider-clip"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before Whitening" 
          className="slider-image before"
          style={{ width: containerWidth }}
        />
      </div>

      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-button">
          <span>‹</span><span>›</span>
        </div>
      </div>
    </div>
  );
}
