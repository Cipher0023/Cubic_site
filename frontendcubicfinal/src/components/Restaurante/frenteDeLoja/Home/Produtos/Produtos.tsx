"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "destructive" | "outline";
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy Pro",
    price: 2499.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Mais Vendido",
    badgeVariant: "default",
    category: "Eletrônicos",
  },
  {
    id: 2,
    name: "Notebook Gamer Ultra",
    price: 4299.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Oferta",
    badgeVariant: "destructive",
    category: "Computadores",
  },
  {
    id: 3,
    name: "Fone Bluetooth Premium",
    price: 899.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Novo",
    badgeVariant: "secondary",
    category: "Áudio",
  },
  {
    id: 4,
    name: "Smartwatch Fitness",
    price: 1299.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Promoção",
    badgeVariant: "outline",
    category: "Wearables",
  },
  {
    id: 5,
    name: "Tablet Pro 12 polegadas",
    price: 3199.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Premium",
    badgeVariant: "default",
    category: "Eletrônicos",
  },
  {
    id: 6,
    name: "Câmera Digital 4K",
    price: 2799.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Profissional",
    badgeVariant: "secondary",
    category: "Fotografia",
  },
  {
    id: 7,
    name: "Console de Videogame",
    price: 2999.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Gamer",
    badgeVariant: "destructive",
    category: "Games",
  },
  {
    id: 8,
    name: 'Monitor Ultrawide 34"',
    price: 1899.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "Trabalho",
    badgeVariant: "outline",
    category: "Computadores",
  },
  {
    id: 9,
    name: "Teclado Mecânico RGB",
    price: 599.99,
    image: "/placeholder.svg?height=120&width=120",
    badge: "RGB",
    badgeVariant: "default",
    category: "Acessórios",
  },
];

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="bg-transparent"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Lista de Produtos */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 bg-card hover:shadow-md p-4 border rounded-lg transition-shadow"
          >
            {/* Imagem do Produto */}
            <div className="flex-shrink-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="rounded-md w-24 h-24 object-cover"
              />
            </div>

            {/* Informações do Produto */}
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-semibold text-foreground leading-tight">
                    {product.name}
                  </h3>
                  <Badge
                    variant={product.badgeVariant}
                    className="flex-shrink-0"
                  >
                    {product.badge}
                  </Badge>
                </div>

                <p className="mb-3 font-bold text-primary text-2xl">
                  R${" "}
                  {product.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>

              <Button className="w-full" size="sm">
                Comprar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-muted-foreground text-sm text-center">
        {selectedCategory === "Todos"
          ? `Mostrando todos os ${filteredProducts.length} produtos`
          : `Mostrando ${filteredProducts.length} produtos da categoria "${selectedCategory}"`}
      </div>
    </div>
  );
}
