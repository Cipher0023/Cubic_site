"use client";

import { useEffect, useMemo, useState } from "react";

import { Overview } from "@/components/Restaurante/gerenciamento/produtos/Overview/Overview";
import { ProductFilters } from "@/components/Restaurante/gerenciamento/produtos/ProductFilters/ProductFilters";
import { ProductListTable } from "@/components/Restaurante/gerenciamento/produtos/ProductListTable/ProductListTable";
import { AddProduct } from "@/components/Restaurante/gerenciamento/produtos/AddProduct/AddProduct";
import { ManageCategories } from "@/components/Restaurante/gerenciamento/produtos/ManageCategories/ManageCategories";
import { usePrdStore } from "@/store/usePrdStore";
import usePhtStore from "@/store/usePhtStore";
import usePrcStore from "@/store/usePrcStore";

export default function MyProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isManageCategoriesOpen, setIsManageCategoriesOpen] = useState(false);

  const { products, loading, error, fetchProducts, resolveCategoryNames } =
    usePrdStore();
  const fetchCategories = usePrcStore((s) => s.fetchCategories);
  const prcList = usePrcStore((s) => s.list);
  const fetchPhotos = usePhtStore((s) => s.fetchPhotos);
  const phtList = usePhtStore((s) => s.list);
  const categories = useMemo(
    () =>
      prcList.map((c, idx) => ({
        id: idx + 1,
        name: c.name,
        description: c.description,
        color: "#3B82F6",
      })),
    [prcList]
  );

  useEffect(() => {
    // Carrega categorias, produtos e fotos na primeira renderização
    fetchCategories();
    fetchProducts();
    fetchPhotos();
  }, [fetchCategories, fetchProducts, fetchPhotos]);

  useEffect(() => {
    // Sempre que as categorias forem atualizadas, re-hidrata os nomes das categorias dos produtos
    if (prcList.length > 0) {
      resolveCategoryNames();
    }
  }, [prcList, resolveCategoryNames]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || product.status === statusFilter;
      const matchesCategory =
        categoryFilter === "all" || product.category === categoryFilter;
      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [products, searchTerm, statusFilter, categoryFilter]);

  const totalProducts = filteredProducts.length;
  const activeProducts = filteredProducts.filter(
    (p) => p.status === "active"
  ).length;
  const totalSales = filteredProducts.reduce((sum, p) => sum + p.sales, 0);
  const totalRevenue = filteredProducts.reduce(
    (sum, p) => sum + p.sales * p.price,
    0
  );

  return (
    <div className="bg-gray-50 pt-20 pb-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-gray-900 text-3xl">
            Meus Produtos
          </h1>
          <p className="text-gray-600">
            Gerencie seus produtos e acompanhe o desempenho das vendas
          </p>
        </div>

        <Overview
          totalProducts={totalProducts}
          activeProducts={activeProducts}
          totalSales={totalSales}
          totalRevenue={totalRevenue}
        />

        <div className="m-6">
          <div className="flex justify-end gap-2 m-4">
            <ManageCategories
              isOpen={isManageCategoriesOpen}
              setIsOpen={setIsManageCategoriesOpen}
              categories={categories}
              setCategories={(c) => {}}
            />
            <AddProduct
              isOpen={isAddProductOpen}
              setIsOpen={setIsAddProductOpen}
            />
          </div>

          <ProductFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            categories={categories}
          />
        </div>

        {error && (
          <div className="bg-red-50 mb-4 p-3 rounded text-red-700 text-sm">
            {error}
          </div>
        )}

        <ProductListTable
          products={filteredProducts}
          isAddProductOpen={isAddProductOpen}
          setIsAddProductOpen={setIsAddProductOpen}
        />

        {loading && (
          <div className="mt-4 text-gray-500 text-sm">
            Carregando produtos...
          </div>
        )}
      </div>
    </div>
  );
}
