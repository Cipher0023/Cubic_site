import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonII } from '@/components/buttonTypes/ButtonII'

type Props = {
  title: string;
  description: string;
  listItems: string[];
  image: string;
}

export default function BannerHorizontalThick({title,description,listItems,image}: Props) {
  return (
    <div className='
    flex justify-center items-center flex-col w-full
    border-0 rounded-0 p-2 z-2
    text-white text-start 
    bg-radial from-trasnparent from-20% to-black/90 backdrop-blur-md '
    >

      <p className='text-2xl font-bold'>Criação de sites</p>
      {/* Image container with fixed aspect ratio */}
      <div className="flex">

        <Image           
          src={image} 
          alt="banner" 
          className="rounded-2xl"
          loading="lazy"
          width={1000}
          height={500}
        >
        </Image>

        <div className="flex flex-col m-0 absolute rounded-2xl p-4
        bg-radial-[at_0%_0%] from-black/100 from-10% to-transparent ">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
          <Link href="/produtos/sites">
            <ButtonII>Ver o site</ButtonII>
          </Link>
          <ul className="list-disc pl-4">
            {listItems.map((item,index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
