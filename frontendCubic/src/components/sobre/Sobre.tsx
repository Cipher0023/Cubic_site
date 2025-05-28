import React from 'react'

type Props = {
  title: string;
  text: string;
  callToAction?: string;
}

function Sobre({ title, text, callToAction }: Props) {
  return (
    <div className='flex flex-col justify-center flex-wrap items-center'>

      <p className='text-6xl text-white m-4'>
        {title}
      </p>

      <div className="flex flex-col items-center w-[80vw]">
        <p
          className="text-white text whitespace-pre-line"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.5'
          }}
        >
          {text}
        </p>
      </div>

      {callToAction && (
        <div>
          <p className='text-4xl text-white m-4'>
            {callToAction}
          </p>
        </div>
      )}
    </div>
  )
}

export default Sobre
