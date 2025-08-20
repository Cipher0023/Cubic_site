"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Download,
  Eye,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
} from "lucide-react";

export default function SalesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  // Mock data para vendas
  const salesData = [
    {
      id: "VND-001",
      date: "2024-01-15",
      customer: "João Silva",
      email: "joao@email.com",
      products: [
        { name: "iPhone 15 Pro", quantity: 1, price: 8999.0 },
        { name: "AirPods Pro", quantity: 1, price: 2499.0 },
      ],
      total: 11498.0,
      status: "completed",
      paymentMethod: "Cartão de Crédito",
      commission: 574.9,
    },
    {
      id: "VND-002",
      date: "2024-01-14",
      customer: "Maria Santos",
      email: "maria@email.com",
      products: [{ name: "MacBook Air M2", quantity: 1, price: 12999.0 }],
      total: 12999.0,
      status: "completed",
      paymentMethod: "PIX",
      commission: 649.95,
    },
    {
      id: "VND-003",
      date: "2024-01-13",
      customer: "Pedro Costa",
      email: "pedro@email.com",
      products: [
        { name: "iPad Pro", quantity: 1, price: 7999.0 },
        { name: "Apple Pencil", quantity: 1, price: 899.0 },
      ],
      total: 8898.0,
      status: "pending",
      paymentMethod: "Boleto",
      commission: 444.9,
    },
    {
      id: "VND-004",
      date: "2024-01-12",
      customer: "Ana Oliveira",
      email: "ana@email.com",
      products: [{ name: "Apple Watch Series 9", quantity: 2, price: 4299.0 }],
      total: 8598.0,
      status: "completed",
      paymentMethod: "Cartão de Débito",
      commission: 429.9,
    },
    {
      id: "VND-005",
      date: "2024-01-11",
      customer: "Carlos Ferreira",
      email: "carlos@email.com",
      products: [{ name: 'iMac 24"', quantity: 1, price: 15999.0 }],
      total: 15999.0,
      status: "cancelled",
      paymentMethod: "Cartão de Crédito",
      commission: 0,
    },
  ];

  const filteredSales = salesData.filter((sale) => {
    const matchesSearch =
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || sale.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalSales = salesData
    .filter((s) => s.status === "completed")
    .reduce((sum, sale) => sum + sale.total, 0);
  const totalCommission = salesData
    .filter((s) => s.status === "completed")
    .reduce((sum, sale) => sum + sale.commission, 0);
  const completedSales = salesData.filter(
    (s) => s.status === "completed"
  ).length;
  const totalCustomers = new Set(salesData.map((s) => s.customer)).size;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluída";
      case "pending":
        return "Pendente";
      case "cancelled":
        return "Cancelada";
      default:
        return status;
    }
  };

  return (
    <div className="bg-gray-50 pt-20 pb-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-gray-900 text-3xl">Vendas</h1>
          <p className="text-gray-600">
            Acompanhe todas as suas vendas e comissões
          </p>
        </div>

        {/* Estatísticas */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-600 text-sm">
                    Total em Vendas
                  </p>
                  <p className="font-bold text-gray-900 text-2xl">
                    R${" "}
                    {totalSales.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-600 text-sm">Comissões</p>
                  <p className="font-bold text-gray-900 text-2xl">
                    R${" "}
                    {totalCommission.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-600 text-sm">
                    Vendas Concluídas
                  </p>
                  <p className="font-bold text-gray-900 text-2xl">
                    {completedSales}
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-600 text-sm">
                    Clientes Únicos
                  </p>
                  <p className="font-bold text-gray-900 text-2xl">
                    {totalCustomers}
                  </p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex sm:flex-row flex-col gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="top-1/2 left-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2 transform" />
                  <Input
                    placeholder="Buscar por cliente, ID da venda ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="completed">Concluída</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="cancelled">Cancelada</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                <Download className="w-4 h-4" />
                Exportar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Vendas */}
        <div className="space-y-4">
          {filteredSales.map((sale) => (
            <Card key={sale.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{sale.id}</h3>
                      <Badge className={getStatusColor(sale.status)}>
                        {getStatusText(sale.status)}
                      </Badge>
                    </div>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 text-gray-600 text-sm">
                      <div>
                        <p>
                          <span className="font-medium">Cliente:</span>{" "}
                          {sale.customer}
                        </p>
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          {sale.email}
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Data:</span>{" "}
                          {new Date(sale.date).toLocaleDateString("pt-BR")}
                        </p>
                        <p>
                          <span className="font-medium">Pagamento:</span>{" "}
                          {sale.paymentMethod}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="mb-1 font-medium text-gray-700 text-sm">
                        Produtos:
                      </p>
                      <div className="space-y-1">
                        {sale.products.map((product, index) => (
                          <p key={index} className="text-gray-600 text-sm">
                            {product.quantity}x {product.name} - R${" "}
                            {product.price.toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col lg:flex-col items-start sm:items-center lg:items-end gap-2 lg:text-right">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        R${" "}
                        {sale.total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                      {sale.status === "completed" && (
                        <p className="font-medium text-green-600 text-sm">
                          Comissão: R${" "}
                          {sale.commission.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Eye className="w-4 h-4" />
                      Detalhes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSales.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <ShoppingCart className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 font-medium text-gray-900 text-lg">
                Nenhuma venda encontrada
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros de busca.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
