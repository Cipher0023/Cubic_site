import { create } from "zustand";

// Representação de uma campanha no frontend (todos os campos retornados pela API)
export interface Cpg {
  campaign_id: string;
  added_by: string;
  name: string;
  start_date: string;    // ISO date string
  end_date: string;      // ISO date string
  action: string;
  description: string;
  created_at: string;    // ISO date string
  updated_at: string;    // ISO date string
}

// Estado e ações do store de campanhas
interface CpgState {
  list: Cpg[];                        // cache em memória
  loading: boolean;                   // indicador de fetch em andamento
  error: string | null;               // mensagem de erro
  fetchCampaigns: () => Promise<void>; // ação para carregar campanhas
  clear: () => void;                  // limpa o cache
}

const useCpgStore = create<CpgState>((set, get) => ({
  list: [],
  loading: false,
  error: null,

  // Busca campanhas do backend apenas se não houver cache ou fetch em andamento
  fetchCampaigns: async () => {
    const { list, loading } = get();
    if (list.length > 0 || loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstCpg", {
        method: "GET",
      });
      if (!res.ok) throw new Error(`Erro ao carregar campanhas: ${res.status}`);
      const data: Cpg[] = await res.json();
      set({ list: data });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      set({ error: message });
    } finally {
      set({ loading: false });
    }
  },

  // Invalida o cache
  clear: () => set({ list: [], error: null }),
}));

export default useCpgStore;
