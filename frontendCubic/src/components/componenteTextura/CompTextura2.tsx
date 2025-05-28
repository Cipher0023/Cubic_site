import React from 'react'

type Props = object

function CompTextura2({}: Props) {
  return (
    <div className="w-100 h-100 relative">
      <div className="w-100 h-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1422 800"
          fill="none"
          className="w-full h-auto"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
              <stop stopColor="hsl(206, 75%, 49%)" stopOpacity="1" offset="0%" />
              <stop stopColor="hsl(331, 90%, 56%)" stopOpacity="1" offset="100%" />
            </linearGradient>
          </defs>
          <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
            {/* Cole aqui todos os <path> */}
          </g>
        </svg>
      </div>
    </div>
  )
}

export default CompTextura2
