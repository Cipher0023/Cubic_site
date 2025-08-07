import React from "react";
import { Phone, Mail, Calendar } from "lucide-react";

type Contact = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function ContatosHome() {
  const contacts: Contact[] = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Converse pelo nosso WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Envie um e-mail para contato@empresa.com",
    },
    {
      icon: Calendar,
      title: "Agende uma visita",
      description: "Marque uma visita ao nosso escritório",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-6 shadow p-10 rounded-lg w-full max-w-md">
      {contacts.map(({ icon: Icon, title, description }, idx) => (
        <div key={idx} className="relative group w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-30 rounded-2xl transition-opacity duration-300 blur"></div>
          <button className="flex items-center bg-gradient-to-br from-base-300 to-base-100 shadow-md p-5 border border-base-300 rounded-2xl w-full hover:scale-105 transition-transform duration-300 relative z-10"
        >
          <Icon className="text-primary group-hover:text-accent transition-colors duration-300" />
          <div className="ml-4 text-left">
            <span className="block font-semibold">{title}</span>
            <span className="block mt-1 text-gray-500 text-sm">
              {description}
            </span>
          </div>
        </button>
        </div>
      ))}
    </div>
  );
}
