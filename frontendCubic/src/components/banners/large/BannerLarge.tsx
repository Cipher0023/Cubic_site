import MockSite from '@/components/mockSite/MockSite'
import Link from 'next/link'
import React from 'react'

type Props = object

export default function BannerLarge({}: Props) {
return (
  <div className='flex flex-col justify-center items-center bg-amber-400 w-full'>
    <p className=''>BannerLarge</p>
    <div className='bg-gray-600 w-3/4 aspect-video'>
      <MockSite/>
    </div>
    <p>texto explicando nossos sites</p>
    <Link href='/produtos/sites' className='bg-blue-800'>botao site</Link>
  </div>
)
}