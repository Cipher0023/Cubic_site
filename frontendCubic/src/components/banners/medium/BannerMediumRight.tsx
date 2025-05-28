import React from 'react'

type Props = {
  title: string;
  description: string;
  listItems: string[];
  image: string;
}

export default function BannerMediumRight({title, description, listItems, image}: Props) {
  return (
    <div className='text-white text-start m-6 flex flex-row justify-evenly gap-4'>
      <div className="flex flex-col w-3/4 justify-center items-start m-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <ul className="list-disc pl-4">
          {listItems.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="w-1/2 flex-shrink-0">
        <img 
          src={image} 
          alt="banner" 
          className="w-full h-64 object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  )
}
