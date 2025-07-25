import React, { useState } from "react";
import useUserStore from "../../../../../../store/useUserStore";

type Props = {
  onBack: () => void;
};

export default function AddCategoryForm({ onBack }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const added_by = useUserStore((state) => state.user?.id || "");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addCategory = async () => {
    try {
      const response = await fetch("https://localhost:3002/private/regPrc", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          added_by,
          description,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Categoria adicionada com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
      } else {
        setError(data.message || "Erro ao cadastrar item, tente novamente");
        setSuccess("");
      }
    } catch (err) {
      console.error("Erro ao cadastrar item:", err);
      setError("Erro ao cadastrar item, tente novamente");
      setSuccess("");
    }
  };

  return (
    <>
      <input
        className="mb-2 border rounded p-2 w-64"
        type="text"
        placeholder="Nome da categoria"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="mb-4 border rounded p-2 w-64"
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {error && <p className="bg-base-100 text-red-500 mt-2">{error}</p>}
      {success && <p className="bg-base-100 text-green-500 mt-2">{success}</p>}
      <div className="flex gap-2 mb-4">
        <button className="btn btn-primary" onClick={addCategory}>
          Enviar
        </button>
        <button className="btn btn-secondary" onClick={onBack}>
          Voltar
        </button>
      </div>
    </>
  );
}
