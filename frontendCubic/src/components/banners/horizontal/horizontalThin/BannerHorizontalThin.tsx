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

export default function BannerHorizontalThin({title,description,listItems,image}: Props) {
  return (
    <div className='
    flex justify-evenly flex-row 
    m-6 gap-4 border-1 rounded-3xl p-2
    text-white text-start 
    bg-radial-[at_25%_25%] from-trasnparent from-20% to-black/90 backdrop-blur-md border-white'
    >
      {/* Image container with fixed aspect ratio */}
      <div className="w-1/4">

        <Image           
          src={image} 
          alt="banner" 
          className="aspect-square object-cover rounded-lg"
          loading="lazy"
          width={1000}
          height={1000}
        >
        </Image>

      </div>

      <div className="flex flex-col  justify-center items-start m-4 ">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <Link href="/blog/blogDoFoguete">
          <ButtonII>Ir para blog </ButtonII>
        </Link>
        <ul className="list-disc pl-4">
          {listItems.map((item,index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
