import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800">
      <h1
        className="text-white text-6xl font-bold w-full text-center"
        style={{ marginTop: '30px' }}
      >
        Para contatos
      </h1>
      <div style={{ height: '2em' }} />
      <a
        href="https://wa.me/5517981061023"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-lg font-semibold hover:underline text-center"
        style={{ fontSize: '50px', display: 'block' }}
      >
        Daniel Silva - Sócio majoritário (Whatsapp)
      </a>
      <p className="text-white mt-6 text-center" style={{ fontSize: '50px' }}>
        Telefone para contato - (69) 6924-666
        <br />
        placeholder@gmail.com.br
      </p>
    </div>
  )
}

export default Contact
