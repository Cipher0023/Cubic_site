"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data para produtos
const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 8999.99,
    originalPrice: 9999.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Eletrônicos",
    brand: "Apple",
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    tags: ["smartphone", "apple", "iphone", "celular"],
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 7499.99,
    originalPrice: 8299.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Computadores",
    brand: "Apple",
    rating: 4.9,
    reviews: 890,
    inStock: true,
    tags: ["laptop", "macbook", "apple", "computador"],
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 1899.99,
    originalPrice: 2199.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Áudio",
    brand: "Apple",
    rating: 4.7,
    reviews: 2100,
    inStock: true,
    tags: ["fone", "airpods", "apple", "bluetooth"],
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    price: 7999.99,
    originalPrice: 8999.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Eletrônicos",
    brand: "Samsung",
    rating: 4.6,
    reviews: 980,
    inStock: false,
    tags: ["smartphone", "samsung", "galaxy", "celular"],
  },
  {
    id: 5,
    name: "Dell XPS 13",
    price: 5999.99,
    originalPrice: 6799.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Computadores",
    brand: "Dell",
    rating: 4.5,
    reviews: 650,
    inStock: true,
    tags: ["laptop", "dell", "xps", "computador"],
  },
  {
    id: 6,
    name: "Sony WH-1000XM5",
    price: 1299.99,
    originalPrice: 1599.99,
    image: "/placeholder.svg?height=200&width=200",
    category: "Áudio",
    brand: "Sony",
    rating: 4.8,
    reviews: 1450,
    inStock: true,
    tags: ["fone", "sony", "bluetooth", "cancelamento ruído"],
  },
];

const categories = ["Todos", "Eletrônicos", "Computadores", "Áudio"];
const brands = ["Todas", "Apple", "Samsung", "Dell", "Sony"];
const sortOptions = [
  { value: "relevance", label: "Mais Relevante" },
  { value: "price-low", label: "Menor Preço" },
  { value: "price-high", label: "Maior Preço" },
  { value: "rating", label: "Melhor Avaliado" },
  { value: "newest", label: "Mais Recente" },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedBrand, setSelectedBrand] = useState("Todas");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      // Filtro por termo de busca
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // Filtro por categoria
      const matchesCategory =
        selectedCategory === "Todos" || product.category === selectedCategory;

      // Filtro por marca
      const matchesBrand =
        selectedBrand === "Todas" || product.brand === selectedBrand;

      // Filtro por preço
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      // Filtro por estoque
      const matchesStock = !inStockOnly || product.inStock;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesStock
      );
    });

    // Ordenação
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [
    searchTerm,
    selectedCategory,
    selectedBrand,
    priceRange,
    sortBy,
    inStockOnly,
  ]);

  return (
    <div className="bg-gray-50 pt-20 pb-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header de Busca */}
        <div className="bg-white shadow-sm mb-6 p-6 rounded-lg">
          <div className="flex lg:flex-row flex-col gap-4">
            {/* Campo de Busca Principal */}
            <div className="relative flex-1">
              <Search className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Botão de Filtros */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 h-12"
            >
              <SlidersHorizontal className="mr-2 w-5 h-5" />
              Filtros
            </Button>

            {/* Ordenação */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filtros Expandidos */}
          {showFilters && (
            <div className="mt-6 pt-6 border-gray-200 border-t">
              <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {/* Categoria */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Categoria
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Marca */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Marca
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Faixa de Preço */}
                <div>
                  <label className="block mb-2 font-medium text-gray-700 text-sm">
                    Preço: R$ {priceRange[0]} - R$ {priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={0}
                    step={100}
                    className="mt-2"
                  />
                </div>

                {/* Apenas em Estoque */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="inStock" checked={inStockOnly} />
                  <label
                    htmlFor="inStock"
                    className="font-medium text-gray-700 text-sm"
                  >
                    Apenas em estoque
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredProducts.length} produto
            {filteredProducts.length !== 1 ? "s" : ""} encontrado
            {filteredProducts.length !== 1 ? "s" : ""}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Seção de Categorias */}
        <div className="mb-6">
          <h3 className="mb-3 font-semibold text-gray-800 text-lg">
            Categorias
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
                {category !== "Todos" && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {
                      allProducts.filter(
                        (p) => category === "Todos" || p.category === category
                      ).length
                    }
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg overflow-hidden transition-shadow"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <Badge
                      variant="secondary"
                      className="bg-red-500 text-white"
                    >
                      Fora de Estoque
                    </Badge>
                  </div>
                )}
                {product.originalPrice > product.price && (
                  <Badge className="top-2 left-2 absolute bg-red-500">
                    -
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>

                <h3 className="mb-2 font-semibold text-lg line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
                  <span className="font-medium text-sm">{product.rating}</span>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-green-600 text-2xl">
                    R$ {product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-500 text-sm line-through">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  size="sm"
                >
                  <ShoppingCart className="mr-2 w-4 h-4" />
                  {product.inStock ? "Comprar" : "Indisponível"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <Search className="mx-auto mb-4 w-16 h-16 text-gray-300" />
            <h3 className="mb-2 font-semibold text-gray-600 text-xl">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500">
              Tente ajustar os filtros ou usar termos diferentes na busca.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
