import BannerHorizontalThick from "@/components/banners/horizontal/thick/BannerHorizontalThick";
import React from "react";

export default function page() {
  return (
    <div>
      <p className="text-white">Produto1</p>

      <div className="flex flex-col items-center justify-evenly text-white">
        <BannerHorizontalThick
          title="Inpire! e-commerce de perfumarias"
          description="E-commerce"
          listItems={["novidade 1", "novidade 2", "novidade 3"]}
          image="/images/images.jpeg"
        />
      </div>

      <div>
        <p>Gestão de Mídias Sociais e Marketing Digital:</p>
        <p className="text-white">
          nós fazemos a gestão das redes sociais para você
        </p>
      </div>

      <div>
        <p>Sistemas de Gestão Online (ERP e CRM)</p>
      </div>

      <div>
        <p>Assistência Técnica em Informática</p>
      </div>

      <div>
        <p>Consultoria em Inteligência Artificial</p>
      </div>

      <div>
        <p>Entretenimento Digital</p>
      </div>
    </div>
  );
}
