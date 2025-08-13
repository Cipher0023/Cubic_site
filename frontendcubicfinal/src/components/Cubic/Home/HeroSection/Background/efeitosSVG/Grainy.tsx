import React from 'react'

type Props = object

function Grainy({}: Props) {
  return (
    <div className='flex w-full h-full absolute overflow-hidden'>
      <svg viewBox="0 0 700 700" width="100%" height="100%">
        <defs>
          <filter 
            id="gggrain-filter" 
            x="-20%" 
            y="-20%" 
            width="140%" 
            height="140%" 
            filterUnits="objectBoundingBox" 
            primitiveUnits="userSpaceOnUse" 
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.84" 
              numOctaves="2" 
              seed="2" 
              stitchTiles="stitch" 
              x="0%" 
              y="0%" 
              width="100%" 
              height="100%" 
              result="turbulence"
            />
            <feColorMatrix 
              type="saturate" 
              values="0" 
              x="0%" 
              y="0%" 
              width="100%" 
              height="100%" 
              in="turbulence" 
              result="colormatrix"
            />
            <feComponentTransfer 
              x="0%" 
              y="0%" 
              width="100%" 
              height="100%" 
              in="colormatrix" 
              result="componentTransfer"
            >
              <feFuncR type="linear" slope="3"/>
              <feFuncG type="linear" slope="3"/>
              <feFuncB type="linear" slope="3"/>
            </feComponentTransfer>
            <feColorMatrix 
              x="0%" 
              y="0%" 
              width="100%" 
              height="100%" 
              in="componentTransfer" 
              result="colormatrix2" 
              type="matrix" 
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 19 -11"
            />
          </filter>
        </defs>
        <rect 
          width="100%" 
          height="100%" 
          fill="transparent" 
          filter="url(#gggrain-filter)" 
          opacity="1" 
          style={{ mixBlendMode: 'soft-light' }}
        />
      </svg>
    </div>
  )
}

export default Grainy