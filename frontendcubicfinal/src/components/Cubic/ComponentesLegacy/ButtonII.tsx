"use client";

import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

export function ButtonII({ children, variant = 'light', className = '', ...props }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const shadowBg = variant === 'light' ? 'bg-gray-300' : 'bg-gray-700';
  const mainBg = variant === 'light'
    ? 'bg-radial from-gray-100 from-75% to-gray-600 text-gray-900'
    : 'bg-gray-800 text-gray-100';

  const pressedClasses = isPressed ? 'translate-y-[4px] translate-x-[2px] shadow-none' : 'shadow-sm';

  return (
    <div className="relative inline-block">
      <div
        className={`absolute inset-0 top-[4px] left-[3px] right-[-2px] bottom-[-4px] rounded-2xl ${shadowBg}`}
      />
      <button
        className={`relative inline-flex items-center justify-center px-6 h-12 font-bold text-xl select-none rounded-2xl border-0 transition-all duration-100 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 ${mainBg} ${pressedClasses} ${className}`}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => isPressed && setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default ButtonII;
