"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Smartphone Pro Max",
    price: 1299,
    originalPrice: 1499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 2847,
    category: "Eletrônicos",
  },
  {
    id: 2,
    name: "Fones Bluetooth Premium",
    price: 299,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 1523,
    category: "Áudio",
  },
  {
    id: 3,
    name: "Smartwatch Fitness",
    price: 399,
    originalPrice: 499,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 892,
    category: "Wearables",
  },
  {
    id: 4,
    name: "Laptop Ultrabook",
    price: 1899,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 634,
    category: "Computadores",
  },
  {
    id: 5,
    name: "Câmera Digital 4K",
    price: 899,
    originalPrice: 1099,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 445,
    category: "Fotografia",
  },
  {
    id: 6,
    name: 'Tablet Pro 12"',
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 756,
    category: "Tablets",
  },
];

export default function Populares() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="mx-auto px-4 py-8 w-full max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="mb-2 font-bold text-foreground text-3xl">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground">
            Descubra nossa seleção especial de produtos
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="bg-transparent rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative rounded-t-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <div className="top-3 left-3 absolute bg-red-500 px-2 py-1 rounded-md font-medium text-white text-sm">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </div>
                    )}
                    <div className="top-3 right-3 absolute bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md text-white text-xs">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-2 font-semibold text-lg line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(product.rating)}
                      <span className="ml-1 text-muted-foreground text-sm">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary text-2xl">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-muted-foreground text-sm line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de posição */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === currentIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
