"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Props = object;

function Add_product({}: Props) {
  const token = Cookies.get("token");
  const [name, setName] = useState("");
  const [added_by, setAdded_by] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [campaign_id, setCampaign_id] = useState("");
  const [call_to_action, setCall_to_action] = useState("");
  const [description, setDescription] = useState("");
  const [main_photo_id, setMain_photo_id] = useState("");
  const [photos_ids, setPhotos_ids] = useState("");
  const [views, setViews] = useState("");
  const [selling_numbers, setSelling_numbers] = useState("");
  const [product_score, setProduct_score] = useState("");
  const [quantity, setQuantity] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const addProduct = async () => {
    try {
      if (!token) {
        console.error("Usuário não autenticado");
        return;
      }
      const response = await fetch("http://localhost:3001/private/regPrd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <--- aqui vai o token
        },
        body: JSON.stringify({
          name,
          added_by,
          category,
          price,
          campaign_id,
          call_to_action,
          description,
          main_photo_id,
          photos_ids,
          views,
          selling_numbers,
          product_score,
          quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Produto adicionado com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
        router.push("/");
      } else {
        setError(data.message || "Erro ao cadastrar item, tente novamente");
        setSuccess("");
      }
    } catch (err) {
      console.error("Erro ao cadastrar item:", err);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-start justify-center w-full p-10 gap-2">
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>name:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>added_by:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={added_by}
            onChange={(e) => setAdded_by(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>category:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>price:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>campaign_id:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={campaign_id}
            onChange={(e) => setCampaign_id(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>call_to_action:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={call_to_action}
            onChange={(e) => setCall_to_action(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>description:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>main_photo_id:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={main_photo_id}
            onChange={(e) => setMain_photo_id(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>photos_ids:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={photos_ids}
            onChange={(e) => setPhotos_ids(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>views:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>selling_numbers:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={selling_numbers}
            onChange={(e) => setSelling_numbers(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>product_score:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={product_score}
            onChange={(e) => setProduct_score(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-center text-2xl w-full">
          <p>quantity:</p>
          <input
            type="text"
            placeholder="Type here"
            className="input w-full"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
      {error && <p className="bg-base-100 text-red-500 mt-2">{error}</p>}
      {success && <p className="bg-base-100 text-green-500 mt-2">{success}</p>}
      <button className="btn btn-primary mt-4" onClick={addProduct}>
        Salvar
      </button>
    </div>
  );
}

export default Add_product;
