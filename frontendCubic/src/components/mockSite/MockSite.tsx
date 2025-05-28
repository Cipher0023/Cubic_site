import React from 'react'

type Props = object

export default function MockSite({}: Props) {
  return (
    <div className='bg-amber-900'>

      <div className='w-full bg-amber-50'>
        <p className='text-start'>seu site</p>
        <p className='text-center'>topbar</p>
      </div>

      <div className='flex flex-col bg-gray-300'>
        <p>h1</p>

        <div className='w-1/5 aspect-square bg-gray-400 text-center'>MiniItem</div>

      </div>

    </div>
  )
}