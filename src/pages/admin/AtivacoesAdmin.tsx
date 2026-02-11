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

type Ativacao = Tables<"activacoes_motoristas">;

export default function AtivacoesAdmin() {
  const [data, setData] = useState<Ativacao[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<Ativacao | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    const { data: rows } = await supabase.from("activacoes_motoristas").select("*").order("created_at", { ascending: false });
    setData(rows || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar esta ativação?")) return;
    await supabase.from("activacoes_motoristas").delete().eq("id", id);
    toast({ title: "Ativação apagada" });
    fetchData();
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      local: fd.get("local") as string || null,
      data: fd.get("data") as string || new Date().toISOString().split("T")[0],
      motoristas_abordados: Number(fd.get("motoristas_abordados")) || 0,
      motoristas_registados: Number(fd.get("motoristas_registados")) || 0,
      observacoes: fd.get("observacoes") as string || null,
    };

    if (editItem) {
      await supabase.from("activacoes_motoristas").update(payload).eq("id", editItem.id);
      toast({ title: "Ativação atualizada" });
    } else {
      await supabase.from("activacoes_motoristas").insert(payload);
      toast({ title: "Ativação adicionada" });
    }
    setDialogOpen(false);
    setEditItem(null);
    fetchData();
  };

  const filtered = data.filter((a) =>
    (a.local || "").toLowerCase().includes(search.toLowerCase()) ||
    (a.observacoes || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Ativações de Motoristas</h1>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) setEditItem(null); }}>
          <DialogTrigger asChild>
            <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>{editItem ? "Editar" : "Nova"} Ativação</DialogTitle></DialogHeader>
            <form onSubmit={handleSave} className="space-y-3">
              <div><Label>Local</Label><Input name="local" defaultValue={editItem?.local || ""} /></div>
              <div><Label>Data</Label><Input name="data" type="date" defaultValue={editItem?.data || ""} /></div>
              <div><Label>Motoristas Abordados</Label><Input name="motoristas_abordados" type="number" defaultValue={editItem?.motoristas_abordados || 0} /></div>
              <div><Label>Motoristas Registados</Label><Input name="motoristas_registados" type="number" defaultValue={editItem?.motoristas_registados || 0} /></div>
              <div><Label>Observações</Label><Input name="observacoes" defaultValue={editItem?.observacoes || ""} /></div>
              <Button type="submit" className="w-full">Guardar</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Pesquisar..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
      </div>

      {loading ? <p className="text-muted-foreground">A carregar...</p> : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Local</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Abordados</TableHead>
                <TableHead>Registados</TableHead>
                <TableHead>Observações</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem dados</TableCell></TableRow>
              ) : filtered.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.local || "-"}</TableCell>
                  <TableCell>{a.data}</TableCell>
                  <TableCell>{a.motoristas_abordados}</TableCell>
                  <TableCell>{a.motoristas_registados}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{a.observacoes || "-"}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost" onClick={() => { setEditItem(a); setDialogOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                      <Button size="sm" variant="ghost" className="text-destructive" onClick={() => handleDelete(a.id)}><Trash2 className="h-4 w-4" /></Button>
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
