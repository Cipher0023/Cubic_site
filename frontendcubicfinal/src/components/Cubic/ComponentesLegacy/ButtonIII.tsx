"use client";
import React, { useState } from 'react';

export interface NavItemInterface {
  url: string;
  label: string;
  isActive?: boolean;
}

export default function ButtonIII() {
  const [isPressed, setIsPressed] = useState(false);

  const pressedClasses = isPressed ? 'translate-y-[4px] translate-x-[2px] shadow-none' : 'shadow-sm';

  return (
    <li>
      <div className="relative inline-block">
        <div className="bg-black absolute inset-0 top-[4px] left-[3px] right-[-2px] bottom-[-4px] rounded-full" />
        <button
          className={`relative inline-flex items-center justify-center px-6 h-12 font-normal text-base select-none rounded-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-600 text-black transition-all duration-100 ease-out ${pressedClasses}`}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => isPressed && setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
        >
          Teste III
        </button>
      </div>
    </li>
  );
}
