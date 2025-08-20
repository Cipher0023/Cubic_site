import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Settings,
  LogIn,
} from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    address: "Rua das Flores, 123 - São Paulo, SP",
    memberSince: "Janeiro 2023",
    avatar: "/placeholder.svg?height=100&width=100",
    status: "Premium",
  };

  return (
    <div className="bg-gray-50 p-4 pt-20 pb-20 min-h-screen">
      <div className="space-y-6 mx-auto max-w-2xl">
        {/* Header do Perfil */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                />
                <AvatarFallback className="text-2xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <div className="flex justify-center items-center mt-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {user.status}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Informações Pessoais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-gray-500 text-sm">Telefone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-gray-500 text-sm">Endereço</p>
                <p className="font-medium">{user.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-gray-500 text-sm">Membro desde</p>
                <p className="font-medium">{user.memberSince}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configurações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Configurações da Conta
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="justify-start bg-transparent w-full"
            >
              Editar Perfil
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent w-full"
            >
              Alterar Senha
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent w-full"
            >
              Preferências de Notificação
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent w-full"
            >
              Histórico de Pedidos
            </Button>
          </CardContent>
        </Card>

        {/* Botão de Login */}
        <div className="pt-6 pb-8">
          <Link href="/restaurante/loginInterno">
            <Button
              className="bg-blue-600 hover:bg-blue-700 py-3 w-full text-white"
              size="lg"
            >
              <LogIn className="mr-2 w-5 h-5" />
              Área de Login de Usuários
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
