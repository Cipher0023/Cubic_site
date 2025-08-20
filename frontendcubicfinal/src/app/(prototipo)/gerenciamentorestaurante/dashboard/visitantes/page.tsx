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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Users,
  Clock,
  MousePointer,
  Smartphone,
  Monitor,
  Tablet,
  ArrowRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

export default function VisitorsPage() {
  const [timeFilter, setTimeFilter] = useState("today");

  // Mock data para demonstração
  const visitorStats = {
    totalVisitors: 1247,
    activeNow: 23,
    avgSessionTime: "4m 32s",
    bounceRate: "32%",
    pageViews: 3891,
    uniqueVisitors: 892,
  };

  const deviceStats = [
    { device: "Desktop", count: 687, percentage: 55, icon: Monitor },
    { device: "Mobile", count: 423, percentage: 34, icon: Smartphone },
    { device: "Tablet", count: 137, percentage: 11, icon: Tablet },
  ];

  const pageViews = [
    { page: "/home", views: 1247, time: "3m 45s", bounce: "28%", trend: "up" },
    { page: "/search", views: 892, time: "5m 12s", bounce: "22%", trend: "up" },
    {
      page: "/products",
      views: 634,
      time: "6m 33s",
      bounce: "18%",
      trend: "down",
    },
    {
      page: "/profile",
      views: 423,
      time: "2m 18s",
      bounce: "45%",
      trend: "up",
    },
    {
      page: "/orders",
      views: 312,
      time: "4m 07s",
      bounce: "35%",
      trend: "down",
    },
    { page: "/about", views: 198, time: "1m 52s", bounce: "62%", trend: "up" },
  ];

  const userFlow = [
    { from: "Home", to: "Search", users: 423, percentage: 34 },
    { from: "Search", to: "Products", users: 312, percentage: 35 },
    { from: "Products", to: "Profile", users: 198, percentage: 31 },
    { from: "Home", to: "About", users: 156, percentage: 13 },
    { from: "Profile", to: "Orders", users: 134, percentage: 68 },
    { from: "Search", to: "Home", users: 89, percentage: 10 },
  ];

  const realtimeActivity = [
    {
      user: "Usuário #1247",
      page: "/search",
      action: "Visualizando produtos",
      time: "2s atrás",
    },
    {
      user: "Usuário #1246",
      page: "/profile",
      action: "Editando perfil",
      time: "15s atrás",
    },
    {
      user: "Usuário #1245",
      page: "/orders",
      action: "Verificando pedidos",
      time: "32s atrás",
    },
    {
      user: "Usuário #1244",
      page: "/home",
      action: "Navegando carousel",
      time: "45s atrás",
    },
    {
      user: "Usuário #1243",
      page: "/about",
      action: "Lendo sobre empresa",
      time: "1m atrás",
    },
  ];

  return (
    <div className="bg-gray-50 p-4 pb-20 min-h-screen">
      <div className="space-y-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-bold text-gray-900 text-3xl">
              Analytics de Visitantes
            </h1>
            <p className="text-gray-600">
              Acompanhe o comportamento dos usuários no seu site
            </p>
          </div>
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Última semana</SelectItem>
              <SelectItem value="month">Último mês</SelectItem>
              <SelectItem value="year">Último ano</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats Overview */}
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600 text-sm">Visitantes</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.totalVisitors.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green-600" />
                <span className="text-gray-600 text-sm">Online Agora</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.activeNow}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="text-gray-600 text-sm">Tempo Médio</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.avgSessionTime}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <MousePointer className="w-4 h-4 text-orange-600" />
                <span className="text-gray-600 text-sm">Taxa Rejeição</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.bounceRate}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-red-600" />
                <span className="text-gray-600 text-sm">Visualizações</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.pageViews.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-600" />
                <span className="text-gray-600 text-sm">Únicos</span>
              </div>
              <p className="font-bold text-gray-900 text-2xl">
                {visitorStats.uniqueVisitors.toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="gap-6 grid lg:grid-cols-3">
          {/* Device Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Dispositivos</CardTitle>
              <CardDescription>
                Distribuição por tipo de dispositivo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {deviceStats.map((device) => {
                const Icon = device.icon;
                return (
                  <div
                    key={device.device}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-gray-600" />
                      <span className="font-medium">{device.device}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">
                        {device.count}
                      </span>
                      <Badge variant="secondary">{device.percentage}%</Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Real-time Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Atividade em Tempo Real</CardTitle>
              <CardDescription>
                O que os usuários estão fazendo agora
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {realtimeActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse"></div>
                      <div>
                        <p className="font-medium text-sm">{activity.user}</p>
                        <p className="text-gray-600 text-xs">
                          {activity.action} em {activity.page}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Page Views */}
        <Card>
          <CardHeader>
            <CardTitle>Páginas Mais Visitadas</CardTitle>
            <CardDescription>Performance das páginas do site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pageViews.map((page, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
                      {page.page}
                    </span>
                    <div className="flex items-center gap-1">
                      {page.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium">
                        {page.views.toLocaleString()}
                      </p>
                      <p className="text-gray-500">Visualizações</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{page.time}</p>
                      <p className="text-gray-500">Tempo Médio</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{page.bounce}</p>
                      <p className="text-gray-500">Rejeição</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Flow */}
        <Card>
          <CardHeader>
            <CardTitle>Fluxo de Navegação</CardTitle>
            <CardDescription>
              Como os usuários navegam pelo site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userFlow.map((flow, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{flow.from}</Badge>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <Badge variant="outline">{flow.to}</Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-sm">
                      {flow.users} usuários
                    </span>
                    <Badge className="bg-blue-100 text-blue-800">
                      {flow.percentage}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
