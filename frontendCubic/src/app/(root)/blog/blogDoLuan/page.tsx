import { ButtonII } from '@/components/buttonTypes/ButtonII'
import ButtonIII from '@/components/buttonTypes/ButtonIII'
import React from 'react'

type Props = object

export default function page({}: Props) {
  return (
    <div className='flex flex-col w-full items-center aspect-square bg-gray-900 text-white'>
      <div className='flex flex-col items-left'>
        <h1 className='text-7xl font-bold m-4'>Blog do Foguete</h1>
        <p className='text-2xl'>aqui falarei um pouco sobre o projeto e meus trabalhos, além de demonstá-los</p>
      </div>

      <div className='w-9/10 border-2 border-white text-center m-4 rounded-3xl p-4'>
        <p className='text-3xl m-4'>Botão 2.0</p>
        <p className='m-4 text-start'>
          Vendo que o botão padrão do nextJs era bem simples e não atendia o que eu gostaria para a empresa, 
          decidi que seria necessário criar um botão 2.0, que incluisse animações e uma estética superior ao 
          padrão.<br/><br/> Tentei de diversas maneiras, a de mais simples implementação e 
          mais estéticamente agradável foi usando a bliblioteca Motion, porém não consegui faze-la funcionar 
          na Navbar, tentei então com tailwindcss apenas e tive um resultado muito satisfatório.
          <br/><br/>A baixo vocês podem ver e interagir com o protótipo em andamento
        </p>

        <div className='m-4'>
          v1
          <ButtonII>Botão 2.0</ButtonII>
        </div>

        <div className='m-4'>
          <ButtonIII/>
        </div>  
      </div>

      <div className='w-9/10 border-2 border-white text-center m-4 rounded-3xl p-4'>
        <p className='text-3xl m-4'>Integração Google Maps</p>
        <p className='m-4 text-start'>
          Estou trabalhando em integrar o google maps no site. Tenho apenas a api key
        </p>
      </div>

    </div>
  )
}