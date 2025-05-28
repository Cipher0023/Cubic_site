import React from 'react'
import Link from "next/link";
import Logo from '@/components/logo/Logo'

type Props = object

export default function Footer({}: Props) {
  return (
    <div className='flex flex-col items-center text-white bg-black'>
      
      <div className='flex justify-center items-center m-4'>
        <Link href="/" className=''>
          <Logo/>
          <p>Pense fora da caixa, seja Cubic!</p>
          
        
        </Link>
      </div>

      <div className='flex w-full flex-row justify-evenly'>
        <div>
        <p className='text-2xl font-bold'>Links úteis</p>
          <ul>
            <li className=' list-disc transition-color hover:text-blue-700' >Nosso Objetivo</li>
            <li className=' list-disc transition-color hover:text-blue-700' >Agende uma visita</li>
            <li className=' list-disc transition-color hover:text-blue-700' >Como podemos te ajudar</li>

          </ul>
        </div>

        <div>
          <p className='text-2xl font-bold'>Para Empresas</p>
          <ul>
            <li className='list-disc transition-color hover:text-blue-700' >Restaurante Digital</li>
            <li className='list-disc transition-color hover:text-blue-700' >Mecânica Digital</li>
            <li className='list-disc transition-color hover:text-blue-700' >Consultório digital</li>
            <li className='list-disc transition-color hover:text-blue-700' >Programas de Gestão</li>
            <li className='list-disc transition-color hover:text-blue-700' >Campanhas de Marketing</li>
            <li className='list-disc transition-color hover:text-blue-700' >Manutenção de tecnologias</li>
          </ul>
        </div>

        <div>
          <p className='text-2xl font-bold'>Trabalhe conosco!</p>
          <ul>
            <li className='list-disc transition-color hover:text-blue-700' >Desenvolvedor Frontend</li>
            <li className='list-disc transition-color hover:text-blue-700' >Desenvolvedor Backend</li>
            <li className='list-disc transition-color hover:text-blue-700' >Desenvolvedor Fullstack</li>
            <li className='list-disc transition-color hover:text-blue-700' >Designer UI/UX</li>
            <li className='list-disc transition-color hover:text-blue-700' >Marketing digital</li>
            <li className='list-disc transition-color hover:text-blue-700' >Manutenção de tecnologias</li>
          </ul>
        </div>

        <div>
          <p className='text-2xl font-bold list-disc'>Contato</p>
          <ul>
            <li className='list-disc' >Telefone: (17) 981061023</li>
            <li className='list-disc' >Email: cubic.desenvolvedores@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className=' font-bold m-4' >Copyright © 2025 Cubic, Todos os Direitos Reservados.</div>

    </div>
  )
}