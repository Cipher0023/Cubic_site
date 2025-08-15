import { create } from "zustand";

// Representa uma categoria de produto no frontend
export interface Prc {
  product_category_id: string;
  name: string;
  description: string;
}

// Definição do estado e ações do store de categorias
interface PrcState {
  list: Prc[]; // cache de categorias
  loading: boolean; // indicador de fetch em andamento
  error: string | null; // mensagem de erro, se houver
  fetchCategories: () => Promise<void>; // ação para carregar categorias
  clear: () => void; // limpa o cache
}

const usePrcStore = create<PrcState>((set, get) => ({
  list: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    const { list, loading } = get();
    // Não refaz o fetch se já houver cache ou se estiver carregando
    if (list.length > 0 || loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstPrc", {
        method: "GET",
      });
      if (!res.ok) throw new Error(`Erro ${res.status}`);
      const data: Prc[] = await res.json();
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

export default usePrcStore;
