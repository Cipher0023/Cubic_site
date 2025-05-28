import React from 'react'

type Member = {
  name: string;
  image: string;
  description: string;
}

type Props = {
  Member: Member[];
}

function ImagensEquipe({Member}: Props) {
  return (
    <div className='flex flex-col items-center w-[90vw]'>
      <p className='text-5xl text-white m-4'>
        Membros
      </p>
      <ul className='flex w-full'>
        {Member.map((member, index) => (
          <li key={index} className='flex-1 flex-nowrap flex-row'>
            <div className='flex flex-col items-center text-center'>
              <img 
              src={member.image} 
              alt={`Foto de ${member.name}`} 
              className=" w-50 h-50 object-cover rounded-full"
              />
              <p className=" text-white p-2">  
                {member.name}
              </p>
              <p className="text-white p-2">
                {member.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImagensEquipe