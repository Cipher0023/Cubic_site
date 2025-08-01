import React from "react";

type Props = {};

export default function ContatosHome({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="bg-amber-700">WhatsApp</button>
      <button className="btn btn-primary">email</button>
      <button className="btn btn-primary">Agende uma visita</button>
    </div>
  );
}
