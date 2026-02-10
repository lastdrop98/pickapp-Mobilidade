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

type Ativacao = Tables<"ativacoes_motoristas">;

export default function AtivacoesAdmin() {
  const [data, setData] = useState<Ativacao[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [editItem, setEditItem] = useState<Ativacao | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    const { data: rows } = await supabase.from("ativacoes_motoristas").select("*").order("criado_em", { ascending: false });
    setData(rows || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar esta ativação?")) return;
    await supabase.from("ativacoes_motoristas").delete().eq("id", id);
    toast({ title: "Ativação apagada" });
    fetchData();
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      motorista_id: fd.get("motorista_id") as string || null,
      data_followup: fd.get("data_followup") as string || null,
      resultado: fd.get("resultado") as string || null,
      notas: fd.get("notas") as string || null,
    };

    if (editItem) {
      await supabase.from("ativacoes_motoristas").update(payload).eq("id", editItem.id);
      toast({ title: "Ativação atualizada" });
    } else {
      await supabase.from("ativacoes_motoristas").insert(payload);
      toast({ title: "Ativação adicionada" });
    }
    setDialogOpen(false);
    setEditItem(null);
    fetchData();
  };

  const filtered = data.filter((a) =>
    (a.resultado || "").toLowerCase().includes(search.toLowerCase()) ||
    (a.notas || "").toLowerCase().includes(search.toLowerCase())
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
              <div><Label>ID Motorista</Label><Input name="motorista_id" defaultValue={editItem?.motorista_id || ""} /></div>
              <div><Label>Data Follow-up</Label><Input name="data_followup" type="date" defaultValue={editItem?.data_followup || ""} /></div>
              <div><Label>Resultado</Label><Input name="resultado" defaultValue={editItem?.resultado || ""} /></div>
              <div><Label>Notas</Label><Input name="notas" defaultValue={editItem?.notas || ""} /></div>
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
                <TableHead>Motorista ID</TableHead>
                <TableHead>Follow-up</TableHead>
                <TableHead>Resultado</TableHead>
                <TableHead>Notas</TableHead>
                <TableHead>Criado em</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Sem dados</TableCell></TableRow>
              ) : filtered.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-mono text-xs">{a.motorista_id?.slice(0, 8) || "-"}</TableCell>
                  <TableCell>{a.data_followup || "-"}</TableCell>
                  <TableCell>{a.resultado || "-"}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{a.notas || "-"}</TableCell>
                  <TableCell>{a.criado_em ? new Date(a.criado_em).toLocaleDateString("pt") : "-"}</TableCell>
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
