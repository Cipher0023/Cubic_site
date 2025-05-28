import React from 'react'

type Props = {
  title: string;
  description: string;
  listItems: string[];
  image: string;
}

export default function BannerMediumLeft({title,description,listItems,image}: Props) {
  return (
    <div className='text-white text-start m-6 flex flex-row justify-evenly gap-4'>
      {/* Image container with fixed aspect ratio */}

      <div className="flex flex-col w-3/4 justify-center items-start m-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <ul className="list-disc pl-4">
          {listItems.map((item,index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
