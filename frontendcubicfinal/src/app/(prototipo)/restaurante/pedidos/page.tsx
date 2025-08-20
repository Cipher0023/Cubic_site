"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Clock, CheckCircle, XCircle, Truck, Eye } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: OrderItem[];
  trackingCode?: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "processing",
    total: 299.99,
    items: [
      {
        id: "1",
        name: "iPhone 15 Pro",
        quantity: 1,
        price: 299.99,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
    trackingCode: "BR123456789",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-10",
    status: "delivered",
    total: 159.98,
    items: [
      {
        id: "2",
        name: "AirPods Pro",
        quantity: 1,
        price: 79.99,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        id: "3",
        name: "Cabo USB-C",
        quantity: 2,
        price: 39.99,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-05",
    status: "delivered",
    total: 89.99,
    items: [
      {
        id: "4",
        name: "Fone Bluetooth",
        quantity: 1,
        price: 89.99,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
  {
    id: "ORD-2024-004",
    date: "2023-12-28",
    status: "cancelled",
    total: 199.99,
    items: [
      {
        id: "5",
        name: "Smartwatch",
        quantity: 1,
        price: 199.99,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
];

const getStatusIcon = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "processing":
      return <Package className="w-4 h-4" />;
    case "shipped":
      return <Truck className="w-4 h-4" />;
    case "delivered":
      return <CheckCircle className="w-4 h-4" />;
    case "cancelled":
      return <XCircle className="w-4 h-4" />;
  }
};

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
      return "bg-purple-100 text-purple-800";
    case "delivered":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
  }
};

const getStatusText = (status: Order["status"]) => {
  switch (status) {
    case "pending":
      return "Pendente";
    case "processing":
      return "Processando";
    case "shipped":
      return "Enviado";
    case "delivered":
      return "Entregue";
    case "cancelled":
      return "Cancelado";
  }
};

export default function OrdersPage() {
  const [orders] = useState<Order[]>(mockOrders);

  // Separar pedido mais recente dos demais
  const mostRecentOrder = orders[0];
  const pastOrders = orders.slice(1);

  return (
    <div className="bg-gray-50 px-4 pt-20 pb-20 min-h-screen">
      <div className="space-y-6 mx-auto max-w-4xl">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-gray-900 text-3xl">Meus Pedidos</h1>
          <p className="text-gray-600">Acompanhe o status dos seus pedidos</p>
        </div>

        {/* Pedido Mais Recente */}
        {mostRecentOrder && (
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 text-xl">
              <Package className="w-5 h-5" />
              Pedido Mais Recente
            </h2>
            <Card className="bg-blue-50/50 border-2 border-blue-200">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">
                    {mostRecentOrder.id}
                  </CardTitle>
                  <Badge
                    className={`${getStatusColor(
                      mostRecentOrder.status
                    )} flex items-center gap-1`}
                  >
                    {getStatusIcon(mostRecentOrder.status)}
                    {getStatusText(mostRecentOrder.status)}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-gray-600 text-sm">
                  <span>
                    Pedido em{" "}
                    {new Date(mostRecentOrder.date).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="font-semibold text-gray-900 text-lg">
                    R$ {mostRecentOrder.total.toFixed(2)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items do pedido */}
                <div className="space-y-3">
                  {mostRecentOrder.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-white p-3 rounded-lg"
                    >
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="rounded-md w-12 h-12 object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Quantidade: {item.quantity}
                        </p>
                      </div>
                      <span className="font-semibold text-gray-900">
                        R$ {item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Ações */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <Eye className="w-4 h-4" />
                    Ver Detalhes
                  </Button>
                  {mostRecentOrder.trackingCode && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Truck className="w-4 h-4" />
                      Rastrear: {mostRecentOrder.trackingCode}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Pedidos Passados */}
        {pastOrders.length > 0 && (
          <div className="space-y-3">
            <h2 className="flex items-center gap-2 font-semibold text-gray-900 text-xl">
              <Clock className="w-5 h-5" />
              Pedidos Anteriores
            </h2>
            <div className="space-y-3">
              {pastOrders.map((order) => (
                <Card
                  key={order.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      {/* Info do pedido */}
                      <div className="flex items-center gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900">
                            {order.id}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {new Date(order.date).toLocaleDateString("pt-BR")} •{" "}
                            {order.items.length}{" "}
                            {order.items.length === 1 ? "item" : "itens"}
                          </p>
                        </div>
                      </div>

                      {/* Status e valor */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            R$ {order.total.toFixed(2)}
                          </p>
                          <Badge
                            className={`${getStatusColor(
                              order.status
                            )} flex items-center gap-1 mt-1`}
                          >
                            {getStatusIcon(order.status)}
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Preview dos items */}
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                      {order.items.slice(0, 3).map((item) => (
                        <img
                          key={item.id}
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="rounded w-8 h-8 object-cover"
                        />
                      ))}
                      {order.items.length > 3 && (
                        <span className="ml-1 text-gray-500 text-xs">
                          +{order.items.length - 3} mais
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Estado vazio */}
        {orders.length === 0 && (
          <Card className="py-12 text-center">
            <CardContent>
              <Package className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 font-semibold text-gray-900 text-lg">
                Nenhum pedido encontrado
              </h3>
              <p className="mb-4 text-gray-600">
                Você ainda não fez nenhum pedido em nossa loja.
              </p>
              <Button>Começar a Comprar</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
