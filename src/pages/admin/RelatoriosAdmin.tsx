import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Pencil, Plus, Search } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Relatorio = Tables<"relatorios_diarios">;

export default function RelatoriosAdmin() {
  const [data, setData] = useState<Relatorio[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<Relatorio | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    const { data: rows } = await supabase.from("relatorios_diarios").select("*").order("data_relatorio", { ascending: false });
    setData(rows || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar este relatório?")) return;
    await supabase.from("relatorios_diarios").delete().eq("id", id);
    toast({ title: "Relatório apagado" });
    fetchData();
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      data_relatorio: fd.get("data_relatorio") as string,
      novos_registos: Number(fd.get("novos_registos")) || 0,
      atualizacoes_dados: Number(fd.get("atualizacoes_dados")) || 0,
      perdidos_achados: Number(fd.get("perdidos_achados")) || 0,
      carteira_percent: Number(fd.get("carteira_percent")) || 0,
      questoes_usuarios: fd.get("questoes_usuarios") as string || null,
      questoes_motoristas: fd.get("questoes_motoristas") as string || null,
      observacoes: fd.get("observacoes") as string || null,
    };

    if (editItem) {
      await supabase.from("relatorios_diarios").update(payload).eq("id", editItem.id);
      toast({ title: "Relatório atualizado" });
    } else {
      await supabase.from("relatorios_diarios").insert(payload);
      toast({ title: "Relatório adicionado" });
    }
    setDialogOpen(false);
    setEditItem(null);
    fetchData();
  };

  const filtered = data.filter((r) =>
    r.data_relatorio.includes(search) ||
    (r.observacoes || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Relatórios Diários</h1>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditItem(null); }}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editItem ? "Editar" : "Novo"} Relatório</DialogTitle></DialogHeader>
            <form onSubmit={handleSave} className="space-y-3">
              <div><Label>Data *</Label><Input name="data_relatorio" type="date" required defaultValue={editItem?.data_relatorio || new Date().toISOString().split("T")[0]} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Novos Registos</Label><Input name="novos_registos" type="number" defaultValue={editItem?.novos_registos || 0} /></div>
                <div><Label>Atualizações</Label><Input name="atualizacoes_dados" type="number" defaultValue={editItem?.atualizacoes_dados || 0} /></div>
                <div><Label>Perdidos/Achados</Label><Input name="perdidos_achados" type="number" defaultValue={editItem?.perdidos_achados || 0} /></div>
                <div><Label>Carteira %</Label><Input name="carteira_percent" type="number" step="0.01" defaultValue={editItem?.carteira_percent || 0} /></div>
              </div>
              <div><Label>Questões Usuários</Label><Input name="questoes_usuarios" defaultValue={editItem?.questoes_usuarios || ""} /></div>
              <div><Label>Questões Motoristas</Label><Input name="questoes_motoristas" defaultValue={editItem?.questoes_motoristas || ""} /></div>
              <div><Label>Observações</Label><Input name="observacoes" defaultValue={editItem?.observacoes || ""} /></div>
              <Button type="submit" className="w-full">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Pesquisar por data ou observações..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {loading ? <p className="text-muted-foreground">A carregar...</p> : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Novos Registos</TableHead>
                <TableHead>Atualizações</TableHead>
                <TableHead>Perdidos</TableHead>
                <TableHead>Carteira %</TableHead>
                <TableHead>Observações</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-8">Sem relatórios</TableCell></TableRow>
              ) : filtered.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.data_relatorio}</TableCell>
                  <TableCell>{r.novos_registos}</TableCell>
                  <TableCell>{r.atualizacoes_dados}</TableCell>
                  <TableCell>{r.perdidos_achados}</TableCell>
                  <TableCell>{r.carteira_percent}%</TableCell>
                  <TableCell className="max-w-[200px] truncate">{r.observacoes || "-"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost" onClick={() => { setEditItem(r); setDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(r.id)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
