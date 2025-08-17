"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Props = object;

function Register_form({}: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://localhost:3002/public/logDev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        Cookies.set("token", data.token, { expires: 7 });
        setSuccess("Login feito com sucesso!");
        setError("");
        console.log("Dados recebidos:", data);
        router.push("/");
      } else {
        setError(data.message || "Erro ao fazer login");
        setSuccess("");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
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
        <div className="flex flex-col justify-center items-center m-2 gap-2">
          <p className="hover:text-blue-500 hover:underline">
            esqueci minha senha
          </p>
          <p className="hover:text-blue-500 hover:underline">
            não tenho uma conta
          </p>
        </div>
        <button className="btn btn-neutral" onClick={handleLogin}>
          Login
        </button>
      </fieldset>
      {error && <p className="bg-base-100 text-red-500 mt-2">{error}</p>}
      {success && <p className="bg-base-100 text-green-500 mt-2">{success}</p>}
    </div>
  );
}

export default Register_form;
