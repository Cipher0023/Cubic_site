import React from 'react'

export interface ImageItemProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

export default function ImageItem({ src, alt, isActive }: ImageItemProps) {
  return (
    <div
      className={`
        m-5 w-40 h-40 rounded-full overflow-hidden border-4 transition-colors duration-200
        ${isActive ? 'border-blue-700 shadow-lg' : 'border-transparent'}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}