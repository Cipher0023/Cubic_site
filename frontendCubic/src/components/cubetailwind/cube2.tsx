// components/IsometricCube.tsx
import React from 'react';

interface IsometricCubeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animationSpeed?: 'slow' | 'normal' | 'fast';
}

const IsometricCube: React.FC<IsometricCubeProps> = ({ 
  size = 'md', 
  className,
  animationSpeed = 'normal'
}) => {
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  const speedClasses = {
    slow: 'animate-[spin3d_16s_linear_infinite]',
    normal: 'animate-[spin3d_10s_linear_infinite]',
    fast: 'animate-[spin3d_5s_linear_infinite]',
  };

  const translateZ = {
    sm: 'translateZ(2.5rem)',
    md: 'translateZ(4rem)',
    lg: 'translateZ(6rem)',
  };

  return (
    <div className={`${className} ${sizeClasses[size]} relative [transform-style:preserve-3d]`}>
      {/* Container do cubo com animação nos 3 eixos */}
      <div className={`w-full h-full relative [transform-style:preserve-3d] ${speedClasses[animationSpeed]}
        [transform:rotateX(-20deg)_rotateY(-45deg)]`}>
        
        {/* Face frontal */}
        <div className={`
          absolute w-full h-full bg-blue-500 opacity-90
          flex items-center justify-center text-white font-bold
          [transform:${translateZ[size]}] border-2 border-blue-700
        `}>
          Front
        </div>
        
        {/* Face traseira */}
        <div className={`
          absolute w-full h-full bg-blue-600 opacity-90
          flex items-center justify-center text-white font-bold
          [transform:rotateY(180deg)_${translateZ[size]}]
          border-2 border-blue-800
        `}>
          Back
        </div>
        
        {/* Face direita */}
        <div className={`
          absolute w-full h-full bg-blue-400 opacity-90
          flex items-center justify-center text-white font-bold
          [transform:rotateY(90deg)_${translateZ[size]}]
          border-2 border-blue-600
        `}>
          Right
        </div>
        
        {/* Face esquerda */}
        <div className={`
          absolute w-full h-full bg-blue-700 opacity-90
          flex items-center justify-center text-white font-bold
          [transform:rotateY(-90deg)_${translateZ[size]}]
          border-2 border-blue-900
        `}>
          Left
        </div>
        
        {/* Face superior */}
        <div className={`
          absolute w-full h-full bg-blue-300 opacity-90
          flex items-center justify-center text-white font-bold
          [transform:rotateX(90deg)_${translateZ[size]}]
          border-2 border-blue-500
        `}>
          Top
        </div>
        
        {/* Face inferior */}
        <div
          className={`absolute w-full h-full bg-blue-800 opacity-90 flex items-center justify-center text-white font-bold [transform:rotateX(-90deg)_${translateZ[size]}] border-2 border-blue-900`}
        >
          Bottom
        </div>
      </div>
    </div>
  );
};

export default IsometricCube;