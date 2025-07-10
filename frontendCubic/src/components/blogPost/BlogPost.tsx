import React from 'react'

type versionImage = {
  src: string;
  alt: string;
}

type VersionItem = {
  title: string;
  endDate: string;
  description: string;
  image: versionImage[];
}

type Props = {
  title: string;
  startDate: string;
  description: string;
  version: VersionItem[];
}


function BlogPost({title,startDate,description,version}: Props) {
  return (
    <div>
      <div className=' bg-radial-[at_25%_25%] from-trasnparent from-20% to-black/90 backdrop-blur-md w-[90vw] border border-white rounded-3xl p-2 m-2'>

        <p className='text-3xl  font-bold m-2'>{title}</p>
        <p className='font-bold'>Início do projeto: {startDate}</p>
        <p className='m-2'>
          {description}
        </p>

        <div className='w-full h-0.5 bg-white'> {/*separador, RESOLVER DEPOIS */} </div>

        <div className='p-0 items-center text-center m-2'>
          <ul className=" pl-4">
            {version.map((item,index) => (
              <li key={index} className="mb-2">
                <p className='font-bold'>Versão: {item.title}</p>
                <p className='font-bold'>Data de término: {item.endDate}</p>
                <div className='flex flex-row justify-center'>
                  <p className='font-bold'>Descrição: </p>
                  <p className='ml-1'> {item.description}</p>
                </div>
                <ul className=''>
                  {item.image.map((img, index) => (
                    <li key={index} className="flex justify-center items-center m-2">
                      <img src={img.src} alt={img.alt} className='flex w-[50vw] h-1/2 justify-center items-center' />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default BlogPost