"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  Eye,
  DollarSign,
  Package,
  Calendar,
} from "lucide-react";

const salesData = [
  { month: "Jan", vendas: 45000, visitas: 12000 },
  { month: "Fev", vendas: 52000, visitas: 15000 },
  { month: "Mar", vendas: 48000, visitas: 13500 },
  { month: "Abr", vendas: 61000, visitas: 18000 },
  { month: "Mai", vendas: 55000, visitas: 16500 },
  { month: "Jun", vendas: 67000, visitas: 20000 },
];

const categoryData = [
  { name: "Eletrônicos", value: 35, color: "#3b82f6" },
  { name: "Roupas", value: 25, color: "#10b981" },
  { name: "Casa", value: 20, color: "#f59e0b" },
  { name: "Esportes", value: 12, color: "#ef4444" },
  { name: "Outros", value: 8, color: "#8b5cf6" },
];

const recentOrders = [
  {
    id: "#12345",
    customer: "João Silva",
    value: 299.9,
    status: "Entregue",
    date: "2024-01-15",
  },
  {
    id: "#12346",
    customer: "Maria Santos",
    value: 159.5,
    status: "Em trânsito",
    date: "2024-01-14",
  },
  {
    id: "#12347",
    customer: "Pedro Costa",
    value: 89.9,
    status: "Processando",
    date: "2024-01-14",
  },
  {
    id: "#12348",
    customer: "Ana Oliveira",
    value: 449.0,
    status: "Entregue",
    date: "2024-01-13",
  },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("6m");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregue":
        return "bg-green-100 text-green-800";
      case "Em trânsito":
        return "bg-blue-100 text-blue-800";
      case "Processando":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 pt-20 pb-20 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
            <div>
              <h1 className="font-bold text-gray-900 text-3xl">Dashboard</h1>
              <p className="mt-1 text-gray-600">
                Visão geral das vendas e performance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 dias</SelectItem>
                  <SelectItem value="30d">30 dias</SelectItem>
                  <SelectItem value="3m">3 meses</SelectItem>
                  <SelectItem value="6m">6 meses</SelectItem>
                  <SelectItem value="1y">1 ano</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 w-4 h-4" />
                Exportar
              </Button>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-gray-600 text-sm">
                Vendas Totais
              </CardTitle>
              <DollarSign className="w-4 h-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-gray-900 text-2xl">R$ 328.000</div>
              <div className="flex items-center mt-1 text-green-600 text-sm">
                <TrendingUp className="mr-1 w-4 h-4" />
                +12.5% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-gray-600 text-sm">
                Visitas
              </CardTitle>
              <Eye className="w-4 h-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-gray-900 text-2xl">95.000</div>
              <div className="flex items-center mt-1 text-green-600 text-sm">
                <TrendingUp className="mr-1 w-4 h-4" />
                +8.2% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-gray-600 text-sm">
                Pedidos
              </CardTitle>
              <ShoppingCart className="w-4 h-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-gray-900 text-2xl">1.247</div>
              <div className="flex items-center mt-1 text-red-600 text-sm">
                <TrendingDown className="mr-1 w-4 h-4" />
                -2.1% vs mês anterior
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-gray-600 text-sm">
                Taxa Conversão
              </CardTitle>
              <Users className="w-4 h-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="font-bold text-gray-900 text-2xl">3.2%</div>
              <div className="flex items-center mt-1 text-green-600 text-sm">
                <TrendingUp className="mr-1 w-4 h-4" />
                +0.3% vs mês anterior
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 mb-8">
          {/* Sales and Visits Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas e Visitas</CardTitle>
              <CardDescription>
                Comparativo mensal de vendas e visitas ao site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "vendas"
                          ? `R$ ${value.toLocaleString()}`
                          : value.toLocaleString(),
                        name === "vendas" ? "Vendas" : "Visitas",
                      ]}
                    />
                    <Bar dataKey="vendas" fill="#3b82f6" radius={4} />
                    <Bar dataKey="visitas" fill="#10b981" radius={4} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Categoria</CardTitle>
              <CardDescription>
                Distribuição percentual das vendas por categoria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name, props) => [
                        `${value}%`,
                        props.payload.name,
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="rounded-full w-3 h-3"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-600 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Pedidos Recentes
            </CardTitle>
            <CardDescription>
              Últimos pedidos realizados na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center hover:bg-gray-50 p-4 border rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center bg-blue-100 rounded-full w-10 h-10">
                      <ShoppingCart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-gray-600 text-sm">{order.customer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-medium text-gray-900">
                        R$ {order.value.toFixed(2)}
                      </p>
                      <p className="text-gray-600 text-sm">{order.date}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline">Ver todos os pedidos</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
