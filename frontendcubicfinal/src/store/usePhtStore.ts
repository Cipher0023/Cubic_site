import { create } from "zustand";

// Representa uma categoria de produto no frontend
export interface Pht {
  photo_id: string;
  source: string;
  added_by: string;
  description: string;
}

// Definição do estado e ações do store de categorias
interface PhtState {
  list: Pht[]; // cache de categorias
  loading: boolean; // indicador de fetch em andamento
  error: string | null; // mensagem de erro, se houver
  fetchPhotos: () => Promise<void>; // ação para carregar categorias
  clear: () => void; // limpa o cache
}

const usePhtStore = create<PhtState>((set, get) => ({
  list: [],
  loading: false,
  error: null,

  fetchPhotos: async () => {
    const { list, loading } = get();
    // Não refaz o fetch se já houver cache ou se estiver carregando
    if (list.length > 0 || loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstPht", {
        method: "GET",
      });
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const data: Pht[] = await res.json();
      set({ list: data });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      set({ error: msg || "Erro ao carregar categorias" });
    } finally {
      set({ loading: false });
    }
  },

  clear: () => set({ list: [], error: null }),
}));

export default usePhtStore;
