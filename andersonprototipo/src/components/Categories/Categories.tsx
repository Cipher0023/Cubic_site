import React from "react";

type Props = object;

function Categories({}: Props) {
  return (
    <div className="m-4 flex justify-center gap-3 flex-wrap font-extrabold">
      {["Especiais", "Marmitas", "Bebidas", "Sobremesas"].map((item, i) => (
        <button
          key={i}
          className={`btn px-6 py-2 text-base font-semibold rounded-full shadow-xl transition-all duration-300 bg-gradient-to-b from-primary to-accent 
        ${
          item === "Marmitas"
            ? "bg-primary text-secondary"
            : "bg-base-100 text-base-100 hover:bg-primary hover:text-base-100"
        }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Categories;
