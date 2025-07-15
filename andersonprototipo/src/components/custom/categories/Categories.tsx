import React from "react";

type Props = object;

function Categories({}: Props) {
  return (
    <div className="m-4 flex justify-center gap-2 join">
      <button className=" btn text-xl btn-accent join-item">Especiais</button>
      <button className=" btn text-xl btn-accent btn-active join-item">
        Marmitas
      </button>
      <button className=" btn text-xl btn-accent join-item">Bebidas</button>
      <button className=" btn text-xl btn-accent join-item">Sobremesas</button>
    </div>
  );
}

export default Categories;
