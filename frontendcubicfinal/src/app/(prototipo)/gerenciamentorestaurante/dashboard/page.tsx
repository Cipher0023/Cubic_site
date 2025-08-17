"use client";

import { useState } from "react";

export default function RestaurantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen">
      <SidebarNav isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="space-y-8 px-6 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-foreground text-3xl">
            Dashboard do Restaurante
          </h1>
          <p className="text-muted-foreground">
            Visão geral das operações do seu restaurante
          </p>
        </div>

        <StatsCards />

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          <RevenueChart />
          <ReservationsPanel />
        </div>

        <div className="gap-8 grid grid-cols-1 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <OrdersTable />
          </div>
          <div>
            <MenuItems />
          </div>
        </div>
      </main>
    </div>
  );
}
