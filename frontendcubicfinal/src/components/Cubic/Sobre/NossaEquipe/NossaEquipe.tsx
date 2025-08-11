import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export type EquipeItem = {
  imagem: string;
  nome: string;
  cargo: string;
  bio: string;
  especialidades: string[];
  social: {
    linkedin: string;
    email: string;
  };
};

type Props = { equipe: EquipeItem[] };

export default function NossaEquipe({ equipe }: Props) {
  return (
    <div>
      <div className="mb-16 text-center">
        <h2 className="mb-6 font-bold text-primary text-4xl">
          Conheça nossa equipe
        </h2>
        <p className="mx-auto max-w-3xl text-base-content text-xl">
          Conheça melhor os indivíduos que fazem a Cubic crescer e digitalizar
          seus negócios
        </p>
      </div>

      <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {equipe.map((equipe, index) => (
          <div
            key={index}
            className="bg-base-100 shadow-lg hover:shadow-xl border border-base-300 rounded-2xl overflow-hidden transition-shadow duration-300"
          >
            <div className="flex justify-center items-center bg-gradient-to-br from-base-100 to-base-200 aspect-square">
              <Image
                src={equipe.imagem || "/placeholder.svg"}
                alt={equipe.nome}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="mb-1 font-bold text-base-content text-xl">
                {equipe.nome}
              </h3>
              <p className="mb-3 font-medium text-accent">{equipe.cargo}</p>
              <p className="mb-4 text-sm text-base-content leading-relaxed">
                {equipe.bio}
              </p>

              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-sm text-base-content">
                  Specialties:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {equipe.especialidades.map((especialidade, idx) => (
                    <span
                      key={idx}
                      className="bg-base-100 px-2 py-1 border border-info rounded-full text-xs text-base-content/75"
                    >
                      {especialidade}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={equipe.social.linkedin}
                  className="flex justify-center items-center bg-base-100 hover:bg-accent rounded-full w-8 h-8 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 text-base-content/75 hover:text-base-content" />
                </Link>
                <Link
                  href={`mailto:${equipe.social.email}`}
                  className="flex justify-center items-center bg-base-100 hover:bg-accent rounded-full w-8 h-8 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-base-content/75 hover:text-base-content" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
