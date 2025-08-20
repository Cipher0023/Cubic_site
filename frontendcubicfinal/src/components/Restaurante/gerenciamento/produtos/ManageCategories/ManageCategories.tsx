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
import { Textarea } from "@/components/ui/textarea";
import { Settings, Plus, Edit, Trash2 } from "lucide-react";
import usePrcStore from "@/store/usePrcStore";
import useUserStore from "@/store/useUserStore";

interface Category {
  id: number;
  name: string;
  description: string;
  color: string;
}

interface ManageCategoriesProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}

export function ManageCategories({
  isOpen,
  setIsOpen,
  categories,
  setCategories,
}: ManageCategoriesProps) {
  const prcList = usePrcStore((s) => s.list);
  const fetchCategories = usePrcStore((s) => s.fetchCategories);
  const added_by = useUserStore((s) => s.user?.id || "");

  useEffect(() => {
    if (isOpen) fetchCategories();
  }, [isOpen, fetchCategories]);

  useEffect(() => {
    if (isOpen && categories.length === 0 && prcList.length > 0) {
      const mapped = prcList.map((c, idx) => ({
        id: idx + 1,
        name: c.name,
        description: c.description,
        color: "#3B82F6",
      }));
      setCategories(mapped);
    }
  }, [isOpen, prcList, categories.length, setCategories]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    color: "#3B82F6",
  });
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const [editingPrcId, setEditingPrcId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  async function confirmDeleteAction() {
    if (!confirmDelete) return;
    setDeleting(true);
    setDeleteError(null);
    try {
      const res = await fetch("https://localhost:3002/private/delPrc", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ product_category_id: confirmDelete.id }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(
          text || `Falha ao apagar categoria (HTTP ${res.status})`
        );
      }
      setDeletedIds((prev) => [...prev, confirmDelete.id]);
      setConfirmDelete(null);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setDeleteError(msg);
    } finally {
      setDeleting(false);
    }
  }

  const handleAddCategory = async () => {
    if (!newCategory.name.trim()) {
      setAddError("Informe um nome para a categoria.");
      return;
    }
    if (!added_by) {
      setAddError("Usuário não identificado (added_by ausente).");
      return;
    }

    setAdding(true);
    setAddError(null);
    try {
      const res = await fetch("https://localhost:3002/private/regPrc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: newCategory.name,
          added_by,
          description: newCategory.description,
        }),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Falha ao cadastrar categoria (HTTP ${res.status})`);
      }

      // Atualiza a listagem a partir da API para refletir o novo dado
      await fetchCategories();

      // Limpa o formulário
      setNewCategory({ name: "", description: "", color: "#3B82F6" });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setAddError(msg);
    } finally {
      setAdding(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 sm:flex-none bg-transparent"
        >
          <Settings className="mr-2 w-4 h-4" />
          Gerenciar Categorias
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gerenciar Categorias</DialogTitle>
        </DialogHeader>

        <div className="mb-4 pb-4 border-b">
          <h3 className="mb-3 font-semibold text-lg">
            Adicionar Nova Categoria
          </h3>
          <div className="gap-3 grid">
            <div className="gap-2 grid">
              <Label htmlFor="newCategoryName">Nome da Categoria</Label>
              <Input
                id="newCategoryName"
                placeholder="Ex: Smartphones"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
              />
            </div>
            {addError && (
              <div className="text-sm text-red-600">{addError}</div>
            )}

            <div className="gap-2 grid">
              <Label htmlFor="newCategoryDescription">Descrição</Label>
              <Textarea
                id="newCategoryDescription"
                placeholder="Descreva a categoria..."
                value={newCategory.description}
                onChange={(e) =>
                  setNewCategory({
                    ...newCategory,
                    description: e.target.value,
                  })
                }
                rows={2}
              />
            </div>

            <Button onClick={handleAddCategory} className="w-full" disabled={adding}>
              <Plus className="mr-2 w-4 h-4" />
              {adding ? "Adicionando..." : "Adicionar Categoria"}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-lg">Categorias Existentes</h3>
          <div className="space-y-3">
            {prcList
              .filter((c) => !deletedIds.includes(c.product_category_id))
              .map((category) => (
                <div
                  key={category.product_category_id}
                  className="p-4 border rounded-lg"
                >
                  {editingPrcId === category.product_category_id ? (
                    <EditCategoryForm
                      category={{
                        name: category.name,
                        description: category.description,
                        color: "#3B82F6",
                      }}
                      onSave={(updatedCategory) => {
                        console.warn(
                          "Editar categoria (persistir em outro local):",
                          category.product_category_id,
                          updatedCategory
                        );
                        setEditingPrcId(null);
                      }}
                      onCancel={() => setEditingPrcId(null)}
                    />
                  ) : (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-accent rounded-full w-4 h-4" />
                        <div>
                          <h4 className="font-semibold">{category.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setEditingPrcId(category.product_category_id)
                          }
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent text-red-600 hover:text-red-700"
                          onClick={() =>
                            setConfirmDelete({
                              id: category.product_category_id,
                              name: category.name,
                            })
                          }
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            {prcList.length === 0 && (
              <div className="text-gray-500 text-sm">
                Nenhuma categoria encontrada.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Fechar
          </Button>
        </div>

        <Dialog
          open={!!confirmDelete}
          onOpenChange={(open) => !open && setConfirmDelete(null)}
        >
          <DialogContent className="sm:max-w-[420px]">
            <DialogHeader>
              <DialogTitle>Confirmar exclusão</DialogTitle>
            </DialogHeader>
            <p className="text-gray-700 text-sm">
              Deseja apagar o item: {confirmDelete?.name}?
            </p>
            {deleteError && (
              <div className="bg-red-50 mt-2 p-2 rounded text-red-700 text-sm">
                {deleteError}
              </div>
            )}
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setConfirmDelete(null)}>
                Não
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={confirmDeleteAction}
                disabled={deleting}
              >
                {deleting ? "Apagando..." : "Sim"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}

function EditCategoryForm({
  category,
  onSave,
  onCancel,
}: {
  category: { name: string; description: string; color: string };
  onSave: (category: {
    name: string;
    description: string;
    color: string;
  }) => void;
  onCancel: () => void;
}) {
  const [editData, setEditData] = useState(category);

  return (
    <div className="space-y-3">
      <div className="gap-2 grid">
        <Label>Nome da Categoria</Label>
        <Input
          value={editData.name}
          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
        />
      </div>

      <div className="gap-2 grid">
        <Label>Descrição</Label>
        <Textarea
          value={editData.description}
          onChange={(e) =>
            setEditData({ ...editData, description: e.target.value })
          }
          rows={2}
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={onCancel}>
          Cancelar
        </Button>
        <Button size="sm" onClick={() => onSave(editData)}>
          Salvar
        </Button>
      </div>
    </div>
  );
}
