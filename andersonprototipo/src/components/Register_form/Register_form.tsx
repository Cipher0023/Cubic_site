"use client";
import React from "react";
import { useState } from "react";

type Props = object;

function Register_form({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/public/logDev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess("Login feito com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
      } else {
        setError(data.message || "Erro ao fazer login");
        setSuccess("");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="fieldset-legend text-4xl">Login</h1>
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4 text-secondary font-bold">
        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Senha</label>
        <input
          type="password"
          className="input"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
}

export default Register_form;
