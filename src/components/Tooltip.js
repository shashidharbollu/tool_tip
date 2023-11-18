//importing react and useState hook
import React, { useState } from 'react';
//importing CSS
import './tooltip.css';

//Tooltip component receving position as props
const Tooltip = ({ position, children }) => {
  //state and function to enable and disable tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  //get postion from props and set transform
  const getTooltipPosition = () => {
    switch (position) {
      case 'top':
        return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { top: '50%', right: '100%', transform: 'translateY(-50%)' };
      case 'right':
        return { top: '50%', left: '100%', transform: 'translateY(-50%)' };
      default:
        return { top: 0, left: 0 };
    }
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className={`tooltip ${position}`} style={getTooltipPosition()}>
          Thank You for Hovering! I'm tooltip
        </div>
      )}
    </div>
  );
};

export default Tooltip;
