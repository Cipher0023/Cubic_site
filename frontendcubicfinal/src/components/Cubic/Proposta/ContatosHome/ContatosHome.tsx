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
    <div className="w-full max-w-md  p-10 rounded-lg shadow flex flex-col items-center justify-center gap-6">
      {contacts.map(({ icon: Icon, title, description }, idx) => (
        <button
          key={idx}
          className="w-full group bg-base-100 rounded-lg shadow p-4 flex items-center transition-transform duration-300 hover:scale-105"
        >
          <Icon className="text-accent transition-colors duration-300 group-hover:text-primary" />
          <div className="ml-4 text-left">
            <span className="block font-semibold">{title}</span>
            <span className="block text-sm text-gray-500 mt-1">
              {description}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
