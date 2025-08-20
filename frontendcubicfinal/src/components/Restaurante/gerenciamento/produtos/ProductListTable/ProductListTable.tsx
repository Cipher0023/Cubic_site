import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Edit, Trash2, AlertCircle, Package, Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  sales: number;
  views: number;
  image: string;
}

interface ProductListTableProps {
  products: Product[];
  isAddProductOpen: boolean;
  setIsAddProductOpen: (open: boolean) => void;
}

export function ProductListTable({
  products,
  isAddProductOpen,
  setIsAddProductOpen,
}: ProductListTableProps) {
  const getStatusBadge = (status: string, stock: number) => {
    switch (status) {
      case "active":
        return stock > 10 ? (
          <Badge className="bg-green-100 text-green-800">Ativo</Badge>
        ) : (
          <Badge className="bg-yellow-100 text-yellow-800">Estoque Baixo</Badge>
        );
      case "out_of_stock":
        return <Badge className="bg-red-100 text-red-800">Sem Estoque</Badge>;
      case "low_stock":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Estoque Baixo</Badge>
        );
      case "paused":
        return <Badge className="bg-gray-100 text-gray-800">Pausado</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Produtos ({products.length})</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-200">
          {products.map((product) => (
            <div
              key={product.id}
              className="hover:bg-gray-50 p-6 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-1 items-center space-x-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="rounded-lg w-16 h-16 object-cover"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-lg truncate">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="font-bold text-green-600 text-lg">
                        R${" "}
                        {product.price.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </span>
                      {getStatusBadge(product.status, product.stock)}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center space-x-8 text-gray-500 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {product.stock}
                    </p>
                    <p>Estoque</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {product.sales}
                    </p>
                    <p>Vendas</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">
                      {product.views}
                    </p>
                    <p>Visualizações</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:hidden flex justify-between mt-4 text-gray-500 text-sm">
                <span>Estoque: {product.stock}</span>
                <span>Vendas: {product.sales}</span>
                <span>Views: {product.views}</span>
              </div>

              {product.stock <= 5 && product.status !== "out_of_stock" && (
                <div className="flex items-center mt-3 text-yellow-600 text-sm">
                  <AlertCircle className="mr-1 w-4 h-4" />
                  Estoque baixo - considere repor
                </div>
              )}
            </div>
          ))}

          {products.length === 0 && (
            <div className="p-12 text-center">
              <Package className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Nenhum produto encontrado
              </h3>
              <p className="mb-4 text-gray-500">
                Tente ajustar os filtros ou adicionar novos produtos
              </p>
              <Dialog
                open={isAddProductOpen}
                onOpenChange={setIsAddProductOpen}
              >
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 w-4 h-4" />
                    Adicionar Primeiro Produto
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
