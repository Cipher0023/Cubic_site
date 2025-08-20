"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import useUserStore from "@/store/useUserStore";
import usePrcStore from "@/store/usePrcStore";
import useCpgStore from "@/store/useCpgStore";

interface AddProductProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function AddProduct({ isOpen, setIsOpen }: AddProductProps) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    categoryId: "",
    campaignId: "",
    price: "",
    stock: "",
    description: "",
    image: "",
    callToAction: "",
    main_photo_id: "",
    photos_ids: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const added_by = useUserStore((s) => s.user?.id || "");
  const prcList = usePrcStore((s) => s.list);
  const fetchCategories = usePrcStore((s) => s.fetchCategories);
  const cpgList = useCpgStore((s) => s.list);
  const fetchCampaigns = useCpgStore((s) => s.fetchCampaigns);

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      fetchCampaigns();
    }
  }, [isOpen, fetchCategories, fetchCampaigns]);

  const formatPrice = (p: string) => {
    if (!p) return "";
    const s = String(p);
    return s.includes(",") ? s : s.replace(".", ",");
  };

  const handleAddProduct = async () => {
    try {
      setError(null);
      setSubmitting(true);

      if (!added_by) {
        setError("Usuário não identificado.");
        setSubmitting(false);
        return;
      }
      if (!newProduct.categoryId) {
        setError("Selecione uma categoria.");
        setSubmitting(false);
        return;
      }

      const payload = {
        name: newProduct.name,
        added_by,
        category: newProduct.categoryId,
        price: formatPrice(newProduct.price),
        campaign_id: newProduct.campaignId || "",
        call_to_action: newProduct.callToAction || "",
        description: newProduct.description || "",
        main_photo_id: newProduct.main_photo_id || "",
        photos_ids: newProduct.photos_ids || "",
        views: "0",
        selling_numbers: "0",
        product_score: "0",
        quantity: String(newProduct.stock || "0"),
      };

      const res = await fetch("https://localhost:3002/private/regPrd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Falha ao cadastrar produto (HTTP ${res.status})`);
      }

      setIsOpen(false);
      setNewProduct({
        name: "",
        categoryId: "",
        campaignId: "",
        price: "",
        stock: "",
        description: "",
        image: "",
        callToAction: "",
        main_photo_id: "",
        photos_ids: "",
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex-1 sm:flex-none">
          <Plus className="mr-2 w-4 h-4" />
          Adicionar Produto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Produto</DialogTitle>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="gap-2 grid">
            <Label htmlFor="name">Nome do Produto</Label>
            <Input
              id="name"
              placeholder="Ex: iPhone 15 Pro Max"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={newProduct.categoryId}
              onValueChange={(value) =>
                setNewProduct({ ...newProduct, categoryId: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {prcList.map((cat) => (
                  <SelectItem key={cat.product_category_id} value={cat.product_category_id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="campaign">Campanha</Label>
            <Select
              value={newProduct.campaignId}
              onValueChange={(value) =>
                setNewProduct({ ...newProduct, campaignId: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma campanha (opcional)" />
              </SelectTrigger>
              <SelectContent>
                {cpgList.map((cpg) => (
                  <SelectItem key={cpg.campaign_id} value={cpg.campaign_id}>
                    {cpg.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="gap-4 grid grid-cols-2">
            <div className="gap-2 grid">
              <Label htmlFor="price">Preço (R$)</Label>
              <Input
                id="price"
                type="text"
                placeholder="Ex: 9,30"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </div>

            <div className="gap-2 grid">
              <Label htmlFor="stock">Quantidade</Label>
              <Input
                id="stock"
                type="number"
                placeholder="0"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, stock: e.target.value })
                }
              />
            </div>
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Descreva seu produto..."
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              rows={3}
            />
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="cta">Call to Action</Label>
            <Input
              id="cta"
              placeholder="Mensagem de chamada (opcional)"
              value={newProduct.callToAction}
              onChange={(e) =>
                setNewProduct({ ...newProduct, callToAction: e.target.value })
              }
            />
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="main_photo_id">Main Photo ID</Label>
            <Input
              id="main_photo_id"
              placeholder="ID da imagem principal"
              value={newProduct.main_photo_id}
              onChange={(e) =>
                setNewProduct({ ...newProduct, main_photo_id: e.target.value })
              }
            />
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="photos_ids">Photos IDs</Label>
            <Input
              id="photos_ids"
              placeholder="IDs adicionais de imagens (separados por vírgula)"
              value={newProduct.photos_ids}
              onChange={(e) =>
                setNewProduct({ ...newProduct, photos_ids: e.target.value })
              }
            />
          </div>

          <div className="gap-2 grid">
            <Label htmlFor="image">URL da Imagem</Label>
            <Input
              id="image"
              placeholder="https://exemplo.com/imagem.jpg"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <div className="flex-1 text-sm text-red-600">{error}</div>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleAddProduct} disabled={submitting}>
            {submitting ? "Enviando..." : "Adicionar Produto"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
