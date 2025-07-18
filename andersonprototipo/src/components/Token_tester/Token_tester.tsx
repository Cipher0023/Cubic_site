import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Token_tester() {
  const [token, setToken] = useState<string | undefined>("");

  useEffect(() => {
    const savedToken = Cookies.get("token");
    setToken(savedToken);
  }, []);

  return (
    <div className="p-4 bg-base-200 rounded">
      <h2 className="text-lg font-bold mb-2">Token armazenado:</h2>
      <p className="break-all text-sm bg-white p-2 rounded border">
        {token || "Nenhum token encontrado"}
      </p>
    </div>
  );
}
