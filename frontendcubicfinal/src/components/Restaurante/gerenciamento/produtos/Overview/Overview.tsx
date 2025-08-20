import { Card, CardContent } from "@/components/ui/card";
import { Package, DollarSign, TrendingUp } from "lucide-react";

interface OverviewProps {
  totalProducts: number;
  activeProducts: number;
  totalSales: number;
  totalRevenue: number;
}

export function Overview({
  totalProducts,
  activeProducts,
  totalSales,
  totalRevenue,
}: OverviewProps) {
  return (
    <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Total de Produtos</p>
              <p className="font-bold text-2xl">{totalProducts}</p>
            </div>
            <Package className="w-8 h-8 text-blue-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Produtos Ativos</p>
              <p className="font-bold text-2xl">{activeProducts}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Total de Vendas</p>
              <p className="font-bold text-2xl">{totalSales}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">Receita Total</p>
              <p className="font-bold text-2xl">
                R$ {(totalRevenue / 1000).toFixed(0)}k
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
