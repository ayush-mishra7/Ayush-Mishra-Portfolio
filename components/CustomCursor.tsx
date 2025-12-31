import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      {/* 
        Use pointer-events-none so it doesn't block interactions.
        Use fixed position and high Z-index to stay on top.
      */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out bg-light-primary/30 dark:bg-dark-primary/30 blur-sm"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;