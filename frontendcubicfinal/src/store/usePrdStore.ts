"use client";

import { create } from "zustand";
import usePrcStore from "@/store/usePrcStore";
import usePhtStore from "@/store/usePhtStore";

export interface Product {
  id: string;
  name: string;
  // ID da categoria conforme backend
  categoryId: string;
  // Nome da categoria resolvido via usePrcStore
  category: string;
  price: number;
  stock: number;
  status: string; // "active" | "out_of_stock" | "low_stock" | "paused"
  sales: number;
  views: number;
  image: string;
  // Fotos
  main_photo_id?: string;
  photos_ids?: string[];
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  setProducts: (products: Product[]) => void;
  // Re-hidrata os nomes das categorias com base no store de categorias
  resolveCategoryNames: () => void;
}

// Tipos do payload retornado pela API de produtos
export interface ApiProduct {
  product_id?: string;
  id?: string;
  _id?: string;
  name?: string;
  prd_nome?: string;
  nome?: string;
  category?: string;
  category_id?: string;
  prd_categoria?: string;
  category_name?: string;
  price?: number | string;
  preco?: number | string;
  prd_preco?: number | string;
  quantity?: number | string;
  stock?: number | string;
  estoque?: number | string;
  prd_estoque?: number | string;
  status?: string;
  selling_numbers?: number | string;
  sales?: number | string;
  vendas?: number | string;
  views?: number | string;
  image?: string;
  imagem?: string;
  main_photo_id?: string;
  photos_ids?: string[] | string;
}

// Normalizador do formato de resposta da API
function extractList(input: unknown): ApiProduct[] {
  if (Array.isArray(input)) return input as ApiProduct[];
  if (input && typeof input === "object") {
    const maybe = (input as { data?: unknown }).data;
    if (Array.isArray(maybe)) return maybe as ApiProduct[];
  }
  return [];
}

// Função de mapeamento para adaptar o retorno da API ao tipo Product da UI
function mapApiProduct(item: ApiProduct): Product {
  // ID do produto (string, ex: ObjectId)
  const id =
    item?.product_id?.toString?.() ??
    item?.id?.toString?.() ??
    item?._id?.toString?.() ??
    "unknown";

  // Quantidade/estoque
  const quantityRaw =
    item?.quantity ?? item?.stock ?? item?.estoque ?? item?.prd_estoque ?? 0;
  const stock = Number(quantityRaw);

  // Status inferido pelo estoque (caso a API não forneça)
  const statusInferido =
    stock <= 0 ? "out_of_stock" : stock <= 5 ? "low_stock" : "active";

  // Categoria: pega ID do backend e resolve o nome no store de categorias
  const categoryId =
    item?.category?.toString?.() ??
    item?.category_id?.toString?.() ??
    item?.prd_categoria?.toString?.() ??
    "";
  const prcList = usePrcStore.getState().list;
  const categoryName =
    prcList.find((c) => c.product_category_id === categoryId)?.name ??
    item?.category_name ??
    (categoryId || "Sem categoria");

  // Fotos: main_photo_id e photos_ids
  const mainPhotoId = item?.main_photo_id?.toString?.();
  const rawPhotosIds = (item as any)?.photos_ids;
  const photos_ids: string[] = Array.isArray(rawPhotosIds)
    ? rawPhotosIds.map((v: unknown) => (v as any)?.toString?.()).filter(Boolean)
    : typeof rawPhotosIds === "string"
    ? rawPhotosIds.split(",").map((s: string) => s.trim()).filter(Boolean)
    : [];

  // Resolve imagem a partir da main_photo_id se disponível no store de fotos
  const phtList = usePhtStore.getState().list;
  const mainPhoto = mainPhotoId
    ? phtList.find((p) => p.photo_id?.toString?.() === mainPhotoId)
    : undefined;
  const image =
    mainPhoto?.source ?? item?.image ?? item?.imagem ?? "/placeholder.svg";

  return {
    id,
    name: item?.name ?? item?.prd_nome ?? item?.nome ?? "Sem nome",
    categoryId,
    category: categoryName,
    price: Number(item?.price ?? item?.preco ?? item?.prd_preco ?? 0),
    stock,
    status: item?.status ?? statusInferido,
    sales: Number(item?.selling_numbers ?? item?.sales ?? item?.vendas ?? 0),
    views: Number(item?.views ?? 0),
    image,
    main_photo_id: mainPhotoId,
    photos_ids,
  };
}

export const usePrdStore = create<ProductsState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products) => set({ products }),
  resolveCategoryNames: () => {
    const prc = usePrcStore.getState().list;
    if (!prc || prc.length === 0) return;
    const updated = get().products.map((p) => {
      const match = prc.find((c) => c.product_category_id === p.categoryId);
      return match ? { ...p, category: match.name } : p;
    });
    set({ products: updated });
  },
  fetchProducts: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const res = await fetch("https://localhost:3002/public/lstPrd", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Falha ao buscar produtos (HTTP ${res.status})`);
      }

      const data = await res.json();
      const list: ApiProduct[] = extractList(data);

      const products = list.map(mapApiProduct);
      set({ products, loading: false });
      // Caso as categorias já estejam carregadas, garante nomes atualizados
      get().resolveCategoryNames();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Erro ao buscar produtos:", err);
      set({ error: msg || "Erro ao buscar produtos", loading: false });
    }
  },
}));
