import React from "react";

type Props = object;

export default function page({}: Props) {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold text-center m-4">
        Adicionar Produto v0
      </h1>
      {/* name of each tab group should be unique */}
      <div className="flex flex-col items-center justify-center w-full p-10 gap-2">
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>name:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>added_by:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>category:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>price:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>campaign_id:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>call_to_action:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>description:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>main_photo_id:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>photos_id: apenas string!</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>views:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>selling_numbers:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>product_score:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl">
          <p>quantity:</p>
          <input type="text" placeholder="Type here" className="input" />
        </div>
      </div>
      <button className="btn btn-primary mt-4">Salvar</button>
    </div>
  );
}
